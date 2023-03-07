import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login({ userData, isLoggedIn, setIsLoggedIn }) {
  const bcrypt = require("bcryptjs");
  const navigate = useNavigate();

  //controlled form states
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  function handleChange(e) {
    if (e.target.name === "username") {
      setUsername(e.target.value);
    } else {
      setPassword(e.target.value);
    }
  }

  console.log(isLoggedIn)

  // async function handleSubmit(e) {
  //   e.preventDefault();

  //   //validate username and get userinfo
  //   const dbUser = userData.find((user) => user.username === username);
  //   if (!dbUser) {
  //     alert("Username Not Found");
  //     setUsername("");
  //     setPassword("");
  //   }

    function handleSubmit(e) {
      e.preventDefault();

      //validate username and get userinfo
      const dbUser = userData.find((user) => user.username === username);
      if (!dbUser) {
        alert("Username Not Found");
        setUsername("");
        setPassword("");
      }

      //validate password and set Login State
      bcrypt.compare(password, dbUser.hashPass).then((response) => {
        if (response) {
          setIsLoggedIn(true);
          navigate("/game");
        } else {
          alert("Password Did Not Match");
          setUsername("");
          setPassword("");
        }
      })
    }

    return (
      <form onSubmit={handleSubmit} >
        <input
          name="username"
          onChange={handleChange}
          value={username}
          type="text"
          placeholder="Enter Username"
        />
        <input
          name="password"
          onChange={handleChange}
          value={password}
          type="password"
          placeholder="Enter Password"
        />
        <input type="submit" value="Login" />
        <br></br>
      </form>
    );
}


export default Login;
