import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import ClassCard from "../ClassCard/ClassCard";
import { Helmet } from "react-helmet-async";
// import ClassCard from "../ClassCard/ClassCard";


const AllClasses = () => {
const axiosPublic=useAxiosPublic();
    const { data: allClasses = [], refetch } = useQuery({
        queryKey: ['classes'],
        queryFn: async () => {
            const res = await axiosPublic.get('/allClasses');
            return res.data;
        }
    })

    console.log(allClasses)
    return (
        <div>
            <Helmet><title>fitLab | AllClass</title></Helmet>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {
                    allClasses.map(item=><ClassCard key={item._id} item={item}></ClassCard>)
                }
                
            </div>
        </div>
    );
};

export default AllClasses;