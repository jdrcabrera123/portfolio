import React from "react";
import Contact from "./Contact";
import ContactForm from "./ContactForm";
import Footer from "./Footer";
import ProgrammingUxUi from "./ProgrammingUxUi";
import { HashLink as Link } from "react-router-hash-link";
import { motion } from "framer-motion";
import ContactUs from "./ContactUs";

// import { links } from "../api/links";

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.3 } }}
    >
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
        <div className="custom-shape-divider-bottom-1682370008">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
              className="shape-fill"
            ></path>
          </svg>
        </div>
      </section>

      <ProgrammingUxUi />
      
      <div className="contactSection">
      <div className="custom-shape-divider-top-1682371163">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
        <Contact />
        {/* <ContactForm /> */}
        <ContactUs/>
      </div>

      <Footer />
    </motion.div>
  );
}
