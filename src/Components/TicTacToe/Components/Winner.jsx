const Winner = ({ handleNewGame, winningPlayer }) => {
  return (
    <div className="top-60 absolute flex justify-center items-center bg-[#457B9D] backdrop-blur-0 p-3 rounded-2xl text-[#F1FAEE] text-center">
      <div className="min-w-72">
        <p className="p-10 text-5xl">
          Congratulations {winningPlayer}!! You won...
        </p>
        <div>
          <button
            className="bg-[#1D3557] m-1 p-3 rounded-2xl w-40 font-bold text-[#F1FAEE] text-lg"
            onClick={handleNewGame}
          >
            New Game
          </button>
        </div>
      </div>
    </div>
  );
};

export default Winner;
