import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const proceedLogin = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <div className="userForm">
        {/* <h2>Login</h2> */}
        <form action="" onSubmit={proceedLogin}>
          <input type="text" placeholder="username" />
          <input type="text" placeholder="password" />
          <button type="submit">Login</button>
          <Link to={"/register"}>New user</Link>
        </form>
      </div>
    </>
  );
}
