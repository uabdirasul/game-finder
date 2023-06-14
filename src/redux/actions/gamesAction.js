import axios from "axios";
import { popular_games_url } from "../../api";
// Action Creator
export const loadGames = () => async (dispatch) => {
  const popularGamesData = await axios.get(popular_games_url);
  dispatch({
    type: "FETCH_GAMES",
    payload: {
      popular: popularGamesData.data.results,
    },
  });
};
