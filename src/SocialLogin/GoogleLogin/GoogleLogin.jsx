import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { Button } from "flowbite-react";
import Swal from "sweetalert2";


const GoogleLogin = () => {
    const { googleSignIn,setError } = useContext(AuthContext);
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();

    const handleGoogleSignIn = () =>{
        googleSignIn()
        .then(result =>{
            console.log(result.user);
            const userInfo = {
                email: result.user?.email,
                name: result.user?.displayName
            }
            axiosPublic.post('/users', userInfo)
            .then(res =>{
                console.log(res.data);
                navigate('/');
                Swal.fire({
                    title: 'Success!',
                    text: 'Login successfully by Google',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                })
            })
        })
        .catch(error => {
            console.log(error)
            setError(error.message);
        })
    }
    return (
        <div className="p-7">
            <div className="divider"></div>
            <div>
                <Button onClick={handleGoogleSignIn} className="w-full">
                    <FaGoogle className="mr-2"></FaGoogle>
                    Google
                </Button>
            </div>
        </div>
    );
};

export default GoogleLogin;