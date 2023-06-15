const initState = {
  game: {},
  screenshots: {},
};

export default function detailReducer(state = initState, action) {
  switch (action.type) {
    case "GET_DETAIL":
      return {
        ...state,
        game: action.payload.game,
        screenshots: action.payload.screenshots,
      };

    default:
      return { ...state };
  }
}
