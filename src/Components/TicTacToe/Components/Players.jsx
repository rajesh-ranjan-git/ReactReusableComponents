import React from "react";
import { useNavigate } from "react-router-dom";
import { initialValues, usePlayers } from "../utils/Store/PlayerController";
import newGameSound from "../assets/sounds/new-game2.mp3";
import GoHomeButton from "./GoHomeButton";

const Players = () => {
  const navigate = useNavigate();

  const { players, setPlayers } = usePlayers();

  const handlePlayerNames = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    if (name === "player1") {
      players.players[0].name = value;
    } else if (name === "player2") {
      players.players[1].name = value;
    }
  };

  const handlePlayers = () => {
    new Audio(newGameSound).play();
    navigate("/ticTacToe/game");
  };

  return (
    <div className="flex justify-center h-4/6">
      <div className="flex flex-col justify-center items-center bg-[#A8DADC] rounded-2xl w-[28rem] h-[28rem] text-center">
        <label className="m-2 p-2 w-60 font-semibold text-2xl">
          Player 1 Name :
        </label>
        <input
          name="player1"
          placeholder="Player 1"
          className="m-2 p-2 rounded-lg w-60 text-center outline-none"
          onChange={handlePlayerNames}
        />
        <label className="m-2 p-2 w-60 font-semibold text-2xl">
          Player 2 Name :
        </label>
        <input
          name="player2"
          placeholder="Player 2"
          className="m-2 p-2 rounded-lg w-60 text-center outline-none"
          onChange={handlePlayerNames}
        />
        <button
          className="bg-[#1D3557] mt-12 p-4 rounded-2xl w-60 font-semibold text-[#F1FAEE] text-lg"
          onClick={handlePlayers}
        >
          Start
        </button>
      </div>
      <GoHomeButton />
    </div>
  );
};

export default Players;
