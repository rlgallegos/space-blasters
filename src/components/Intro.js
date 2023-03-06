import Signup from "./Signup"
import Login from "./Login"

function Intro(isLoggedIn, setIsLoggedIn) {
    return (
        <>
            <header className="App-header">
            Good Luck
            </header>
            <div>
                <Login isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
                <Signup />
            </div>
        </>
    )
}
export default Intro