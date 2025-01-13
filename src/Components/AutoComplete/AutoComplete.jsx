import React, { useEffect, useState } from "react";
import GoHome from "../GoHome";

const AutoComplete = () => {
  const [input, setInput] = useState("");
  const [users, setUsers] = useState(null);
  const [userData, setUserData] = useState(null);

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const getUsers = async (input) => {
    try {
      const response = await fetch(
        `https://dummyjson.com/users/search?q=${input}`
      );
      const data = await response.json();

      if (data) {
        setUsers(data.users);
      }
    } catch (error) {
      console.log("An error occurred while getting users : ", error);
    }
  };

  const handleUserData = (id) => {
    setUserData(
      users.reduce((acc, curr) => {
        if (curr.id === id) {
          acc = curr;
        }
        return acc;
      }, null)
    );
    setUsers(null);
    setInput("");
  };

  useEffect(() => {
    if (input !== "") getUsers(input);
  }, [input]);

  return (
    <>
      <div>
        <div className="flex flex-col justify-center items-center gap-10">
          <h1 className="p-5 text-5xl">Auto Complete</h1>
          <div>
            <input
              className="border-4 bg-white p-3 border-lime-600 rounded-full w-96 text-2xl text-center outline-none"
              name="qrCode"
              placeholder="Search here..."
              autoComplete="off"
              value={input}
              onChange={(e) => handleInput(e)}
            />
            {users && users.length ? (
              <div className="flex flex-col justify-center items-center border-2 mt-1 border-lime-600 rounded-xl w-96 text-center cursor-pointer overflow-hidden">
                {users.map((user) => (
                  <p
                    className="hover:bg-slate-200 p-1 w-full"
                    key={user.id}
                    onClick={() => handleUserData(user.id)}
                  >
                    {user.firstName}&nbsp;
                    {user.lastName}
                  </p>
                ))}
              </div>
            ) : null}
          </div>
          {userData ? (
            <div className="flex justify-around items-center border-2 border-lime-600 rounded-xl w-[70vw] h-[45vh] text-xl">
              <div>
                {userData.image ? (
                  <img
                    src={userData.image}
                    alt="profile_photo"
                    className="rounded-full"
                    width={"70%"}
                    height={"auto"}
                  />
                ) : null}
              </div>
              <div className="flex flex-col gap-3">
                {userData.firstName && userData.lastName ? (
                  <p>
                    <span className="font-semibold">Name : </span>
                    {userData.firstName}&nbsp;{userData.firstName}
                  </p>
                ) : null}
                {userData.username ? (
                  <p>
                    <span className="font-semibold">UserName : </span>
                    {userData.username}
                  </p>
                ) : null}
                {userData.email ? (
                  <p>
                    <span className="font-semibold">Email : </span>
                    {userData.email}
                  </p>
                ) : null}
                {userData.phone ? (
                  <p>
                    <span className="font-semibold">Phone : </span>
                    {userData.phone}
                  </p>
                ) : null}
                {userData.age ? (
                  <p>
                    <span className="font-semibold">Age : </span>
                    {userData.age}
                  </p>
                ) : null}
                {userData.gender ? (
                  <p>
                    <span className="font-semibold">Gender : </span>
                    {userData.gender}
                  </p>
                ) : null}
                {userData.birthDate ? (
                  <p>
                    <span className="font-semibold">Birth Date : </span>
                    {userData.birthDate}
                  </p>
                ) : null}
                {userData.bloodGroup ? (
                  <p>
                    <span className="font-semibold">Blood Group : </span>
                    {userData.bloodGroup}
                  </p>
                ) : null}
                {userData.height ? (
                  <p>
                    <span className="font-semibold">Height : </span>
                    {userData.height}
                  </p>
                ) : null}
                {userData.weight ? (
                  <p>
                    <span className="font-semibold">Weight : </span>
                    {userData.weight}
                  </p>
                ) : null}
              </div>
            </div>
          ) : null}
        </div>
      </div>
      <GoHome />
    </>
  );
};

export default AutoComplete;
