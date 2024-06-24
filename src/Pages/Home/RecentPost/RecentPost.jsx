import { useQuery } from "@tanstack/react-query";
import ForumCard from "../../Forum/Forum/ForumCard/ForumCard";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";


const RecentPost = () => {
    const axiosPublic=useAxiosPublic();
    const { data: posts= []} = useQuery({
        queryKey: ['post'],
        queryFn: async () => {
            const res = await axiosPublic.get('/recentPosts');
            return res.data;
        }
    })
    const recentPosts=posts.slice(0,6)
    // console.log(posts)
    return (
        <div>
            <div className="container mx-auto p-4  space-y-2 text-center">
                <h2 className="text-5xl font-bold">Latest Community posts</h2>
                <p className="text-base-content w-10/12 mx-auto">Certainly! "Latest Community/Forum Posts" is a dynamic section dedicated to showcasing the most recent discussions, questions, and updates within an online community or forum. It serves as a real-time feed where users can discover and engage with current topics, seek help, share knowledge, and stay informed about community activities.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-16">
                {
                    recentPosts.map(post=><ForumCard key={post._id} post={post}></ForumCard>)
                }
            </div>
        </div>
    );
};

export default RecentPost;