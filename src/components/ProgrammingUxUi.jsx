import React from "react";
import SliderHomePage from "./SliderHomePage";

export default function ProgrammingUxUi() {
  return (
    <section className="programmingUxUI">
      <div className="textSection">
        <h1>
          Programming <br />
          UX/UI
        </h1>

        <div className="boxMovement">
          <h2>The</h2>
          <h2>deepest</h2>
          <h2>and </h2>
          <h2>beautiful</h2>
        </div>
        <div className="blackLine"></div>
      </div>

      <SliderHomePage />
    </section>
  );
}
