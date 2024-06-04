

"use client";

import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import { useContext, useEffect, useState } from "react";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "../../../../Provider/AuthProvider";
import Select from 'react-select';




const AddSlot = () => {
    const {user}=useContext(AuthContext);
    const [selectDays, setSelectDays] = useState([]);
    const axiosSecure = useAxiosSecure();
const [preDay,setPreDay]=useState()
    const { data: trainers = [], refetch } = useQuery({
        queryKey: ['trainer'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/trainer/${user?.email}`);
            return res.data;
        }
    })
//     const [trainerD,setTrainerD]=useState({})
//    useEffect(()=>{
//     trainers.map(info=>{
//         setTrainerD(info);   
//     })
//    },[])
//     console.log('trainerInfo',trainerD)
    console.log('trainerInfo',trainers)
const {selectedDays}=trainers
console.log('trainerday',selectedDays)
    // const days = [

    //     { value: 'saturday', label: 'Saturday' },
    //     { value: 'sunday', label: 'Sunday' },
    //     { value: 'monday', label: 'Monday' },
    //     { value: 'tuesday', label: 'Tuesday' },
    //     { value: 'wednesday', label: 'Wednesday' },
    //     { value: 'thursday', label: 'Thursday' },
    //     { value: 'friday', label: 'Friday' }
    // ];


    const handleChange = (selectedOptions) => {
        setSelectDays(selectedOptions);
    };
    return (
        <form className="flex max-w-md flex-col gap-4">
            <div>
                <div className="mb-2 block">
                    <Label value=" Slot name" />
                </div>
                <TextInput type="text" placeholder="Example: morning" required />
            </div>
            <div>
                <div className="mb-2 block">
                    <Label value="Slot time" />
                </div>
                <TextInput type="number" placeholder="example: 1 hour" required />
            </div>
            <div>
                <div className="mb-2 block">
                    <Label value="Available Day" />
                </div>
                <Select
                    isMulti
                    name="day"
                    options={selectedDays}
                    className="basic-multi-select rounded-xl"
                    classNamePrefix="select"
                    onChange={handleChange}
                    value={selectDays}
                    placeholder="Select available days..."
                />
            </div>
            <Button type="submit">Add Slot</Button>
        </form>
    );
};

export default AddSlot;