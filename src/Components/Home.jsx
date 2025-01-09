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

  const handleColorGenerator = () => {
    navigate("/randomColorGenerator");
  };

  const handleStarRating = () => {
    navigate("/starRating");
  };

  return (
    <div className="flex flex-wrap justify-center items-center gap-10 p-10 min-h-screen">
      <button
        className="bg-lime-600 shadow-slate-950 shadow-xl p-4 rounded-full w-96 font-semibold text-2xl text-white"
        onClick={handleDebouncing}
      >
        Debouncing
      </button>
      <button
        className="bg-lime-600 shadow-slate-950 shadow-xl p-4 rounded-full w-96 font-semibold text-2xl text-white"
        onClick={handleThrottling}
      >
        Throttling
      </button>
      <button
        className="bg-lime-600 shadow-slate-950 shadow-xl p-4 rounded-full w-96 font-semibold text-2xl text-white"
        onClick={handleCountdownTimer}
      >
        CountdownTimer
      </button>
      <button
        className="bg-lime-600 shadow-slate-950 shadow-xl p-4 rounded-full w-96 font-semibold text-2xl text-white"
        onClick={handleModal}
      >
        Modal
      </button>
      <button
        className="bg-lime-600 shadow-slate-950 shadow-xl p-4 rounded-full w-96 font-semibold text-2xl text-white"
        onClick={handleCarousel}
      >
        Carousel
      </button>
      <button
        className="bg-lime-600 shadow-slate-950 shadow-xl p-4 rounded-full w-96 font-semibold text-2xl text-white"
        onClick={handleDropdown}
      >
        Dropdown
      </button>
      <button
        className="bg-lime-600 shadow-slate-950 shadow-xl p-4 rounded-full w-96 font-semibold text-2xl text-white"
        onClick={handleAccordion}
      >
        Accordion
      </button>
      <button
        className="bg-lime-600 shadow-slate-950 shadow-xl p-4 rounded-full w-96 font-semibold text-2xl text-white"
        onClick={handleDisplayTime}
      >
        DisplayTime
      </button>
      <button
        className="bg-lime-600 shadow-slate-950 shadow-xl p-4 rounded-full w-96 font-semibold text-2xl text-white"
        onClick={handleColorGenerator}
      >
        Random Color Generator
      </button>
      <button
        className="bg-lime-600 shadow-slate-950 shadow-xl p-4 rounded-full w-96 font-semibold text-2xl text-white"
        onClick={handleStarRating}
      >
        Star Rating
      </button>
    </div>
  );
};

export default Home;
