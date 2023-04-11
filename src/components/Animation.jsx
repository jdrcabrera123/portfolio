import React from "react";
import { animationCards } from "../api/animationCards";

export default function Animation() {
  return (
    <section className="containerAnimationCards">
      {animationCards.map((itemAnimationCard) => {
        return (
          <div className="cardBoxAnimation" key={itemAnimationCard.id}>
            <div className="slideCard">
              <div className="imgIn">
                <img src={itemAnimationCard.image} alt="" />
              </div>
              <h2 className="titleCard">{itemAnimationCard.title}</h2>
              <p className="descriptionCard">{itemAnimationCard.description}</p>
              <button className="btnWatch">
                <a href={itemAnimationCard.url} target="_blank">
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
