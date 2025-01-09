import React, { useEffect, useState } from "react";
import GoHome from "./GoHome";
import Loader from "./Loader";

const InfiniteScrolling = () => {
  const url = "https://dummyjson.com/products";

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const getProducts = async (url, limit, skip) => {
    try {
      const response = await fetch(
        `${url}?limit=${limit}&skip=${skip}&select=title,thumbnail`
      );
      const data = await response.json();

      if (data) {
        setProducts(data.products);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (url !== "") getProducts(url, 20, 0);
  }, [url]);

  return (
    <>
      <div className="flex flex-col items-center pb-40 h-screen">
        <h1 className="p-5 text-5xl">Infinite Scrolling</h1>
        <div className="flex flex-wrap justify-around items-center gap-3 w-[90vw]">
          {products && products.length
            ? products.map((item) => (
                <div
                  className="shadow-lg rounded w-sm overflow-hidden"
                  key={item.title}
                >
                  <img
                    className="w-640"
                    src={item.thumbnail}
                    alt={item.title}
                  />
                  <div className="flex justify-center p-4">
                    <div className="font-bold text-xl">{item.title}</div>
                  </div>
                </div>
              ))
            : null}
        </div>

        <button className="bg-lime-600 shadow-slate-950 shadow-xl p-4 rounded-full w-96 font-semibold text-2xl text-white">
          Load More ...
        </button>

        {loading && <Loader />}
      </div>
      <GoHome />
    </>
  );
};

export default InfiniteScrolling;
