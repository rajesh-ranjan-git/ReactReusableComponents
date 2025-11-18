import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import GoHome from "../Utility/GoHome";

const StarRating = () => {
  const [hoveredStar, setHoveredStar] = useState(null);
  const [rating, setRating] = useState(null);

  const handleRating = (index) => {
    setRating(index);
  };

  const handleMouseEnter = (index) => {
    setHoveredStar(index);
  };

  const handleMouseLeave = (index) => {
    setHoveredStar(rating);
  };

  return (
    <>
      <div className="flex flex-col items-center h-screen">
        <h1 className="p-5 text-5xl">Star Rating</h1>
        <div className="flex justify-center items-center my-80 text-3xl">
          {[...Array(5)].map((_, index) => (
            <FaStar
              className={
                index < (hoveredStar || rating)
                  ? "drop-shadow-lg px-2 text-yellow-500 cursor-pointer"
                  : "drop-shadow-lg px-2 text-black cursor-pointer"
              }
              key={index + 1}
              size={50}
              onClick={() => handleRating(index + 1)}
              onMouseEnter={() => handleMouseEnter(index + 1)}
              onMouseLeave={() => handleMouseLeave(index + 1)}
            />
          ))}
        </div>
      </div>
      <GoHome />
    </>
  );
};

export default StarRating;
