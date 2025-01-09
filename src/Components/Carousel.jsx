import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import Loader from "./Loader";
import GoHome from "./GoHome";

const Carousel = () => {
  const url = "https://picsum.photos/v2/list";
  const [images, setImages] = useState([]);
  const [slide, setSlide] = useState(0);
  const [loading, setLoading] = useState(true);

  const handleRight = () => {
    setSlide(slide > images.length - 2 ? 0 : slide + 1);
  };

  const handleLeft = () => {
    setSlide(slide < 1 ? images.length - 1 : slide - 1);
  };

  const handleDots = (idx) => {
    setSlide(idx);
  };

  const getImages = async (url, page, limit) => {
    try {
      const response = await fetch(`${url}?page=${page}&limit=${limit}`);
      const data = await response.json();

      if (data) {
        setImages(data);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (url !== "") getImages(url, 1, 5);
  }, [url]);

  useEffect(() => {
    let timerID = setInterval(() => {
      setSlide(slide > images.length - 2 ? 0 : slide + 1);
    }, 3000);

    return () => {
      clearInterval(timerID);
    };
  }, [slide]);

  return (
    <>
      <div className="flex flex-col items-center h-screen">
        <h1 className="p-5 text-5xl">Carousel</h1>
        <div className="relative flex justify-center items-center">
          {images && images.length
            ? images.map((img, idx) => {
                return (
                  <img
                    src={img.download_url}
                    key={img.id}
                    className={
                      slide === idx
                        ? "rounded-2xl shadow-2xl w-[70vw]"
                        : "hidden rounded-2xl shadow-2xl w-[70vw]"
                    }
                  />
                );
              })
            : null}
          <div
            className="left-2 z-10 absolute flex justify-center items-center bg-white hover:bg-black shadow-2xl rounded-full w-10 h-10 text-xl hover:text-white cursor-pointer"
            onClick={handleLeft}
          >
            <FontAwesomeIcon icon={faChevronLeft} />
          </div>
          <div
            className="right-2 z-10 absolute flex justify-center items-center bg-white hover:bg-black shadow-2xl rounded-full w-10 h-10 text-xl hover:text-white cursor-pointer"
            onClick={handleRight}
          >
            <FontAwesomeIcon icon={faChevronRight} />
          </div>
          <div className="bottom-2 z-10 absolute flex">
            {images.map((_, idx) => {
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

        {loading && <Loader />}
      </div>
      <GoHome />
    </>
  );
};

export default Carousel;
