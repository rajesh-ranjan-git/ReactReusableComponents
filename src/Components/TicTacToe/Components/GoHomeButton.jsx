import { useNavigate } from "react-router-dom";

const GoHomeButton = () => {
  const navigate = useNavigate();

  const handleGoToHome = () => {
    navigate("/");
  };
  return (
    <button
      className="bottom-10 fixed bg-[#1D3557] hover:bg-white shadow-slate-950 shadow-xl backdrop-blur-2xl p-4 hover:border border-[#1D3557] border-opacity-50 rounded-full w-96 font-semibold text-white hover:text-[#1D3557] text-2xl"
      onClick={handleGoToHome}
    >
      Go Home
    </button>
  );
};

export default GoHomeButton;
