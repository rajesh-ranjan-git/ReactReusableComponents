import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleDebouncing = () => {
    navigate("/debouncing");
  };

  const handleThrottling = () => {
    navigate("/throttling");
  };

  const handleCountdownTimer = () => {
    navigate("/countdownTimer");
  };

  const handleModal = () => {
    navigate("/modal");
  };

  const handleCarousel = () => {
    navigate("/carousel");
  };

  const handleDropdown = () => {
    navigate("/dropdown");
  };

  const handleAccordion = () => {
    navigate("/accordion");
  };

  const handleDisplayTime = () => {
    navigate("/displayTime");
  };

  return (
    <div className="flex flex-col justify-center items-center p-10 min-h-screen gap-10">
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
      <button
        className="p-4 w-96 text-white text-2xl bg-lime-600 font-semibold rounded-full shadow-xl shadow-slate-950"
        onClick={handleCountdownTimer}
      >
        CountdownTimer
      </button>
      <button
        className="p-4 w-96 text-white text-2xl bg-lime-600 font-semibold rounded-full shadow-xl shadow-slate-950"
        onClick={handleModal}
      >
        Modal
      </button>
      <button
        className="p-4 w-96 text-white text-2xl bg-lime-600 font-semibold rounded-full shadow-xl shadow-slate-950"
        onClick={handleCarousel}
      >
        Carousel
      </button>
      <button
        className="p-4 w-96 text-white text-2xl bg-lime-600 font-semibold rounded-full shadow-xl shadow-slate-950"
        onClick={handleDropdown}
      >
        Dropdown
      </button>
      <button
        className="p-4 w-96 text-white text-2xl bg-lime-600 font-semibold rounded-full shadow-xl shadow-slate-950"
        onClick={handleAccordion}
      >
        Accordion
      </button>
      <button
        className="p-4 w-96 text-white text-2xl bg-lime-600 font-semibold rounded-full shadow-xl shadow-slate-950"
        onClick={handleDisplayTime}
      >
        DisplayTime
      </button>
    </div>
  );
};

export default Home;
