import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ContinueMenu from "./ContinueMenu";
import CurrentUser from "./CurrentUser";
import LeaderBoard from "./Leaderboard";

function IDMenu({ isLoggedIn }) {
  const [userData, setUserData] = useState([]);
  //   const navigate = useNavigate();

  //   (isLoggedIn) ?

  useEffect(() => {
    fetch("http://localhost:3000/users")
      .then((res) => res.json())
      .then((data) => setUserData(data));
  }, []);

  //   console.log(userData[0].id);
  return (
    <div>
      <LeaderBoard key={userData.id} userData={userData} />
      {userData?.id ? <CurrentUser userData={userData} /> : <p>hi</p>}
      <ContinueMenu />
    </div>
  );
}

export default IDMenu;
