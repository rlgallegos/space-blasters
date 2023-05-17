import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login({ userData, isLoggedIn, setIsLoggedIn, setCurrentUser }) {
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

  function handleSubmit(e) {
    e.preventDefault();

    //validate username and get userinfo
    const dbUser = userData.find((user) => user.username === username);
    if (!dbUser) {
      alert("Username Not Found");
      setUsername("");
      setPassword("");
      return
    }

    //validate password and set Login State
    bcrypt.compare(password, dbUser.hashPass).then((response) => {
      if (response) {
        setIsLoggedIn(true);
        navigate(`/user/${dbUser["id"]}`);
      } else {
        alert("Password Did Not Match");
        setUsername("");
        setPassword("");
      }
    });
    setCurrentUser(dbUser);
  }

  // function handlePlayClickSound() {
  //   const clickSound = new Audio("./sparkle.wav").play();
  // }

  return (
    <form className="LoginForm" onSubmit={handleSubmit}>
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
