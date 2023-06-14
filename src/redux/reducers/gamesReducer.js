const initState = {
  popular: [],
  newGames: [],
  upcoming: [],
  searched: [],
};
function gamesReducer(state = initState, action) {
  switch (action.type) {
    case "FETCH_GAMES":
      return { ...initState };

    default:
      return initState;
  }
}

export default gamesReducer;
