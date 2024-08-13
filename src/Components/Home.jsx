import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleDebouncing = () => {
    navigate("/debounce");
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <button
        className="p-4 text-white text-2xl bg-lime-600 font-semibold rounded-full shadow-xl shadow-slate-950"
        onClick={handleDebouncing}
      >
        Debouncing Test
      </button>
    </div>
  );
};

export default Home;
