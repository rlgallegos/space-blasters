import { useState } from "react";
import { useNavigate } from "react-router-dom";

const BACKEND_URL = process.env.API_URL

function Signup({ setIsLoggedIn, userData, setUserData }) {
  //import encryption library
  const bcrypt = require("bcryptjs");
  const navigate = useNavigate();

  const defaultFormData = {
    username: "",
    email: "",
    hashPass: "",
  };

  //controlled form data
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    hashPass: "",
    state: {
      score: "",
      level: "",
      livesRemaining: "",
    },
  });
  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function validateEmail(mail) {
    if (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
      return true;
    }
    return false;
  }

  //Submit Form
  function handleSubmit(e) {
    e.preventDefault();

    if (!validateEmail(formData.email)) {
      alert("Invalid Email Address");
      return;
    }

    //validation logic
    if (!formData.username || !formData.email || !formData.hashPass) {
      alert("Please Complete Form");
      return;
    }
    if (userData.find((userObj) => userObj.username === formData.username)) {
      alert("Username Already taken");
      return;
    }

    //encrypt password
    console.log("API_URL:", process.env.API_URL);
    bcrypt
      .hash(formData.hashPass, 5)
      .then((hash) => {
        fetch(`${BACKEND_URL}/api/users`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ ...formData, hashPass: hash }),
        })
          .then((res) => res.json())
          .then((data) => {
            setUserData([...userData, data]);
            setIsLoggedIn(true);
            setFormData(defaultFormData);
            navigate("/");
            alert("Account Created! Please Login");
          });
      })
  }

  function handlePlayClickSound() {
    const clickSound = new Audio("./ClickSound.wav").play();
  }

  return (
    <form className="SignupForm" onSubmit={handleSubmit}>
      <input
        name="username"
        onChange={handleChange}
        value={formData.username}
        type="text"
        placeholder="Enter Username"
      ></input>
      <input
        name="email"
        onChange={handleChange}
        value={formData.email}
        type="text"
        placeholder="Enter Email"
      ></input>
      <input
        name="hashPass"
        onChange={handleChange}
        value={formData.hashPass}
        type="password"
        placeholder="Enter Password"
      ></input>
      <input
        onClick={handlePlayClickSound}
        value="Create New User"
        type="submit"
      ></input>
    </form>
  );
}
export default Signup;
