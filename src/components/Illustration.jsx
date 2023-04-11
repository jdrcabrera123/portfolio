import React from "react";
import {illustrationCards} from '../api/illustrationCards'

export default function Illustration() {
  return(
  <section className="containerIllustrationCards">
    {illustrationCards.map((itemIllustration) => {
      return <img src={itemIllustration.image} alt="" key={itemIllustration.id} />;
    })}
  </section>
  )
}
