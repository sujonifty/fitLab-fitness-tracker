import { useQuery } from "@tanstack/react-query";
import ForumCard from "../../Forum/Forum/ForumCard/ForumCard";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";


const RecentPost = () => {
    const axiosPublic=useAxiosPublic();
    const { data: recentPosts= []} = useQuery({
        queryKey: ['post'],
        queryFn: async () => {
            const res = await axiosPublic.get('/recentPosts');
            return res.data;
        }
    })
    // console.log(posts)
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-16">
                {
                    recentPosts.map(post=><ForumCard key={post._id} post={post}></ForumCard>)
                }
            </div>
        </div>
    );
};

export default RecentPost;