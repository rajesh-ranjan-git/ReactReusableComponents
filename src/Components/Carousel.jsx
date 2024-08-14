import React, { useRef, useState } from "react";
import GoHome from "./GoHome";

const Carousel = () => {
  const [hide, setHide] = useState(false);
  const [imgClass, setImgClass] = useState("");

  const imgRef1 = useRef();
  const imgRef2 = useRef();
  const imgRef3 = useRef();
  const imgRef4 = useRef();
  const imgRef5 = useRef();
  const imgRef6 = useRef();
  const imgRef7 = useRef();
  const imgRef8 = useRef();

  const imgArray = [
    {
      id: 1,
      element: (
        <img
          className="absolute object-cover w-[100%] h-[100%]"
          src="src\assets\carousel_image1.jpg"
          ref={imgRef1}
          key={1}
        />
      ),
    },
    {
      id: 2,
      element: (
        <img
          className="absolute object-cover w-[100%] h-[100%]"
          src="src\assets\carousel_image2.jpg"
          ref={imgRef2}
          key={2}
        />
      ),
    },
    {
      id: 3,
      element: (
        <img
          className="absolute object-cover w-[100%] h-[100%]"
          src="src\assets\carousel_image3.jpg"
          ref={imgRef3}
          key={3}
        />
      ),
    },
    {
      id: 4,
      element: (
        <img
          className="absolute object-cover w-[100%] h-[100%]"
          src="src\assets\carousel_image4.jpg"
          ref={imgRef4}
          key={4}
        />
      ),
    },
    {
      id: 5,
      element: (
        <img
          className="absolute object-cover w-[100%] h-[100%]"
          src="src\assets\carousel_image5.jpg"
          ref={imgRef5}
          key={5}
        />
      ),
    },
    {
      id: 6,
      element: (
        <img
          className="absolute object-cover w-[100%] h-[100%]"
          src="src\assets\carousel_image6.jpg"
          ref={imgRef6}
          key={6}
        />
      ),
    },
    {
      id: 7,
      element: (
        <img
          className="absolute object-cover w-[100%] h-[100%]"
          src="src\assets\carousel_image7.jpg"
          ref={imgRef7}
          key={7}
        />
      ),
    },
    {
      id: 8,
      element: (
        <img
          className="absolute object-cover w-[100%] h-[100%]"
          src="src\assets\carousel_image8.jpg"
          ref={imgRef8}
          key={8}
        />
      ),
    },
  ];

  imgArray.forEach((img, idx) => (img.key = idx + 1));

  const handleLeft = () => {};

  const handleRight = () => {};

  return (
    <>
      <div className="flex flex-col items-center h-screen">
        <h1 className="text-5xl p-5">Carousel</h1>
        <div className="relative w-[80%] h-[60%] bg-slate-900">
          {imgArray.map((img) => img.element)}
          <button
            className="absolute z-10 top-[45%] left-10 p-5 rounded-full bg-red-800 text-white"
            onClick={handleLeft}
          >
            Left
          </button>
          <button
            className="absolute z-10 top-[45%] right-10 p-5 rounded-full bg-red-800 text-white"
            onClick={handleRight}
          >
            Right
          </button>
        </div>
      </div>
      <GoHome />
    </>
  );
};

export default Carousel;
