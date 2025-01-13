import React, { useEffect, useState } from "react";
import GoHome from "../GoHome";
import Loader from "../Loader";

const GitHubProfileFinder = () => {
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(null);

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const handleEnterPress = (e) => {
    if (e.key === "Enter") getGitProfile(input);
  };

  const getGitProfile = async (userName) => {
    try {
      setLoading(true);
      const response = await fetch(`https://api.github.com/users/${userName}`);
      const data = await response.json();
      if (data) {
        setUser({
          name: data.name,
          userName: data.login,
          profilePhoto: data.avatar_url,
          created: data.created_at,
          followers: data.followers,
          following: data.following,
          url: data.html_url,
          location: data.location,
          publicRepos: data.public_repos,
        });
      }
      setLoading(false);
    } catch (error) {
      console.log("An error occurred while fetching GitHub Profile : ", error);
      setLoading(false);
    }
  };

  return (
    <>
      <div>
        <div className="flex flex-col justify-center items-center gap-10">
          <h1 className="p-5 text-5xl">GitHub Profile Finder</h1>
          <input
            className="border-4 bg-white p-3 border-lime-600 rounded-full w-96 text-2xl text-center outline-none"
            name="qrCode"
            placeholder="Enter name to search here..."
            value={input}
            onChange={(e) => handleInput(e)}
            onKeyUp={handleEnterPress}
          />
          <button
            className="bg-lime-600 shadow-slate-950 shadow-xl p-4 rounded-full w-96 font-semibold text-2xl text-white"
            onClick={() => getGitProfile(input)}
          >
            Get GitHub Profile
          </button>
          {user && (
            <div className="flex justify-around items-center border-2 border-lime-600 rounded-xl w-[70vw] h-[45vh] text-xl">
              <div>
                {user.profilePhoto ? (
                  <img
                    src={user.profilePhoto}
                    alt="profile_photo"
                    className="rounded-full"
                    width={"70%"}
                    height={"auto"}
                  />
                ) : null}
              </div>
              <div className="flex flex-col gap-3">
                {user.name ? (
                  <p>
                    <span className="font-semibold">Name : </span>
                    {user.name}
                  </p>
                ) : null}
                {user.userName ? (
                  <p>
                    <span className="font-semibold">UserName : </span>
                    {user.userName}
                  </p>
                ) : null}
                {user.created ? (
                  <p>
                    <span className="font-semibold">Created : </span>
                    {user.created}
                  </p>
                ) : null}
                {user.publicRepos ? (
                  <p>
                    <span className="font-semibold">Public Repositories :</span>
                    {user.publicRepos}
                  </p>
                ) : null}
                {user.followers ? (
                  <p>
                    <span className="font-semibold">Followers : </span>
                    {user.followers}
                  </p>
                ) : null}
                {user.following ? (
                  <p>
                    <span className="font-semibold">Following : </span>
                    {user.following}
                  </p>
                ) : null}
                {user.location ? (
                  <p>
                    <span className="font-semibold">Location : </span>
                    {user.location}
                  </p>
                ) : null}
                {user.url ? (
                  <p>
                    <span className="font-semibold">URL : </span>
                    <a
                      href={user.url}
                      className="text-blue-600 visited:text-purple-600 underline"
                    >
                      {user.url}
                    </a>
                  </p>
                ) : null}
              </div>
            </div>
          )}
        </div>
      </div>
      {loading && <Loader />}
      <GoHome />
    </>
  );
};

export default GitHubProfileFinder;
