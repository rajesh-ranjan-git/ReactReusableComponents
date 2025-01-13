import { Outlet } from "react-router-dom";
import Title from "./Components/Title";
import { PlayerController } from "./utils/Store/PlayerController";

function TicTacToe() {
  return (
    <div className="h-screen">
      <Title />
      <PlayerController>
        <Outlet />
      </PlayerController>
    </div>
  );
}

export default TicTacToe;
