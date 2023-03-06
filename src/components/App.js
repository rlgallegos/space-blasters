import '../App.css';
import { Routes, Route } from "react-router-dom"
import Board from './Board';
import Intro from './Intro';
import PageNotFound from './PageNotFound';

import {useState} from "react";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  return (
    <div className="App">
      <main>
      <Routes>
        <Route path='/' element={<Intro isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />} />
        <Route path='/:id' />
          {/* Finn's Id Page Component goes as the element in the route above */}
        <Route path='/game' element={<Board />} />
          {/* Nick's highetst game component will replace element "Board" above */}
        <Route path='*' element={<PageNotFound />} />
      </Routes>
      </main>
    </div>
  );
}

export default App;
