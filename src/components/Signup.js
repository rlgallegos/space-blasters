import {useState} from "react";

function Signup({isLoggedIn, setIsLoggedIn, userData, setUserData}) {
    //import encryption library
    const bcrypt = require("bcryptjs")

    //controlled form data
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        hashPass: "",
        state: {
            score: "",
            level: "",
            livesRemaining: ""
        }
    })
    function handleChange(e) {
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    function validateEmail(mail) {
        if (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
            return (true)
        }
        return (false)
    }

    //Submit Form
    function handleSubmit(e) {
        e.preventDefault()

         if (!validateEmail(formData.email) ) {
            alert('Invalid Email Address')
            return
         }

        //validation logic
        if (!formData.username || !formData.email || !formData.hashPass) {
            alert('Please Complete Form')
            return
        }
        if (userData.find(userObj => userObj.username === formData.username)) {
            alert('Username Already taken')
            return
        }
    
        //encrypt password
        bcrypt.hash(formData.hashPass, 5)
        .then(hash => {
            fetch('http://localhost:3000/users', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({...formData,
                    hashPass: hash
                })
            })
            .then(res => res.json())
            .then(data => {
                setUserData([...userData, data])
                setIsLoggedIn(!isLoggedIn)
            })
        })
        .catch(err => {
            console.log(err)
        })
    }

    return(
        <form onSubmit={handleSubmit}>
            <input name="username" onChange={handleChange} value={formData.username} type="text" placeholder="Enter Username"></input>
            <input name="email" onChange={handleChange} value={formData.email} type="text" placeholder="Enter Email"></input>
            <input name="hashPass" onChange={handleChange} value={formData.hashPass} type="password" placeholder="Enter Password"></input>
            <input value="Create New User" type="submit"></input>
        </form>
    )
}
export default Signup;