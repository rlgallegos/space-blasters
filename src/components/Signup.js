import {useState} from "react";

function Signup() {
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

    //form functions
    function handleChange(e) {
        setFormData({...formData, [e.target.name]: e.target.value})
    }
    function handleSubmit(e) {
        e.preventDefault()
        fetch('http://localhost:3000/users', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            //HERE GOES ALL LOGIC THAT MAY UPDATE THE DOM OR PERHAPS
            //PASS TO THE "/" ROUTE
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