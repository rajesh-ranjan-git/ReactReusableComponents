import { createBrowserRouter } from "react-router-dom";
import App from "../App.jsx";
import Home from "../Components/Home.jsx";
import Error from "../Components/Utility/Error.jsx";
import Accordion from "../Components/Accordion/Accordion.jsx";
import AutoComplete from "../Components/AutoComplete/AutoComplete.jsx";
import Carousel from "../Components/Carousel/Carousel.jsx";
import CountdownTimer from "../Components/CountdownTimer/CountdownTimer.jsx";
import CSSGrid from "../Components/CSSGrid/CSSGrid.jsx";
import Debouncing from "../Components/Debouncing/Debouncing.jsx";
import DisplayTime from "../Components/DisplayTime/DisplayTime.jsx";
import Dropdown from "../Components/Dropdown/Dropdown.jsx";
import Dropdown2 from "../Components/Dropdown2/Dropdown2.jsx";
import DynamicTabs from "../Components/DynamicTabs/DynamicTabs.jsx";
import GitHubProfileFinder from "../Components/GitHubProfileFinder/GitHubProfileFinder.jsx";
import InfiniteScrolling from "../Components/InfiniteScrolling/InfiniteScrolling.jsx";
import Modal from "../Components/Modal/Modal.jsx";
import NavigationMenu from "../Components/NavigationMenu/NavigationMenu.jsx";
import QRCodeGenerator from "../Components/QRCodeGenerator/QRCodeGenerator.jsx";
import RandomColorGenerator from "../Components/RandomColorGenerator/RandomColorGenerator.jsx";
import ScrollIndicator from "../Components/ScrollIndicator/ScrollIndicator.jsx";
import StackedCards from "../Components/StackedCards/StackedCards.jsx";
import StarRating from "../Components/StarRating/StarRating.jsx";
import ThemeChanger from "../components/ThemeChanger/ThemeChanger.jsx";
import Throttling from "../Components/Throttling/Throttling.jsx";
import TicTacToe from "../Components/TicTacToe/TicTacToe.jsx";
import Players from "../Components/TicTacToe/Components/Players.jsx";
import Game from "../Components/TicTacToe/Components/Game.jsx";
import GameHome from "../Components/TicTacToe/Components/GameHome.jsx";
import Todo from "../components/Todo/Todo.jsx";

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
        path: "/accordion",
        element: <Accordion />,
      },
      {
        path: "/autoComplete",
        element: <AutoComplete />,
      },
      {
        path: "/carousel",
        element: <Carousel />,
      },
      {
        path: "/countDownTimer",
        element: <CountdownTimer />,
      },
      {
        path: "/cssGrid",
        element: <CSSGrid />,
      },
      {
        path: "/debouncing",
        element: <Debouncing />,
      },
      {
        path: "/displayTime",
        element: <DisplayTime />,
      },
      {
        path: "/dropdown",
        element: <Dropdown />,
      },
      {
        path: "/dropdown2",
        element: <Dropdown2 />,
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
        path: "/infiniteScrolling",
        element: <InfiniteScrolling />,
      },
      {
        path: "/modal",
        element: <Modal />,
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
        path: "/randomColorGenerator",
        element: <RandomColorGenerator />,
      },
      {
        path: "/scrollIndicator",
        element: <ScrollIndicator />,
      },
      {
        path: "/stackedCards",
        element: <StackedCards />,
      },
      {
        path: "/starRating",
        element: <StarRating />,
      },
      {
        path: "/themeChanger",
        element: <ThemeChanger />,
      },
      {
        path: "/throttling",
        element: <Throttling />,
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
      {
        path: "/todo",
        element: <Todo />,
      },
    ],
    errorElement: <Error />,
  },
]);

export default appRouter;
