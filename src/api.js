// API key
const api_key = "9b9ca42e0bdc433691b8be1479d6b8d4";

// Base URL
const base_url = "https://api.rawg.io/api/";

// Current Date
const current_date = new Date();

// Current Year
const currentYear = current_date.getFullYear();

// Current Month
const currentMonth =
  current_date.getMonth() + 1 < 10
    ? "0" + (current_date.getMonth() + 1)
    : current_date.getMonth() + 1;

// currentDay
const currentDay =
  current_date.getDate() < 10
    ? "0" + current_date.getDate()
    : current_date.getDate();

const currentYearDateInFormat = `${currentYear}-${currentMonth}-${currentDay}`;
const lastYearDateInFormat = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const nextYearDateInFormat = `${currentYear + 1}-${currentMonth}-${currentDay}`;

// Popular Games
const popular_games_url = `${base_url}games?key=${api_key}&dates=${lastYearDateInFormat},${currentYearDateInFormat}&ordering=-rating&page_size`;
