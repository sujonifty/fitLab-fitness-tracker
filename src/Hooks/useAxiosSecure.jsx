import axios from "axios";

const axiosSecure = axios.create({
    baseURL: 'https://fit-lab-server-side.vercel.app'
})
const useAxiosSecure = () => {
    return axiosSecure;
};

export default useAxiosSecure;