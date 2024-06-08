import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Slot from "./Slot";


const CardDetails = () => {
    
    const singleTrainer = useLoaderData();
    const axiosSecure=useAxiosSecure();
    const { _id, name, email, time, photo, mySkill, } = singleTrainer;

    const { data: slots = [] } = useQuery({
        queryKey: ['trainer'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/cardDetail/?trainer=${singleTrainer?.email}`);
            // console.log(singleTrainer?.email)
            return res.data;
        }
    })
    console.log(slots)
    // console.log(mySkill)
    return (
        <section className="bg-base-200 text-gray-100">
            <div className="container flex flex-col-reverse mx-auto lg:flex-row">
                <div className="flex flex-col px-6 py-8 space-y-6 rounded-sm sm:p-8 lg:p-12 lg:w-1/2 xl:w-2/5 bg-violet-100 text-gray-900">
                    <div className="max-w-md p-6 overflow-hidden rounded-lg shadow bg-base-200 text-gray-100">
                        <article>
                            <div className="flex items-center mt-8 space-x-4">
                                <img src={photo} alt="" className="w-10 h-10 rounded-full bg-gray-500" />
                                <div>
                                    <h3 className="text-sm text-black font-bold">{name}</h3>
                                    <time className="text-sm text-gray-700">{email}</time>
                                </div>
                            </div>

                            <div className="flex justify-center gap-10">
                                <div>
                                    <h2 className="mt-6 text-black font-semibold">Qualifications</h2>
                                    <ul className="ml-6 text-gray-700">
                                        <li>{singleTrainer?.mySkill[0]}</li>
                                        <li>{singleTrainer?.mySkill[1]}</li>
                                        <li>{singleTrainer?.mySkill[2]}</li>
                                        <li>{singleTrainer?.mySkill[3]}</li>
                                        <li>{singleTrainer?.mySkill[4]}</li>
                                        <li>{singleTrainer?.mySkill[5]}</li>
                                    </ul>
                                </div>
                                <div>
                                    <p className="mt-6 text-black font-semibold">Available Time</p>
                                    <p className=" text-gray-700">Per day: {time} hours</p>
                                </div>
                            </div>

                        </article>
                    </div>
                </div>
                <div className="lg:w-1/2 xl:w-3/5">
                    <div className="flex items-center justify-center p-4 md:p-8 lg:p-5">
                        <div className="max-w-md p-6 overflow-hidden rounded-lg shadow  text-gray-100">
                            <article>
                                

                                <div className="flex justify-center gap-10">
                                    
                                    {
                                        slots.map(slot=><Slot key={slot._id} slot={slot}></Slot>)
                                    }
                                </div>

                            </article>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CardDetails;