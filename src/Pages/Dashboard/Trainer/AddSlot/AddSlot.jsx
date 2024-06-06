

import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import { useContext, useEffect, useState } from "react";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "../../../../Provider/AuthProvider";
import Select from 'react-select';
import Swal from "sweetalert2";


const AddSlot = () => {
    const { user } = useContext(AuthContext);
    const [selectDays, setSelectDays] = useState([]);
    const [selectedClasses, setSelectedClasses] = useState([]);
    const [myClasses, setMyClasses] = useState([]);
    const [classes, setClasses] = useState(null);
    const axiosSecure = useAxiosSecure();

    const { data: trainers = [] } = useQuery({
        queryKey: ['trainer'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/trainer/${user?.email}`);
            return res.data;
        }
    })

    // for dynamic days 
    const { selectedDays, } = trainers
    const handleChange = (selectedOptions) => {
        setSelectDays(selectedOptions);
    };
    // for dynamic class 
    useEffect(() => {
        axiosSecure.get('/classItem')
            .then(res => {
                setMyClasses(res.data);
            })
    }, [])

    const demo = myClasses.map(item => ({ value: item.className, label: item.className }));
    const handleClasses = (selectedOptions) => {
        setSelectedClasses(selectedOptions);
    };

    //store data in mongodb

    const handleAddSlot = (e) => {
        e.preventDefault();
        const slotName = e.target.slotName.value;
        const slotTime = e.target.slotTime.value;
        const { value } = selectedClasses;
        // console.log('value',value)
        const { name, email, skill, photo, age } = trainers
        const trainerInfo = { name, email, skill, photo, age }
        const slotInfo = { email, trainerInfo, slotName, slotTime, selectDays, selectedClasses }
        // console.log(slotInfo)
        // console.log('trainerInfo',trainerInfo)
        // axiosSecure.post(`/addSlot/?trainerEmail=${user?.email}& slot=${slotName}`, slotInfo)
        axiosSecure.post('/addSlot', slotInfo)

            .then(res => {
                console.log(res.data);
                if (res.data.insertedId) {
                    // trainer info updated of class collection

                    axiosSecure.patch(`/updatedTrainerInfo/?classes=${value}`, trainerInfo)

                        .then(res => {
                            console.log(res.data);

                        })
                        .catch(error => {
                            if (error.message) {
                                console.log(error.message);
                            }

                        })
                    Swal.fire({
                        icon: "success",
                        title: "Slot added Successfully",
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
        // const {value}=selectedClasses;
        // console.log('value',value)
        // axiosSecure.patch(`/updatedTrainerInfo/?classes=${value}`, trainerInfo)

        // .then(res => {
        //     console.log(res.data);
        //     if (res.data.modifiedCount>0) {
        //         Swal.fire({
        //             icon: "success",
        //             title: "trainerInfo updated Successfully",
        //             showConfirmButton: false,
        //             timer: 2500
        //         });
        //     }
        // })
        // .catch(error => {
        //     if (error.message) {
        //         console.log(error.message);
        //     }

        // })
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
                    name="className"
                    options={demo}
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