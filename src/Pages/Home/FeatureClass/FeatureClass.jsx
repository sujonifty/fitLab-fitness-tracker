import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import ClassCard from "../../Classes/ClassCard/ClassCard";


const FeatureClass = () => {
    const axiosPublic = useAxiosPublic();
    const { data:featureClasses = [], refetch } = useQuery({
        queryKey: ['classes'],
        queryFn: async () => {
            const res = await axiosPublic.get('/featureClasses');
            return res.data;
        }
    })
    const allClasses=featureClasses.slice(0,6)
    console.log(allClasses.length)
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {
                    allClasses.map(item=><ClassCard key={item._id} item={item}></ClassCard>)
                }
                
            </div>
        </div>
    );
};

export default FeatureClass;