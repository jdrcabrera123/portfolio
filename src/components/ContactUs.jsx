import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function ContactUs() {
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
          console.log(result.text);
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
      />
      {/* <label>Email</label> */}
      <input
        className="inputStyle"
        type="email"
        name="user_email"
        placeholder="Your mail"
      />
      {/* <label>Mobile</label> */}
      <input className="inputStyle" type="tel" name="contact_number" placeholder="Your mobile" />
      {/* <label>Message</label> */}
      <textarea name="message" placeholder="How could I help you?" />
      <input type="submit" value="Send" />
    </form>
  );
}
