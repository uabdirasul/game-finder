import axios from "axios";
import { game_details_url, game_screenshot_url } from "../../api";

export const loadDetail = (id) => async (dispatch) => {
  const detailData = await axios.get(game_details_url(id));
  const screenshotsData = await axios.get(game_screenshot_url(id));
  dispatch({
    type: "GET_DETAIL",
    payload: {
      game: detailData.data,
      screenshots: screenshotsData.data,
    },
  });
};
