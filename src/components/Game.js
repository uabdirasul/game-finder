import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { loadDetail } from "../redux/actions/detailAction";

function Game({ name, released, img, id }) {
  const dispatch = useDispatch();

  function loadDetailHandler(id) {
    dispatch(loadDetail(id));
  }
  return (
    <StyledGame
      onClick={() => {
        loadDetailHandler(id);
      }}
    >
      <h3>Game Name: {name}</h3>
      <p>Released Date: {released}</p>
      <img src={img} alt={name} />
    </StyledGame>
  );
}

const StyledGame = styled(motion.div)`
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  text-align: center;
  border-radius: 1rem;

  h3 {
    height: 3.5rem;
    font-size: 1.2rem;
    line-height: 1.3rem;
  }

  p {
    font-size: 1.1rem;
  }

  img {
    width: 100%;
    object-fit: cover;
    border-bottom-right-radius: 1rem;
    border-bottom-left-radius: 1rem;
    min-height: 35vh;
  }
`;

export default Game;
