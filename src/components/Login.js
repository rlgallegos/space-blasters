import {useState} from "react";

function Login({isLoggedIn, setIsLoggedIn}) {
    const bcrypt = require("bcryptjs")

    //controlled form states
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    function handleChange(e) {
        if (e.target.name === 'username') {
            setUsername(e.target.value)
        } else {
            setPassword(e.target.value)
        }
    }

    async function handleSubmit(e) {
        e.preventDefault()

        //validate username and get userinfo
        const dbUser = await findUsername(username)
        if (!dbUser) {
            alert("Username Not Found")
            setUsername('')
            setPassword('')
        }

        //validate password and set Login State
        bcrypt.compare(password, dbUser.hashPass)
        .then(response => {
            if (response) {
                setIsLoggedIn(true)
            } else {
                alert("Password Did Not Match")
                setUsername('')
                setPassword('')
            }
        })
    }

    console.log(isLoggedIn)

    //fetch username
    function findUsername(username) {
        const dbUser = fetch('http://localhost:3000/users')
        .then(res => res.json())
        .then(data => {
            const dbUser = data.find(user => user.username === username)
            return dbUser
        })
        return dbUser
    }

    return (
        <form onSubmit={handleSubmit}>
            <input name="username" onChange={handleChange} value={username} type="text" placeholder="Enter Username"></input>
            <input name="password" onChange={handleChange} value={password} type="password" placeholder="Enter Password"></input>
            <input type="submit" value="Login" ></input>
            <br></br>
        </form> 
    )
}

export default Login