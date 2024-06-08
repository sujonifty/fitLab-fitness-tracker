import { Button } from 'flowbite-react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const Slot = ({slot}) => {
    
    return <NavLink to={`/booking/${slot?._id}`}><Button gradientMonochrome="success">{slot?.slotName}</Button></NavLink>;
};
Slot.propTypes = {
    slot: PropTypes.obj,
}
export default Slot;