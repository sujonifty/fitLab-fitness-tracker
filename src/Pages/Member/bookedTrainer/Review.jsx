// import { useState } from 'react';
// import { FaStar } from 'react-icons/fa';

// const Review = ({ totalStars = 5 }) => {
//     const [rating, setRating] = useState(0);
//     const [hover, setHover] = useState(null);
//     return (
//         <div className="flex space-x-1">
//             {Array.from({ length: totalStars }, (_, index) => {
//                 const ratingValue = index + 1;
//                 return (
//                     <label key={index}>
//                         <input
//                             type="radio"
//                             name="rating"
//                             value={ratingValue}
//                             onClick={() => setRating(ratingValue)}
//                             className="hidden"
//                         />
//                         <FaStar
//                             size={30}
//                             className={`cursor-pointer ${ratingValue <= (hover || rating) ? 'text-yellow-500' : 'text-gray-300'
//                                 }`}
//                             onMouseEnter={() => setHover(ratingValue)}
//                             onMouseLeave={() => setHover(null)}
//                         />
//                     </label>
//                 );
//             })}
//         </div>
//     );
// };

// export default Review;