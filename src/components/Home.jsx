import React from "react";
import Contact from "./Contact";
import ContactForm from "./ContactForm";
import Footer from "./Footer";
import ProgrammingUxUi from "./ProgrammingUxUi";

// import { links } from "../api/links";

export default function Home() {
  return (
    <>
      <section className="home">
        <p>
          I love <span>endowing life</span> to my <span>creations</span> and{" "}
          <span>designs</span> . <span>Programming</span> is the way to connect
          my <span> ideas</span> with people <span> interaction</span>.
        </p>
        <div className="gaussianOne"></div>
        <div id="letsTalk" className="letsTalk">
          <a href="#contact">Let's Talk</a>
          {/* {menuLinks.map((link) => {
            return <a href={link.url} key={link.id}>{link.text}</a>;
          })} */}
        </div>
      </section>
      <ProgrammingUxUi />
      <div className="contactSection">
        <Contact />
        <ContactForm />
      </div>

      <Footer />
    </>
  );
}
