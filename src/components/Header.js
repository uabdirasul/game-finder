import React from "react";
import styled from "styled-components";
import image from "../assets/last-of-us-poster.jpg";

function Header() {
  return (
    <StyledHeader>
      <div className="site-name">
        <h3>Game Finder</h3>
      </div>
      <div className="header-img">
        <img src={image} alt="The Last Of Us part 2" />
      </div>
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  text-align: left;

  .site-name {
    background-color: #000;
    border-bottom: 1px solid #fff;
    h3 {
      margin-left: 3rem;
      color: #fff;
    }
  }

  .header-img img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;

export default Header;
