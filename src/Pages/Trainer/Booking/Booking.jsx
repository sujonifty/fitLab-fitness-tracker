import { Card, Kbd } from "flowbite-react";
// import { useLoaderData, useParams } from "react-router-dom";
import PaymentModal from "../../Payment/PaymentModal";
import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import { useLoaderData } from "react-router-dom";

const Booking = () => {
    const {user}=useContext(AuthContext);
    const singleSlot = useLoaderData();
    // const {id}=useParams();
    // console.log(singleSlot);
    const { trainerInfo, selectDays, selectedClasses, slotTime, slotName } = singleSlot;
    const { name, email, photo } = trainerInfo;
    // console.log(selectedClasses.value)
    const uniqueClassName = selectedClasses.value;
    console.log('class',uniqueClassName)
    return (
        <div>
            <div className="p-5 mx-auto sm:p-10 md:p-16 bg-base-100 text-gray-100">
                <div className="flex flex-col max-w-3xl mx-auto overflow-hidden rounded">
                    <img src="https://i.ibb.co/0DhHKLZ/trainer.jpg" alt="" className="w-full object-fill opacity-50 h-60 sm:h-96 bg-gray-500 " />
                    <div className="p-6 z-20 pb-12 m-4 mx-auto -mt-16 space-y-6 lg:max-w-2xl sm:px-10 sm:mx-12 lg:rounded-md ">
                        <Card className="max-w-sm" imgSrc={photo} horizontal>
                            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                Slot name: {slotName}
                            </h5>
                            <p className="font-normal text-gray-700 dark:text-gray-400">Available {slotTime} hours per day.</p>
                            <p className="font-normal text-gray-700 dark:text-gray-400"><span className="font-semibold">Trainer:</span> {name}</p>
                            <p className="font-normal text-gray-700 dark:text-gray-400"><span className="font-semibold">Email:</span> {email}</p>
                            <p className="font-normal text-gray-700 dark:text-gray-400"><span className="font-semibold">Class:</span> {selectedClasses.value}</p>
                            <ul className="font-normal text-gray-700 dark:text-gray-400 grid grid-cols-4">
                                {
                                    selectDays.map(day => <li key={day.index}><Kbd color="gray w-10">{day.value}</Kbd></li>)
                                }
                            </ul>
                        </Card>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

                <Card className='max-w-sm'>
                    <h5 className=" text-xl font-bold text-white dark:text-gray-400 p-6 text-center shadow-xl rounded-t-lg mt-0  bg-cyan-600">Advanced plan</h5>
                    <div className="flex items-baseline  justify-center text-gray-900 dark:text-white">
                        <span className="text-3xl font-semibold">$</span>
                        <span className="text-5xl font-extrabold tracking-tight">150</span>
                        <span className="ml-1 text-xl font-normal text-gray-500 dark:text-gray-400">/month</span>
                    </div>
                    <ul className="my-7 space-y-5">
                        <li className="flex space-x-3">
                            <svg
                                className="h-5 w-5 shrink-0 text-cyan-600 dark:text-cyan-500"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
                                All benefits of advanced membership
                            </span>
                        </li>
                        <li className="flex space-x-3">
                            <svg
                                className="h-5 w-5 shrink-0 text-cyan-600 dark:text-cyan-500"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
                                3 special session per week.
                            </span>
                        </li>
                        <li className="flex space-x-3">
                            <svg
                                className="h-5 w-5 shrink-0 text-cyan-600 dark:text-cyan-500"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
                                Use of all training equipments.
                            </span>
                        </li>
                        <li className="flex space-x-3">
                            <svg
                                className="h-5 w-5 shrink-0 text-cyan-600 dark:text-cyan-500"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
                                Access to locker rooms and showers
                            </span>
                        </li>
                        <li className="flex space-x-3 decoration-gray-500">
                            <svg
                                className="h-5 w-5 shrink-0 text-cyan-600 dark:text-cyan-500"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            <span className="text-base font-normal leading-tight text-gray-500">
                                Gym access during operating hours.
                            </span>
                        </li>
                        <li className="flex space-x-3 decoration-gray-500">
                            <svg
                                className="h-5 w-5 shrink-0 text-cyan-600 dark:text-cyan-500"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            <span className="text-base font-normal leading-tight text-gray-500">
                                Access group fitness classes
                            </span>
                        </li>
                        <li className="flex space-x-3 decoration-gray-500">
                            <svg
                                className="h-5 w-5 shrink-0 text-cyan-600 dark:text-cyan-500"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            <span className="text-base font-normal leading-tight text-gray-500">
                                Access to sauna or steam room
                            </span>
                        </li>
                        <li className="flex space-x-3 decoration-gray-500">
                            <svg
                                className="h-5 w-5 shrink-0 text-cyan-600 dark:text-cyan-500"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            <span className="text-base font-normal leading-tight text-gray-500">Free nutrition counseling.</span>
                        </li>
                    </ul>
                    
                        {/* <button
                            type="button"
                            className="inline-flex w-full justify-center rounded-lg bg-cyan-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-700 focus:outline-none focus:ring-4 focus:ring-cyan-200 dark:focus:ring-cyan-900"
                        >
                            Choose plan
                        </button> */}
                        <PaymentModal
                        bookingInfo={{
                            packageName: 'Advance plan',
                            uniqueClass:uniqueClassName,
                            slotName: slotName,
                           price: 150,
                           trainerInfo,
                           member: {
                             name: user?.displayName,
                             email: user?.email,
                             image: user?.photoURL,
                           },
                         }}
                        />
                        
                    
                </Card>
                <Card className='max-w-sm'>
                    <h5 className=" text-xl font-bold text-white dark:text-gray-400 p-6 text-center shadow-xl rounded-t-lg mt-0  bg-cyan-600">Standard plan</h5>
                    <div className="flex items-baseline  justify-center text-gray-900 dark:text-white">
                        <span className="text-3xl font-semibold">$</span>
                        <span className="text-5xl font-extrabold tracking-tight">99</span>
                        <span className="ml-1 text-xl font-normal text-gray-500 dark:text-gray-400">/month</span>
                    </div>
                    <ul className="my-7 space-y-5">
                        <li className="flex space-x-3">
                            <svg
                                className="h-5 w-5 shrink-0 text-cyan-600 dark:text-cyan-500"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
                                All benefits of standard membership
                            </span>
                        </li>
                        <li className="flex space-x-3">
                            <svg
                                className="h-5 w-5 shrink-0 text-cyan-600 dark:text-cyan-500"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
                                2 special session per week.
                            </span>
                        </li>
                        <li className="flex space-x-3">
                            <svg
                                className="h-5 w-5 shrink-0 text-cyan-600 dark:text-cyan-500"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
                                Use of five training equipments.
                            </span>
                        </li>
                        <li className="flex space-x-3">
                            <svg
                                className="h-5 w-5 shrink-0 text-cyan-600 dark:text-cyan-500"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
                                Access to locker rooms and showers
                            </span>
                        </li>
                        <li className="flex space-x-3 decoration-gray-500">
                            <svg
                                className="h-5 w-5 shrink-0 text-cyan-600 dark:text-cyan-500"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            <span className="text-base font-normal leading-tight text-gray-500">
                                Gym access during operating hours.
                            </span>
                        </li>
                        <li className="flex space-x-3 decoration-gray-500">
                            <svg
                                className="h-5 w-5 shrink-0 text-cyan-600 dark:text-cyan-500"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            <span className="text-base font-normal leading-tight text-gray-500">
                                Access group fitness classes
                            </span>
                        </li>
                        <li className="flex space-x-3 line-through decoration-gray-500">
                            <svg
                                className="h-5 w-5 shrink-0 text-gray-400 dark:text-gray-500"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            <span className="text-base font-normal leading-tight text-gray-500">
                                Access to sauna or steam room
                            </span>
                        </li>
                        <li className="flex space-x-3 line-through decoration-gray-500">
                            <svg
                                className="h-5 w-5 shrink-0 text-gray-400 dark:text-gray-500"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            <span className="text-base font-normal leading-tight text-gray-500">Free nutrition counseling.</span>
                        </li>
                    </ul>
                    
                    <PaymentModal
                        bookingInfo={{
                            packageName: 'Standard plan',
                            uniqueClass:uniqueClassName,
                            slotName: slotName,
                            price: 99,
                            trainerInfo,
                           member: {
                             name: user?.displayName,
                             email: user?.email,
                             image: user?.photoURL,
                           },
                         }}
                        />
                </Card>
                <Card className='max-w-sm'>
                    <h5 className=" text-xl font-bold text-white dark:text-gray-400 p-6 text-center shadow-xl rounded-t-lg mt-0  bg-cyan-600">Basic plan</h5>
                    <div className="flex items-baseline  justify-center text-gray-900 dark:text-white">
                        <span className="text-3xl font-semibold">$</span>
                        <span className="text-5xl font-extrabold tracking-tight">50</span>
                        <span className="ml-1 text-xl font-normal text-gray-500 dark:text-gray-400">/month</span>
                    </div>
                    <ul className="my-7 space-y-5">
                        <li className="flex space-x-3">
                            <svg
                                className="h-5 w-5 shrink-0 text-cyan-600 dark:text-cyan-500"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
                                Gym access during operating hours.
                            </span>
                        </li>
                        <li className="flex space-x-3">
                            <svg
                                className="h-5 w-5 shrink-0 text-cyan-600 dark:text-cyan-500"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
                                1 special session per week.
                            </span>
                        </li>
                        <li className="flex space-x-3">
                            <svg
                                className="h-5 w-5 shrink-0 text-cyan-600 dark:text-cyan-500"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
                                Use of two training equipments.
                            </span>
                        </li>
                        <li className="flex space-x-3">
                            <svg
                                className="h-5 w-5 shrink-0 text-cyan-600 dark:text-cyan-500"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
                                Access to locker rooms and showers
                            </span>
                        </li>
                        <li className="flex space-x-3 line-through decoration-gray-500">
                            <svg
                                className="h-5 w-5 shrink-0 text-gray-400 dark:text-gray-500"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            <span className="text-base font-normal leading-tight text-gray-500">
                                All benefits of basic membership
                            </span>
                        </li>
                        <li className="flex space-x-3 line-through decoration-gray-500">
                            <svg
                                className="h-5 w-5 shrink-0 text-gray-400 dark:text-gray-500"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            <span className="text-base font-normal leading-tight text-gray-500">
                                Access group fitness classes
                            </span>
                        </li>
                        <li className="flex space-x-3 line-through decoration-gray-500">
                            <svg
                                className="h-5 w-5 shrink-0 text-gray-400 dark:text-gray-500"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            <span className="text-base font-normal leading-tight text-gray-500">
                                Access to sauna or steam room
                            </span>
                        </li>
                        <li className="flex space-x-3 line-through decoration-gray-500">
                            <svg
                                className="h-5 w-5 shrink-0 text-gray-400 dark:text-gray-500"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            <span className="text-base font-normal leading-tight text-gray-500">Free nutrition counseling.</span>
                        </li>
                    </ul>
                    <PaymentModal
                        bookingInfo={{
                            packageName: 'Basic plan',
                            uniqueClass:uniqueClassName,
                            slotName: slotName,
                            price: 50,
                            trainerInfo, 
                           member: {
                             name: user?.displayName,
                             email: user?.email,
                             image: user?.photoURL,
                           },
                         }}
                        />
                </Card>
            </div>
        </div>
    );
};

export default Booking;