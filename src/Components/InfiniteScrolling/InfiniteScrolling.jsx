import React, { useEffect, useState } from "react";
import Loader from "../Loader";
import { useNavigate } from "react-router-dom";

const InfiniteScrolling = () => {
  const url = "https://dummyjson.com/products";

  const [products, setProducts] = useState([]);
  const [skip, setSkip] = useState(0);
  const [total, setTotal] = useState(null);
  const [limitReached, setLimitReached] = useState(false);
  const [loading, setLoading] = useState(true);

  const handleLoadMore = () => {
    setSkip((prev) => prev + 1);
  };

  const getProducts = async (url, limit, skip) => {
    try {
      const response = await fetch(
        `${url}?limit=${limit}&skip=${skip === 0 ? 0 : skip * 20}`
      );
      const data = await response.json();

      if (data && data.products && data.products.length) {
        setProducts((prev) => [...prev, ...data.products]);
        if (total === null) setTotal(data.total);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const navigate = useNavigate();

  const handleGoToHome = () => {
    navigate("/");
  };

  useEffect(() => {
    if (url !== "") getProducts(url, 20, skip);
  }, [url, skip]);

  useEffect(() => {
    if (products.length === total) setLimitReached(true);
  }, [products]);

  return (
    <>
      <div className="flex flex-col items-center pb-40 h-screen">
        <h1 className="p-5 text-5xl">Infinite Scrolling</h1>
        <div className="flex flex-wrap justify-around items-center gap-3 w-[90vw]">
          {products && products.length
            ? products.map((item) => (
                <div
                  className="shadow-lg rounded w-sm overflow-hidden"
                  key={item.id}
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
        <button
          className={
            !limitReached
              ? "bg-lime-600 shadow-slate-950 shadow-xl my-5 py-5 p-4 rounded-full w-96 font-semibold text-2xl text-white"
              : "bg-lime-300 shadow-slate-950 shadow-xl my-5 py-5 p-4 rounded-full w-96 font-semibold text-2xl text-white disabled"
          }
          onClick={!limitReached ? handleLoadMore : null}
        >
          {!limitReached ? "Load More ..." : "Products Limit Reached"}
        </button>

        {/* {!limitReached ? null : <div>Products Limit Reached</div>} */}

        <div className="flex justify-center items-center py-5">
          <button
            className="bg-lime-600 shadow-slate-950 shadow-xl p-4 rounded-full w-96 font-semibold text-2xl text-white"
            onClick={handleGoToHome}
          >
            Go Home
          </button>
        </div>

        {loading && <Loader />}
      </div>
    </>
  );
};

export default InfiniteScrolling;
