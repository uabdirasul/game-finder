const initState = {
  popular: [],
  newGames: [],
  upcoming: [],
  searched: [],
};
function gamesReducer(state = initState, action) {
  switch (action.type) {
    case "FETCH_GAMES":
      return {
        ...state,
        popular: action.payload.popular,
        upcoming: action.payload.upcoming,
        newGames: action.payload.new,
      };

    default:
      return { ...state };
  }
}

export default gamesReducer;
