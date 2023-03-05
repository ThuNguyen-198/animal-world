import React from "react";
import { useState } from "react";
import Card from "./components/card";
import elephant from "./assets/animals/elephant.webp";
import lion from "./assets/animals/lion.webp";
import elephantShrew from "./assets/animals/elephant-shrew.webp";
import hippo from "./assets/animals/hippo.webp";
import pangolin from "./assets/animals/pangolin.webp";
import rondo from "./assets/animals/rondo.webp";
import goldFinch from "./assets/animals/american-goldfinch.png";
import baldEagle from "./assets/animals/bald-eagle.png";
import cicada from "./assets/animals/cicada.png";
import frogfish from "./assets/animals/hairy-frogfish.png";
import "./App.css";

const cards = [
  { img: elephant, name: "elephant", level: "easy" },
  { img: lion, name: "lion", level: "easy" },
  { img: elephantShrew, name: "Elephant Shrew", level: "expert" },
  { img: hippo, name: "Hippo", level: "medium" },
  { img: pangolin, name: "Pangolin", level: "hard" },
  { img: rondo, name: "Rondo Dwarf Galago", level: "expert" },
  { img: goldFinch, name: "American Gold Fish", level: "medium" },
  { img: baldEagle, name: "Bald Eagle", level: "easy" },
  { img: cicada, name: "Cicada", level: "expert" },
  { img: frogfish, name: "Hairy Frogfish", level: "expert" },
];

const App = () => {
  const [randomCard, setRandomCard] = useState(1);
  const selectRandomCard = () => {
    const randomIndex = Math.floor(Math.random() * cards.length);
    const card = cards[randomIndex];
    setRandomCard(card);
  };

  const [display, setDisplay] = useState(1);
  const setCardDisplay = () => {
    setDisplay(display * -1);
    setFlipped(false);
  };

  const [isFlipped, setFlipped] = useState(false);
  const flipCard = () => {
    setFlipped(!isFlipped);
  };

  const [level, setLevel] = useState("all");
  const selectAllLevel = () => {
    setLevel("all");
  };
  const selectEasyLevel = () => {
    setLevel("easy");
  };
  const selectMediumLevel = () => {
    setLevel("medium");
  };
  const selectHardLevel = () => {
    setLevel("hard");
  };
  const selectExpertLevel = () => {
    setLevel("expert");
  };

  return (
    <div className="app-container">
      <h1 className="app-title">Animal world</h1>
      <p className="greeting">See how many animals you can guess!</p>
      <p className="num-of-cards">Number of cards: {cards.length}</p>
      <div className="level-container">
        <div className="level-block" onClick={selectAllLevel}>
          <div class="level all"></div>
          <p className="level-name">All</p>
        </div>
        <div className="level-block" onClick={selectEasyLevel}>
          <div class="level easy"></div>
          <p className="level-name">Easy</p>
        </div>
        <div className="level-block" onClick={selectMediumLevel}>
          <div class="level medium"></div>
          <p className="level-name">Medium</p>
        </div>
        <div className="level-block" onClick={selectHardLevel}>
          <div class="level hard"></div>
          <p className="level-name">Hard</p>
        </div>
        <div className="level-block" onClick={selectExpertLevel}>
          <div class="level expert"></div>
          <p className="level-name">Expert</p>
        </div>
      </div>
      {randomCard && (
        <div className="card-container" onClick={flipCard}>
          <div className={isFlipped ? "card flipped" : "card"}>
            <div className={"card-front " + randomCard.level}>
              <img
                className="animal-img"
                src={randomCard.img}
                alt={randomCard.name}
              />
            </div>
            <div className="card-back">
              <p className="animal-name">{randomCard.name}</p>
            </div>
          </div>
        </div>
        // <Card
        //   name={randomCard.name}
        //   img={randomCard.img}
        //   level={randomCard.level}
        //   onClick={setDisplay}
        // />
      )}
      <button onClick={selectRandomCard}>Next</button>
    </div>
  );
};
export default App;
