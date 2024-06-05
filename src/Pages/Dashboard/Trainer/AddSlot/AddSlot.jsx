

"use client";

import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import { useContext, useEffect, useState } from "react";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "../../../../Provider/AuthProvider";
import Select from 'react-select';


const AddSlot = () => {
    const { user } = useContext(AuthContext);
    const [selectDays, setSelectDays] = useState([]);
    const [selectedClasses, setSelectedClasses] = useState([]);
    const axiosSecure = useAxiosSecure();
    const { data: trainers = [], refetch } = useQuery({
        queryKey: ['trainer'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/trainer/${user?.email}`);
            return res.data;
        }
    })
    const { selectedDays, time } = trainers
    const handleChange = (selectedOptions) => {
        setSelectDays(selectedOptions);
    };

    const classes = [

        { value: 'Yoga', label: 'Yoga' },
        { value: 'Aerial yoga', label: 'Aerial yoga' },
        { value: 'Fitness', label: 'Fitness' },
        { value: 'Crossfit', label: 'Crossfit' },
        { value: 'Cardio', label: 'Cardio' },
    ];
    const handleClasses = (selectedOptions) => {
        setSelectedClasses(selectedOptions);
    };


    const handleAddSlot = (e) => {
        e.preventDefault();
        const slotName=e.target.slotName.value;
        const slotTime=e.target.slotTime.value;
        const slotInfo={slotName, slotTime,selectDays,selectedClasses}
        console.log(slotInfo)
    }
    return (
        <form onSubmit={handleAddSlot} className="flex max-w-md flex-col gap-4">
            <div>
                <div className="mb-2 block">
                    <Label value=" Slot name" />
                </div>
                <TextInput type="text" name="slotName" placeholder="Example: morning" required />
            </div>
            <div>
                <div className="mb-2 block">
                    <Label value="Slot time" />
                </div>
                <TextInput type="number" name="slotTime" placeholder="example: 1 hour" required />
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
            <div>
                <div className="mb-2 block">
                    <Label value="Available Class" />
                </div>
                <Select
                    isMulti
                    name="className"
                    options={classes}
                    className="basic-multi-select rounded-xl"
                    classNamePrefix="select"
                    onChange={handleClasses}
                    value={selectedClasses}
                    placeholder="Select available days..."
                />
            </div>
            <Button type="submit">Add Slot</Button>
        </form>
    );
};

export default AddSlot;