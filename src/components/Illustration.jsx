import React from "react";
import { illustrationCards } from "../api/illustrationCards";
import { motion } from "framer-motion";

export default function Illustration() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.3 } }}
    >
      <section className="containerIllustrationCards">
        {illustrationCards.map((itemIllustration) => {
          return (
            <img
              src={itemIllustration.image}
              alt=""
              key={itemIllustration.id}
            />
          );
        })}
      </section>
    </motion.div>
  );
}
