import Signup from "./Signup"
import Login from "./Login"

function Intro({setUserData, userData, isLoggedIn, setIsLoggedIn}) {
    return (
        <>
            <header className="App-header">
            Good Luck
            </header>
            <div>
                <Login userData={userData} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
                <Signup isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} setUserData={setUserData} userData={userData} />
            </div>
        </>
    )
}
export default Intro