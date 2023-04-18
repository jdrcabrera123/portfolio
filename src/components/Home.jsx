import React from "react";
import Contact from "./Contact";
import ContactForm from "./ContactForm";
import Footer from "./Footer";
import ProgrammingUxUi from "./ProgrammingUxUi";
import { HashLink as Link } from "react-router-hash-link";

// import { links } from "../api/links";

export default function Home() {
  return (
    <>
      <section className="home">
        <p>
          I'm passionate about bringing my <span> designs to life</span>,
          through
          <span> programming</span>. By using code to connect my{" "}
          <span> ideas</span> with the real world, I can create{" "}
          <span>dynamic</span> and <span>engaging </span> experiences that have
          a <span>meaningful </span> impact on people's lives."
        </p>
        <div className="gaussianOne"></div>
        <div id="letsTalk" className="letsTalk">
          <Link to="#contact" smooth>
            Let's Talk
          </Link>
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
