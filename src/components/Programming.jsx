import React from "react";
import { programmingCards } from "../api/programingCards";
import { motion } from "framer-motion";

export default function Programming() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.3 } }}
    >
      <section className="containerProgrammingCards">
        {programmingCards.map((itemProgrammingCard) => {
          return (
            <div className="cardBoxProgramming" key={itemProgrammingCard.id}>
              <div className="slideCard">
                <div className="imgIn">
                  <img src={itemProgrammingCard.image} alt="" />
                </div>
                <h2 className="titleCard">{itemProgrammingCard.title}</h2>
                <p className="descriptionCard">
                  {itemProgrammingCard.description}
                </p>
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
    </motion.div>
  );
}
