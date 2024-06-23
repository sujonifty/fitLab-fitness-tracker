// import { useState } from "react";

import { Button, Modal } from "flowbite-react";

import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
import { useState } from "react";
import PropTypes from 'prop-types'

const stripePromise = loadStripe(import.meta.env.VITE_payment_gateway_pk);

const PaymentModal = ({bookingInfo}) => {
    const [openModal, setOpenModal] = useState(false);
    // console.log('trainer',bookingInfo.trainerInfo)
    const trainerDetails=bookingInfo.trainerInfo;
    return (
        <div>
            <Button onClick={() => setOpenModal(true)}>Booking Now</Button>
            <Modal show={openModal} size="md" onClose={() => setOpenModal(false)} popup>
                <Modal.Header />
                <Modal.Body>
                    <div className="text-center">
                    <div className='mt-2'>
                  <p className='text-sm text-gray-500'>
                    Package: {bookingInfo.packageName}
                  </p>
                </div>
                <div className='mt-2'>
                  <p className='text-sm text-gray-500'>
                    Trainer: {bookingInfo.trainerInfo.name}
                  </p>
                </div>
                <div className='mt-2'>
                  <p className='text-sm text-gray-500'>
                    Slot Name: {bookingInfo.slotName}
                  </p>
                </div>
                
                <div className='mt-2'>
                  <p className='text-sm text-gray-500'>
                    Member: {bookingInfo.member.name}
                  </p>
                </div>
                <div className='mt-2'>
                  <p className='text-sm text-gray-500'>
                    Email: {bookingInfo.member.email}
                  </p>
                </div>
                

                <div className='mt-2'>
                  <p className='text-sm text-gray-500'>
                    Price: $ {bookingInfo.price}
                  </p>
                </div>
                <hr className='mt-8 ' />
                        <div className="my-16">
                            <Elements stripe={stripePromise}>
                                <CheckoutForm classId={bookingInfo.classId} price={bookingInfo.price} trainerDetails={trainerDetails}></CheckoutForm>
                            </Elements>
                        </div>
                        <div className="flex justify-center gap-4">

                            <Button color="gray" onClick={() => setOpenModal(false)}>
                                cancel
                            </Button>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </div>
    );
};
PaymentModal.propTypes = {
    bookingInfo: PropTypes.object,
  }

export default PaymentModal;