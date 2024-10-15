import React, { useEffect, useState } from "react";
import GoHome from "./GoHome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const slides = [
  {
    src: "https://picsum.photos/seed/img1/1000/600",
    alt: "Image 1 for carousel",
  },
  {
    src: "https://picsum.photos/seed/img2/1000/600",
    alt: "Image 2 for carousel",
  },
  {
    src: "https://picsum.photos/seed/img3/1000/600",
    alt: "Image 3 for carousel",
  },
  {
    src: "https://picsum.photos/seed/img4/1000/600",
    alt: "Image 4 for carousel",
  },
  {
    src: "https://picsum.photos/seed/img5/1000/600",
    alt: "Image 5 for carousel",
  },
  {
    src: "https://picsum.photos/seed/img6/1000/600",
    alt: "Image 6 for carousel",
  },
];

const Carousel = () => {
  const [slide, setSlide] = useState(0);

  const handleRight = () => {
    setSlide(slide > slides.length - 2 ? 0 : slide + 1);
  };

  const handleLeft = () => {
    setSlide(slide < 1 ? slides.length - 1 : slide - 1);
  };

  const handleDots = (idx) => {
    setSlide(idx);
  };

  useEffect(() => {
    let timerID = setInterval(() => {
      setSlide(slide > slides.length - 2 ? 0 : slide + 1);
    }, 4000);

    return () => {
      clearInterval(timerID);
    };
  }, [slide]);

  return (
    <>
      <div className="flex flex-col items-center h-screen">
        <h1 className="text-5xl p-5">Carousel</h1>
        <div className="relative flex justify-center items-center">
          {slides.map((img, idx) => {
            return (
              <img
                src={img.src}
                key={idx}
                className={
                  slide === idx
                    ? "rounded-2xl shadow-2xl"
                    : "hidden rounded-2xl shadow-2xl"
                }
              />
            );
          })}
          <div
            className="absolute left-2 z-10 w-10 h-10 bg-white rounded-full flex justify-center items-center text-xl shadow-2xl cursor-pointer hover:bg-black hover:text-white"
            onClick={handleLeft}
          >
            <FontAwesomeIcon icon={faChevronLeft} />
          </div>
          <div
            className="absolute right-2 z-10 w-10 h-10 bg-white rounded-full flex justify-center items-center text-xl shadow-2xl cursor-pointer hover:bg-black hover:text-white"
            onClick={handleRight}
          >
            <FontAwesomeIcon icon={faChevronRight} />
          </div>
          <div className="absolute bottom-2 z-10 flex">
            {slides.map((_, idx) => {
              return (
                <div
                  className={
                    slide === idx
                      ? "m-2 w-4 h-4 bg-white rounded-full flex justify-center items-center text-xl shadow-2xl cursor-pointer"
                      : "m-2 w-4 h-4 bg-slate-400 rounded-full flex justify-center items-center text-xl shadow-2xl cursor-pointer hover:bg-white"
                  }
                  onClick={() => handleDots(idx)}
                  key={idx}
                ></div>
              );
            })}
          </div>
        </div>
      </div>
      <GoHome />
    </>
  );
};

export default Carousel;
