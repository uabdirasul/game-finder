import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";

function GameDetail() {
  const { game, screenshots } = useSelector((state) => state.detail);
  const platform_images = {
    "PlayStation 5":
      "https://oyster.ignimgs.com/wordpress/stg.ign.com/2020/01/PS5-Logo.png",
    "Xbox Series S/X":
      "https://cdn.segmentnextimages.com/wp-content/uploads/2020/09/Xbox-White-Logo-1536x864.jpg",
    PC: "https://img.freepik.com/premium-vector/volumetric-personal-computer-system-unit-with-monitor-keyboard-color-icon_599062-61.jpg?w=740",
    "Xbox One":
      "https://news.xbox.com/en-us/wp-content/uploads/sites/2/xboxone_rgb_stacked2.png",
    "PlayStation 4": "https://mcdn.wallpapersafari.com/medium/81/80/cO7WUE.jpg",
  };
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
              <h3>Platforms: </h3>
              <div className="platforms">
                {game.platforms
                  ? game.platforms.map((data) => {
                      return (
                        <div className="platforms-wrapper">
                          <h4 key={data.platform.id}>{data.platform.name}</h4>
                          <img
                            src={platform_images[data.platform.name]}
                            alt={data.platform.name}
                          />
                        </div>
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
            <h3>Game Screenshots:</h3>
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

  .rating h3 {
    padding: 0;
    margin-bottom: 2rem;
  }

  .info h3 {
    padding: 0;
    text-align: center;
  }

  .stats {
    display: flex;
    justify-content: space-between;
  }

  .platforms {
    display: flex;
    text-align: center;

    h4,
    img {
      padding: 0.4rem;
    }

    h4 {
      margin-bottom: 0.3rem;
      margin-left: 0.3rem
      padding: 0;
    }

    img {
      width: 4rem;
      height: 3rem;
      border-radius: 50%;
    }

    .platforms-wrapper {
      display: flex;
      flex-direction: column;
      align-items:center;
    }
  }

  @media only screen and (max-width: 700px) {
    .stats {
      flex-direction: column;
      align-items: center;
    }

    .rating {
      text-align: center;

      h3 {
        margin-bottom: 0rem;
      }

      p {
        margin-bottom: 1rem;
      }
    }
  }
`;

const CardDetail = styled(motion.div)`
  width: 90%;
  border-radius: 1rem;
  padding: 2rem 4rem;
  position: absolute;
  background-color: #fff;
  left: 5%;
  color: #000;

  .gallery,
  .media {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .gallery h3 {
    padding-top: 2rem;
  }

  .media img {
    width: 90%;
  }

  img {
    width: 70%;
    display: block;
    margin: 1rem 0;
  }
`;

export default GameDetail;
