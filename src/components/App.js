import "../App.css";
import Board from "./Board";
import Signup from "./Signup";
import Login from "./Login";
import IDMenu from "./IDMenu";
import { useState } from "react";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div className="App">
      <header className="App-header">Good Luck</header>
      <main>
        <Signup />
        <IDMenu />
        <Board />
        <Login isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      </main>
    </div>
  );
}

export default App;
