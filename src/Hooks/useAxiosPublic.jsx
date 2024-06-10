import axios from "axios";

const axiosPublic = axios.create({
    baseURL: 'https://fit-lab-server-side.vercel.app'
})

const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;