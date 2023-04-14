import React from "react";
import {programmingCards} from "../api/programingCards"

export default function Programming() {
  return (
    <section className="containerProgrammingCards">
    {programmingCards.map((itemProgrammingCard) => {
      return (
        <div className="cardBoxProgramming" key={itemProgrammingCard.id}>
          <div className="slideCard">
            <div className="imgIn">
              <img src={itemProgrammingCard.image} alt="" />
            </div>
            <h2 className="titleCard">{itemProgrammingCard.title}</h2>
            <p className="descriptionCard">{itemProgrammingCard.description}</p>
            <button className="btnWatch">
              <a href={itemProgrammingCard.url} target="_blank">
                Watch
              </a>
            </button>
          </div>
        </div>
      );
    })}
  </section>
  );
}
