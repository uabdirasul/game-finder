import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadGames } from "../redux/actions/gamesAction";
import Game from "../components/Game";
import styled from "styled-components";
import { motion } from "framer-motion";
import GameDetail from "../components/gameDetail";

function Home() {
  const [detailVisibility, setDetailVisibility] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadGames());
  }, [dispatch]);

  // Access Data
  const { popular, newGames, upcoming } = useSelector((state) => state.games);
  return (
    <GameList
      onClick={() => {
        if (detailVisibility) {
          setDetailVisibility(!detailVisibility);
        }
      }}
    >
      {detailVisibility ? <GameDetail /> : ""}
      <h2>Upcoming Games</h2>
      <Games>
        {upcoming.map((game) => (
          <div
            key={game.id}
            onClick={() => {
              setDetailVisibility(!detailVisibility);
            }}
          >
            <Game
              key={game.id}
              name={game.name}
              released={game.released}
              img={game.background_image}
              id={game.id}
            />
          </div>
        ))}
      </Games>

      <h2>Popular Games</h2>
      <Games>
        {popular.map((game) => (
          <div
            key={game.id}
            onClick={() => {
              setDetailVisibility(!detailVisibility);
            }}
          >
            <Game
              key={game.id}
              name={game.name}
              released={game.released}
              img={game.background_image}
              id={game.id}
            />
          </div>
        ))}
      </Games>

      <h2>New Games</h2>
      <Games>
        {newGames.map((game) => (
          <div
            key={game.id}
            onClick={() => {
              setDetailVisibility(!detailVisibility);
            }}
          >
            <Game
              key={game.id}
              name={game.name}
              released={game.released}
              img={game.background_image}
              id={game.id}
            />
          </div>
        ))}
      </Games>
    </GameList>
  );
}

const GameList = styled(motion.div)`
  padding: 0 5rem;
  h2 {
    padding: 3rem 0;
    font-size: 2rem;
  }

  @media only screen and (max-width: 380px) {
    padding: 3rem;
  }

  @media only screen and (max-width: 300px) {
    padding: 1rem;
  }
`;
const Games = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-column-gap: 3rem;
  grid-row-gap: 5rem;

  @media only screen and (max-width: 380px) {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    grid-row-gap: 2rem;
  }
`;

export default Home;
