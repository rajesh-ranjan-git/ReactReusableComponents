import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Components/Home.jsx";
import Debouncing from "./Components/Debouncing.jsx";
import Throttling from "./Components/Throttling.jsx";
import CountdownTimer from "./Components/CountdownTimer.jsx";
import Modal from "./Components/Modal.jsx";
import Carousel from "./Components/Carousel.jsx";
import Dropdown from "./Components/Dropdown.jsx";
import Accordion from "./Components/Accordion.jsx";
import DisplayTime from "./Components/DisplayTime.jsx";
import RandomColorGenerator from "./Components/RandomColorGenerator.jsx";
import Error from "./Components/Error.jsx";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/debouncing",
        element: <Debouncing />,
      },
      {
        path: "/throttling",
        element: <Throttling />,
      },
      {
        path: "/countDownTimer",
        element: <CountdownTimer />,
      },
      {
        path: "/modal",
        element: <Modal />,
      },
      {
        path: "/carousel",
        element: <Carousel />,
      },
      {
        path: "/dropdown",
        element: <Dropdown />,
      },
      {
        path: "/accordion",
        element: <Accordion />,
      },
      {
        path: "/displayTime",
        element: <DisplayTime />,
      },
      {
        path: "/randomColorGenerator",
        element: <RandomColorGenerator />,
      },
    ],
    errorElement: <Error />,
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={appRouter}>
    <App />
  </RouterProvider>
);
