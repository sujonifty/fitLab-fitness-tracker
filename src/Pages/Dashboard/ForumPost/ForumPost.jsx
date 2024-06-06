import { Button, Card, Label, TextInput } from "flowbite-react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";

const ForumPost = () => {
    const {user}=useContext(AuthContext);
    const axiosSecure = useAxiosSecure();
    const { data: authors = [] } = useQuery({
        queryKey: ['authors'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/addPost/?user=${user?.email}`);
            return res.data;
        }
    })
    const {name,email,photo,roll}=(authors)
    const handlePost=(e)=>{
        e.preventDefault();
        const postTitle=e.target.title.value;
        const postDescription=e.target.description.value;
        const author=name;
        const authorEmail=email;
        const authorPhoto=photo;
        const authorRoll=roll;
        const postInfo={postTitle, postDescription,author,authorEmail,authorPhoto,authorRoll };
        console.log(postInfo);
    }
    return (
        <Card className="max-w-sm">
            <form onSubmit={handlePost} className="flex flex-col gap-4">
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor=" title" value="Post Title" />
                    </div>
                    <TextInput name="title" type="text" placeholder="write post description" required />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="description" value="Post Description" />
                    </div>
                    <TextInput name="description" type="text" required />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="image" value="Image" />
                    </div>
                    <TextInput name="photo" type="text" required />
                </div>
                <Button type="submit">Add Post</Button>
            </form>
        </Card>
    );
};

export default ForumPost;