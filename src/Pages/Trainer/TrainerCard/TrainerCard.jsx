import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const TrainerCard = ({ trainer }) => {
    const { name, photo, experience, socialId, availableSlots, background, qualifications } = trainer;
    const bgImg = {
        backgroundImage: `url(${photo})`,
        height: '100vh',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    };
    return (
        <section className="dark:bg-gray-100 dark:text-gray-800">
            <div className="container flex flex-col mx-auto lg:flex-row">
                <div className="w-full lg:w-1/3" style={bgImg}></div>
                <div className="flex flex-col w-full p-6 lg:w-2/3 md:p-8 lg:p-12">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-8 h-8 mb-8 dark:text-violet-600">
                        <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    <h2 className="text-5xl font-extrabold leading-none"> Hello I'm <br /> {name}</h2>
                    <p className="mt-4 mb-8 text-sm w-8/12">{background}</p>
                    {/* {
                socialId.map(id=><div key={id.index} className="mt-4 flex justify-start items-center gap-10 mb-8 text-3xl w-8/12">
                <Link to={id.twitter}>
                <FaTwitter></FaTwitter>
                </Link>
                <Link to={id.facebook}>
                <FaFacebook></FaFacebook>
                </Link>
                <Link to={id.instagram}>
                <FaInstagram></FaInstagram>
                </Link>
                
                </div>)
            } */}
                    <button className="self-start px-10 py-3 text-lg font-medium rounded-3xl dark:bg-violet-600 dark:text-gray-50">Get started</button>
                </div>
            </div>
        </section>
    );
};
TrainerCard.propTypes = {
    trainer: PropTypes.obj,
}
export default TrainerCard;