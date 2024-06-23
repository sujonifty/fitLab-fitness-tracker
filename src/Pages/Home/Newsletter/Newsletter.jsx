import { Button, Card, Label, TextInput } from "flowbite-react";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import Swal from "sweetalert2";

const Newsletter = () => {
    const axiosPublic = useAxiosPublic();

    const handleSubmit = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const info = { email };
        axiosPublic.post('/newsletter', info)
            .then(res => {
                console.log(res.data);
                if (res.data.insertedId) {
                    Swal.fire({
                        icon: "success",
                        title: `Congratulation`,
                        showConfirmButton: false,
                        timer: 2500
                    });
                }
            })
            .catch(error => {
                if (error.message) {
                    console.log(error.message);
                }

            })
    }
    return (
        <div>
            <Card className="max-w-sm bg-gray-600 text-gray-100">
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">

                    <div>
                        <TextInput name="email" type="email" placeholder="name@gmail.com" required />
                    </div>


                    <Button type="submit">Subscribe Now</Button>
                </form>
            </Card>
        </div>
    );
};

export default Newsletter;