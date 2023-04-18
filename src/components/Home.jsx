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
          I am passionate about bringing my <span>creations </span> and{" "}
          <span> designs to life</span>, and 
          <span> programming</span> is the key to making that happen. By using
          code to connect my <span> ideas</span> with real-world{" "}
          <span> interaction</span>, I can build dynamic, engaging experiences
          that resonate with people. Programming allows me to harness the power
          of technology to create something truly meaningful and impactful.
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
