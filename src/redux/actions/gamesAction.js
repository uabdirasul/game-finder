import axios from "axios";
import {
  popular_games_url,
  upcoming_games_url,
  new_games_url,
} from "../../api";
// Action Creator
export const loadGames = () => async (dispatch) => {
  const popularGamesData = await axios.get(popular_games_url);
  const upcomingGamesData = await axios.get(upcoming_games_url);
  const newGamesData = await axios.get(new_games_url);
  dispatch({
    type: "FETCH_GAMES",
    payload: {
      popular: popularGamesData.data.results,
      upcoming: upcomingGamesData.data.results,
      new: newGamesData.data.results,
    },
  });
};
