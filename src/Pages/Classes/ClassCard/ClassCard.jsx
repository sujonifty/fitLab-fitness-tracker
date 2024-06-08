import { Card } from 'flowbite-react';
import PropTypes from 'prop-types';
// import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
// import { Link } from 'react-router-dom';
import { Avatar } from "flowbite-react";
// import { Button, Modal } from "flowbite-react";
// import { useState } from "react";
// import { HiOutlineExclamationCircle } from "react-icons/hi";
// import { Dropdown } from "flowbite-react";
const ClassCard = ({ item }) => {
    console.log(item)
    // const [openModal, setOpenModal] = useState(true);
    const { className, title, trainers, description, photo, date, tag } = item;


    return (
        // <section className="dark:bg-gray-100 dark:text-gray-800">
        //     <div className="container flex flex-col mx-auto lg:flex-row">
        //         <div className="w-full lg:w-1/3 rounded-xl" style={bgImg}></div>
        //         <div className="flex flex-col w-full p-6 lg:w-2/3 md:p-8 lg:p-12">
        //             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-8 h-8 mb-8 dark:text-violet-600">
        //                 <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
        //             </svg>
        //             <h2 className="text-5xl font-extrabold leading-none">  {title}</h2>
        //             <p className="mt-4 mb-8 text-sm w-8/12">{description}</p>
        //             <div className="mt-4 flex justify-start items-center gap-10 mb-8 text-3xl w-8/12">
        //                 <Link>
        //                     <FaTwitter></FaTwitter>
        //                 </Link>
        //                 <Link>
        //                     <FaFacebook></FaFacebook>
        //                 </Link>
        //                 <Link>
        //                     <FaInstagram></FaInstagram>
        //                 </Link>

        //             </div>

        //             <button className="self-start px-10 py-3 text-lg rounded-xl btn border-lime-600 border-b-4 border-l-0 border-t-0 border-r-4 ">Get started</button>
        //         </div>
        //     </div>
        // </section>
        <Card className="max-w-sm" imgSrc={photo} horizontal>
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {title}
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
                {description}
            </p>
            {/* <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                Trainers
            </h5> */}

            <div className='grid grid-cols-5 text-base'>
                {
                    trainers.map(trainer =><Avatar key={trainer.index} title={`Trainer: ${trainer.name}`}  img={trainer?.photo} rounded bordered color="light" />
                    // <div key={trainer.index}>
                    //     <Button onClick={() => setOpenModal()}>
                    //         <Avatar img={trainer?.photo} rounded bordered color="light" />

                    //     </Button>
                    //     <Modal show={openModal} onClose={() => setOpenModal(false)}>
                    //         <Modal.Header>Terms of Service</Modal.Header>
                    //         <Modal.Body>
                    //             <Card className="max-w-sm">
                    //                 <div className="flex justify-end px-4 pt-4">
                    //                     <Dropdown inline label="">
                    //                         <Dropdown.Item>
                    //                             <a
                    //                                 href="#"
                    //                                 className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                    //                             >
                    //                                 Edit
                    //                             </a>
                    //                         </Dropdown.Item>
                    //                         <Dropdown.Item>
                    //                             <a
                    //                                 href="#"
                    //                                 className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                    //                             >
                    //                                 Export Data
                    //                             </a>
                    //                         </Dropdown.Item>
                    //                         <Dropdown.Item>
                    //                             <a
                    //                                 href="#"
                    //                                 className="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                    //                             >
                    //                                 Delete
                    //                             </a>
                    //                         </Dropdown.Item>
                    //                     </Dropdown>
                    //                 </div>
                    //                 <div className="flex flex-col items-center pb-10">
                    //                     <img
                    //                         alt="Bonnie image"
                    //                         height="96"
                    //                         src={trainer?.photo}
                    //                         width="96"
                    //                         className="mb-3 rounded-full shadow-lg"
                    //                     />
                    //                     <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{trainer?.name}</h5>
                    //                     <span className="text-sm text-gray-500 dark:text-gray-400">{trainer?.email}</span>
                    //                     <div className="mt-4 flex space-x-3 lg:mt-6">
                    //                         <Link className="inline-flex items-center rounded-lg bg-cyan-700 px-4 py-2 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800">
                    //                             Know more..
                    //                         </Link>
                    //                     </div>
                    //                 </div>
                    //             </Card>
                    //         </Modal.Body>
                    //     </Modal>

                    // </div>
                    )
                }
            </div>

        </Card>
    );
};
ClassCard.propTypes = {
    item: PropTypes.obj,
}
export default ClassCard;