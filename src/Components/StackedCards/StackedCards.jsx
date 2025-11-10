import React, { useState } from "react";
import GoHome from "../Utility/GoHome";
import Card from "./Card";

const StackedCards = () => {
  const images = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1762438473679-0a6a4de908b3?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDR8dG93SlpGc2twR2d8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=60&w=500",
      alt: "img1",
    },
    {
      id: 2,
      src: "https://plus.unsplash.com/premium_photo-1762456150578-ec24b51333a9?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDF8dG93SlpGc2twR2d8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=60&w=500",
      alt: "img2",
    },
    {
      id: 3,
      src: "https://plus.unsplash.com/premium_photo-1762456150986-61cdf6363ca1?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDV8dG93SlpGc2twR2d8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=60&w=500",
      alt: "img3",
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1761979658580-5b275fc3eb95?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEwfHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&q=60&w=500",
      alt: "img4",
    },
    {
      id: 5,
      src: "https://plus.unsplash.com/premium_photo-1762456150958-d0aefc32ce03?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDl8dG93SlpGc2twR2d8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=60&w=500",
      alt: "img5",
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1762148038110-af994aa925f7?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDZ8dG93SlpGc2twR2d8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=60&w=500",
      alt: "img6",
    },
    {
      id: 7,
      src: "https://images.unsplash.com/photo-1762432875816-d9afcc27ec56?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDd8dG93SlpGc2twR2d8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=60&w=500",
      alt: "img7",
    },
    {
      id: 8,
      src: "https://plus.unsplash.com/premium_photo-1761295159559-48ab6287bc79?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEzfHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&q=60&w=500",
      alt: "img8",
    },
    {
      id: 9,
      src: "https://images.unsplash.com/photo-1762174241767-498fbe248a30?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDIwfHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&q=60&w=500",
      alt: "img9",
    },
    {
      id: 10,
      src: "https://images.unsplash.com/photo-1762368229295-81f2742fb8a5?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE2fHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&q=60&w=500",
      alt: "img10",
    },
  ];

  const [cards, setCards] = useState(images);

  return (
    <>
      <div className="flex flex-col items-center h-screen">
        <h1 className="p-5 text-5xl">Stacked Cards</h1>
        <div className="place-items-center grid w-[50rem] h-96 overflow-hidden">
          {cards.map((img) => (
            <Card img={img} key={img.id} cards={cards} setCards={setCards} />
          ))}
        </div>
      </div>
      <GoHome />
    </>
  );
};

export default StackedCards;
