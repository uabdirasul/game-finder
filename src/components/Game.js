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
