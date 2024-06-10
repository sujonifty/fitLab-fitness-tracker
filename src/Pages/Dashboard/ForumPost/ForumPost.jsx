import { Button, Card, Label, TextInput } from "flowbite-react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import Swal from "sweetalert2";

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
        const image=e.target.photo.value;
        const author=name;
        const authorEmail=email;
        const authorPhoto=photo;
        const authorRoll=roll;
        const postTime =new Date();
        const postInfo={postTitle, postDescription,image,author,authorEmail,authorPhoto,authorRoll,postTime };
        console.log('postInfo',postInfo);
        axiosSecure.post(`/addPost`, postInfo)
        .then(res=>{
            console.log(res.data);
            if(res.data.insertedId){
                Swal.fire({
                    icon: "success",
                    title: "Post added Successfully",
                    showConfirmButton: false,
                    timer: 2500
                });
            }
        })
        .catch(error => {
            if (error.message) {
                console(error.message);
            }

        })
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