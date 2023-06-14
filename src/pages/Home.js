import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loadGames } from "../redux/actions/gamesAction";

function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadGames());
  });

  return (
    <div>
      <h2>Home Page</h2>
    </div>
  );
}

export default Home;
