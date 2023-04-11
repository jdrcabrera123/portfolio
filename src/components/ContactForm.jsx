import { useState } from "react";
import axios from "axios";

export default function ContactForm() {
  const [fullname, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [requirement, setRequirement] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      fullname: fullname,
      email: email,
      mobile: mobile,
      requirement: requirement,
    };
    console.log(formData);
    try {
      await axios.post("http://localhost:9000/api/users", formData);
      alert("We'll contact you as soon as possible");
      setFullName("");
      setEmail("");
      setMobile("");
      setRequirement("");
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <form className="formContact" onSubmit={handleSubmit}>
        <input
          className="inputStyle"
          type="text"
          name="fullName"
          id=""
          placeholder="Your full name"
          value={fullname}
          onChange={(e) => setFullName(e.target.value)}
          required
        />
        <input
          className="inputStyle"
          type="email"
          name="email"
          id=""
          placeholder="Your mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          className="inputStyle"
          type="tel"
          name="mobile"
          placeholder="Your mobile"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
          required
        />
        <textarea
          name="requirement"
          id=""
          cols="30"
          rows="10"
          placeholder="How could I help you?"
          value={requirement}
          onChange={(e) => setRequirement(e.target.value)}
        ></textarea>
        <input type="submit" name="sendMessage" id="" value="Send" />
      </form>
    </>
  );
}
