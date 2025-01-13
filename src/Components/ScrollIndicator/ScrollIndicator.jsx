import React, { useEffect, useState } from "react";
import GoHome from "../GoHome";
import Loader from "../Loader";

const ScrollIndicator = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [scrolledWidth, setScrolledWidth] = useState(0);

  const getPosts = async () => {
    try {
      const response = await fetch("https://dummyjson.com/posts?limit=100");
      const data = await response.json();

      if (data) {
        setPosts(data.posts);
        setLoading(false);
      }
    } catch (error) {
      console.log("Error occurred while getting posts : ", error);
      setLoading(false);
    }
  };

  const handleScroll = (e) => {
    const height = e.target.scrollHeight - e.target.clientHeight;
    const howMuchScrolled = e.target.scrollTop;
    setScrolledWidth((howMuchScrolled / height) * 100);
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div className="flex flex-col items-center h-screen">
      <h1 className="p-5 text-5xl">Scroll Indicator</h1>
      <div
        className="relative flex flex-col items-center border border-lime-600 rounded-xl w-[90vw] h-[75vh] text-xl overflow-y-scroll"
        onScroll={(e) => handleScroll(e)}
      >
        <div className="fixed bg-lime-600 rounded-xl w-[89vw] h-2">
          <div
            className="bg-red-600 rounded-xl h-2"
            style={{ width: `${scrolledWidth}%` }}
          ></div>
        </div>
        {loading && <Loader />}
        {posts &&
          posts.length &&
          posts.map((post) => (
            <p className="p-2" key={post.id}>
              {post.title}
            </p>
          ))}
      </div>
      <GoHome />
    </div>
  );
};

export default ScrollIndicator;
