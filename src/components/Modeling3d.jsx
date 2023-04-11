import React from "react";
import { modelingCards } from "../api/modelingCards";

export default function Modeling3d() {
  return (
    <>
      <section className="containerModelingCards">
        <div className="cardBoxModeling">
          <div className="slideCard">
            <div className="imgIn"></div>
            <h2 className="titleCard">Project Name</h2>
            <p className="descriptionCard">Html, css, js</p>
            <button className="btnWatch">
              <a
                href="https://www.youtube.com/watch?v=9VT0N7EECG8&ab_channel=JuanRodriguez"
                target="_blank"
              >
                Watch
              </a>
            </button>
          </div>
        </div>
      </section>
      <section className="containerModelingCards">
        {modelingCards.map((itemModeling) => {
          return <img src={itemModeling.image} alt="" key={itemModeling.id} />;
        })}
      </section>
    </>
  );
}
