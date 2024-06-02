import { useEffect, useState } from "react";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import TrainerCard from "../TrainerCard/TrainerCard";

const Trainer = () => {
    const axiosPublic = useAxiosPublic();
    const [trainers, setTrainers]= useState([]);
    useEffect(()=>{
        axiosPublic.get('/trainers')
        .then(res=>{
            setTrainers(res.data);
        })
    },[])
    console.log()
    return (
        <div>
            <div>
                {
                    trainers.map(trainer=><TrainerCard key={trainer._id} trainer={trainer}></TrainerCard>)
                }
            </div>
        </div>
    );
};

export default Trainer;