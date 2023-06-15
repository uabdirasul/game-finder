import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

function Game({ name, released, img }) {
  return (
    <StyledGame>
      <h3>Game Name: {name}</h3>
      <p>Released Date: {released}</p>
      <img src={img} alt={name} />
    </StyledGame>
  );
}

const StyledGame = styled(motion.div)`
  min-height: 30vh;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  text-align: center;
  border-radius: 1rem;
  img {
    width: 100%;
    height: 35vh;
    object-fit: cover;
    border-bottom-right-radius: 1rem;
    border-bottom-left-radius: 1rem;
  }
`;

export default Game;
