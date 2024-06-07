import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import ForumCard from "./ForumCard/ForumCard";


const Forum = () => {
    const axiosPublic=useAxiosPublic();
    const { data: posts= []} = useQuery({
        queryKey: ['post'],
        queryFn: async () => {
            const res = await axiosPublic.get('/forum');
            return res.data;
        }
    })
    // console.log(posts)
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-16">
                {
                    posts.map(post=><ForumCard key={post._id} post={post}></ForumCard>)
                }
            </div>
        </div>
    );
};

export default Forum;