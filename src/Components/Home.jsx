import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleDebouncing = () => {
    navigate("/debouncing");
  };

  const handleThrottling = () => {
    navigate("/throttling");
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen gap-10">
      <button
        className="p-4 w-96 text-white text-2xl bg-lime-600 font-semibold rounded-full shadow-xl shadow-slate-950"
        onClick={handleDebouncing}
      >
        Debouncing
      </button>
      <button
        className="p-4 w-96 text-white text-2xl bg-lime-600 font-semibold rounded-full shadow-xl shadow-slate-950"
        onClick={handleThrottling}
      >
        Throttling
      </button>
    </div>
  );
};

export default Home;
