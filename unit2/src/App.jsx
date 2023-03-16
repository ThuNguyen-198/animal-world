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
  { img: elephant, name: "Elephant", level: "easy" },
  { img: lion, name: "Lion", level: "easy" },
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
  //Part 1 required to display cards in random order
  // const [randomCard, setRandomCard] = useState(1);
  // const selectRandomCard = () => {
  //   const randomIndex = Math.floor(Math.random() * cards.length);
  //   const card = cards[randomIndex];
  //   setRandomCard(card);
  //   setResult("none");
  // };

  const [cardOrder, setCardOrder] = useState(0);
  const [card, setCard] = useState(cards[0]);
  const getNextCard = () => {
    setCardOrder((cardOrder + 1) % cards.length);
    const displayedCard = cards[cardOrder];
    setCard(displayedCard);
    setResult("none");
    setInput("");
    setFlipped(false);
  };
  const getPrevCard = () => {
    setCardOrder(cardOrder - 1);

    const displayedCard = cards[cardOrder];
    setCard(displayedCard);
    setResult("none");
    setInput("");
    setFlipped(false);
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

  const [streak, setStreak] = useState(0);
  const [result, setResult] = useState("none");

  const [input, setInput] = useState("");
  const handleChange = (event) => {
    setInput(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(input);
    if (input.toLowerCase() == card.name.toLowerCase()) {
      setResult("true");
      setStreak(streak + 1);
    } else {
      setResult("false");
      setStreak(0);
    }
    console.log(result);
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
          <div className="level all"></div>
          <p className="level-name">All</p>
        </div>
        <div className="level-block" onClick={selectEasyLevel}>
          <div className="level easy"></div>
          <p className="level-name">Easy</p>
        </div>
        <div className="level-block" onClick={selectMediumLevel}>
          <div className="level medium"></div>
          <p className="level-name">Medium</p>
        </div>
        <div className="level-block" onClick={selectHardLevel}>
          <div className="level hard"></div>
          <p className="level-name">Hard</p>
        </div>
        <div className="level-block" onClick={selectExpertLevel}>
          <div className="level expert"></div>
          <p className="level-name">Expert</p>
        </div>
      </div>
      {card && (
        <div className="card-container" onClick={flipCard}>
          <div className={isFlipped ? "card flipped" : "card"}>
            <div className={"card-front " + card.level}>
              <img className="animal-img" src={card.img} alt={card.name} />
            </div>
            <div className={"card-back " + card.level}>
              <p className="animal-name">{card.name}</p>
            </div>
          </div>
        </div>
      )}
      <div className="streak-block">
        <p className="streak-label">Longest Streak</p>
        <p className="streak-number">{streak}</p>
      </div>
      <form className="user-input-block" onSubmit={handleSubmit}>
        <input
          placeholder="Your Answer"
          type="text"
          className={"user-input " + result}
          value={input}
          onChange={handleChange}
        />
        <button type="submit" className="btn-check-answer">
          Check
        </button>
      </form>

      <div className="change-card-btn-block">
        <button className="btn-back" onClick={getPrevCard}>
          Back
        </button>
        <button className="btn-next" onClick={getNextCard}>
          Next
        </button>
      </div>
    </div>
  );
};
export default App;
