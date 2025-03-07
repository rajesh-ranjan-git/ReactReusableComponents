import { createBrowserRouter } from "react-router-dom";
import App from "../App.jsx";
import Home from "../Components/Home.jsx";
import Debouncing from "../Components/Debouncing/Debouncing.jsx";
import Throttling from "../Components/Throttling/Throttling.jsx";
import CountdownTimer from "../Components/CountdownTimer/CountdownTimer.jsx";
import Modal from "../Components/Modal/Modal.jsx";
import Carousel from "../Components/Carousel/Carousel.jsx";
import Dropdown from "../Components/Dropdown/Dropdown.jsx";
import Accordion from "../Components/Accordion/Accordion.jsx";
import DisplayTime from "../Components/DisplayTime/DisplayTime.jsx";
import RandomColorGenerator from "../Components/RandomColorGenerator/RandomColorGenerator.jsx";
import Error from "../Components/Utility/Error.jsx";
import StarRating from "../Components/StarRating/StarRating.jsx";
import InfiniteScrolling from "../Components/InfiniteScrolling/InfiniteScrolling.jsx";
import NavigationMenu from "../Components/NavigationMenu/NavigationMenu.jsx";
import QRCodeGenerator from "../Components/QRCodeGenerator/QRCodeGenerator.jsx";
import Todo from "../components/Todo/Todo.jsx";
import ThemeChanger from "../components/ThemeChanger/ThemeChanger.jsx";
import ScrollIndicator from "../Components/ScrollIndicator/ScrollIndicator.jsx";
import DynamicTabs from "../Components/DynamicTabs/DynamicTabs.jsx";
import GitHubProfileFinder from "../Components/GitHubProfileFinder/GitHubProfileFinder.jsx";
import AutoComplete from "../Components/AutoComplete/AutoComplete.jsx";
import TicTacToe from "../Components/TicTacToe/TicTacToe.jsx";
import Players from "../Components/TicTacToe/Components/Players.jsx";
import Game from "../Components/TicTacToe/Components/Game.jsx";
import GameHome from "../Components/TicTacToe/Components/GameHome.jsx";
import CSSGrid from "../Components/CSSGrid/CSSGrid.jsx";

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
        path: "/cssGrid",
        element: <CSSGrid />,
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
      {
        path: "/starRating",
        element: <StarRating />,
      },
      {
        path: "/infiniteScrolling",
        element: <InfiniteScrolling />,
      },
      {
        path: "/navigationMenu",
        element: <NavigationMenu />,
      },
      {
        path: "/qrCodeGenerator",
        element: <QRCodeGenerator />,
      },
      {
        path: "/todo",
        element: <Todo />,
      },
      {
        path: "/themeChanger",
        element: <ThemeChanger />,
      },
      {
        path: "/scrollIndicator",
        element: <ScrollIndicator />,
      },
      {
        path: "/dynamicTabs",
        element: <DynamicTabs />,
      },
      {
        path: "/gitHubProfileFinder",
        element: <GitHubProfileFinder />,
      },
      {
        path: "/autoComplete",
        element: <AutoComplete />,
      },
      {
        path: "/ticTacToe",
        element: <TicTacToe />,
        children: [
          {
            path: "",
            element: <GameHome />,
          },
          {
            path: "players",
            element: <Players />,
          },
          {
            path: "game",
            element: <Game />,
          },
        ],
      },
    ],
    errorElement: <Error />,
  },
]);

export default appRouter;
