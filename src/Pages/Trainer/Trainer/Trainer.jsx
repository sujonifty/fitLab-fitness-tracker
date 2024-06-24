// import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import TrainerCard from "../TrainerCard/TrainerCard";
import { useQuery } from "@tanstack/react-query";

const Trainer = () => {
    const axiosPublic = useAxiosPublic();
    
    const { data: trainers = [] } = useQuery({
        queryKey: ['trainers'],
        queryFn: async () => {
            const res = await axiosPublic.get('/trainers');
            return res.data;
        }
    })
    console.log(trainers)
    return (
        <div>
            <Helmet><title>fitLab | Trainer</title></Helmet>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10 my-16">
                {
                    trainers.map(trainer=><TrainerCard key={trainer._id} trainer={trainer}></TrainerCard>)
                }
            </div>
        </div>
    );
};

export default Trainer;