import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";

function GameDetail() {
  const { game, screenshots } = useSelector((state) => state.detail);
  console.log(game);
  return (
    <CardShadow>
      <div className="card-shadow">
        <CardDetail className="detail">
          <div className="stats">
            <div className="rating">
              <h3>{game.name}</h3>
              <p>Rating: {game.rating}</p>
            </div>
            <div className="info">
              <h3>Platforms</h3>
              <div className="platforms">
                {game.platforms
                  ? game.platforms.map((data) => {
                      return (
                        <h2 key={data.platform.id}>{data.platform.name}</h2>
                      );
                    })
                  : ""}
              </div>
            </div>
          </div>
          <div className="media">
            <img src={game.background_image} alt={game.name} />
          </div>
          <div className="gallery">
            {screenshots.results
              ? screenshots.results.map((screenshot) => {
                  return (
                    <img
                      key={screenshot.id}
                      src={screenshot.image}
                      alt={game.name}
                    />
                  );
                })
              : ""}
          </div>
        </CardDetail>
      </div>
    </CardShadow>
  );
}

const CardShadow = styled(motion.div)`
  padding: 2rem;
  width: 100%;
  height: 100vh;
  overflow-y: scroll;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.5);
  top: 0;
  left: 0;
  &::-webkit-scrollbar {
    width: 0.4rem;
  }

  &::-webkit-scrollbar-thumb {
    background-color: blueviolet;
    border-radius: 2rem;
  }
`;

const CardDetail = styled(motion.div)`
  width: 90%;
  border-radius: 1rem;
  padding: 2rem 20rem;
  position: absolute;
  background-color: #fff;
  left: 5%;
  color: #000;
  img {
    width: 100%;
  }
`;

export default GameDetail;
