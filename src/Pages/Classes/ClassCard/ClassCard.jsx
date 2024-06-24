import { Card } from 'flowbite-react';
import PropTypes from 'prop-types';
// import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Avatar } from "flowbite-react";
// import { Button, Modal } from "flowbite-react";
// import { useState } from "react";
// import { HiOutlineExclamationCircle } from "react-icons/hi";
// import { Dropdown } from "flowbite-react";
const ClassCard = ({ item }) => {
    console.log('class',item)
    // const [openModal, setOpenModal] = useState(true);
    const { className, title, trainers, description, photo, date, tag } = item;


    return (
        
        <Card className="max-w-sm" imgSrc={photo} horizontal>
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {title}
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
                {description}
            </p>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              <span className='font-medium text-lg'>Booking count:</span> {item.count}
            </p>
            

            <div className='grid grid-cols-5 text-base'>
                {
                    trainers.map(trainer => 
                    <Link to={`/cardDetails/${trainer.email}`} key={trainer.index}>
                        <Avatar title={`Trainer: ${trainer.name}`} img={trainer?.photo} rounded bordered color="light" />

                    </Link>
                        
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