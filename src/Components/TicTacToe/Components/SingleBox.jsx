import { useRef } from "react";
import clickSound from "../assets/sounds/click.mp3";

const SingleBox = ({ id, handleTurns, boxValue, winner, draw, counter }) => {
  const boxValueRef = useRef();

  const boxClicked = () => {
    // console.log("clicked");
    if (counter < 8 && winner === false) {
      // console.log(counter);
      // console.log(winner);
      new Audio(clickSound).play();
    }
  };

  const handleBoxValue = () => {
    boxClicked();
    const valueRef = boxValueRef.current.innerText;
    handleTurns(id, valueRef);
  };

  return (
    <div
      className="flex justify-center items-center bg-[#1D3557] drop-shadow-box m-2 rounded-2xl w-[7rem] h-[7rem] font-semibold text-[#F1FAEE] text-6xl cursor-pointer"
      onClick={!winner && !draw ? handleBoxValue : null}
      ref={boxValueRef}
    >
      {boxValue[id]}
    </div>
  );
};

export default SingleBox;
