import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const useAdmin = () => {
    const { user, loading } = useContext(AuthContext);
    const axiosSecure = useAxiosSecure();
    console.log(user?.email)
    const { data: isAdmin, isPending: isAdminLoading } = useQuery({
        queryKey: [user?.email, 'isAdmin'],
        enabled: !loading && !!user?.email && !!localStorage.getItem('access-token'),
        queryFn: async () => {
            console.log('checking admin', user)
            if (!user?.email) {
                return false; // Return false if user.email is not defined
            }
            const res = await axiosSecure.get(`/admin/?email=${user.email}`);
            console.log(res.data);
            return res.data?.admin;
        }
        
    })
    return [isAdmin, isAdminLoading]
};

export default useAdmin;