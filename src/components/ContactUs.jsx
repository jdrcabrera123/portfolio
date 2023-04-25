import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function ContactUs() {
  const [fullname, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [requirement, setRequirement] = useState("");
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_9gr220l",
        "template_cubbfus",
        form.current,
        "dIsRp29XvEMsyJwVu"
      )
      .then(
        (result) => {
          alert("I will contact you soon");
          setFullName("");
          setEmail("");
          setMobile("");
          setRequirement("");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="formContact">
      {/* <label>Name</label> */}
      <input
        className="inputStyle"
        type="text"
        name="user_name"
        placeholder="Your full name"
        value={fullname}
        onChange={(e) => setFullName(e.target.value)}
        required
      />
      {/* <label>Email</label> */}
      <input
        className="inputStyle"
        type="email"
        name="user_email"
        placeholder="Your mail"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      {/* <label>Mobile</label> */}
      <input
        className="inputStyle"
        type="tel"
        name="contact_number"
        placeholder="Your mobile"
        value={mobile}
        onChange={(e) => setMobile(e.target.value)}
        required
      />
      {/* <label>Message</label> */}
      <textarea
        name="message"
        placeholder="How could I help you?"
        value={requirement}
        onChange={(e) => setRequirement(e.target.value)}
      />
      <input type="submit" value="Send" />
      <Link to={"/register"} className="validateUser">Validate user</Link>
    </form>
  );
}
