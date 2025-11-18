import startGame from "../assets/startGame.jpg";
import { Link } from "react-router-dom";
import GoHomeButton from "./GoHomeButton";

const GameHome = () => {
  return (
    <div className="flex justify-center items-center h-4/6">
      <div className="relative">
        <img
          src={startGame}
          alt="startGame"
          className="rounded-2xl h-96 object-cover"
        />
        <div className="top-16 left-16 absolute">
          <Link to="players">
            <button className="bg-[#F1FAEE] hover:bg-transparent p-5 hover:border-2 rounded-2xl w-52 hover:text-[#F1FAEE] text-3xl">
              Start
            </button>
          </Link>
        </div>
      </div>
      <GoHomeButton />
    </div>
  );
};

export default GameHome;
