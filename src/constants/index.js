//Base URL
const base_url = "https://api.rawg.io/api/";

//Getting the date to get the popular, upcoming and recent games
const currentYear = new Date().getFullYear();
const getCurrentMonth = function () {
  const month = new Date().getMonth() + 1;
  if (month < 10) {
    return `0${month}`;
  } else {
    return month;
  }
};
const currentMonth = getCurrentMonth();
const currentDay = new Date().getDate();
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;

//Popular games
const popular_games = `games?dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`;

//Upcoming games
const upcoming_games = `games?dates=${currentDate},${nextYear}&ordering=-added&page_size=10`;

//Recently released
const new_games = `games?dates=${lastYear},${currentDate}&ordering=-released&page_size=10`;

//Searh Games
const query_games = "games?search=";

//Game Details
const game_details = "games/";

//Game Screenshots
const game_screenshots = "/screenshots";

//Genres
const game_genres = "genres"

//Platforms
const game_platforms = "platforms"

//Publishers
const game_publishers = "publishers/?page_size=20"

//Routes
export const popularGamesGet = () => `${ base_url }${ popular_games }`;
export const upcomingGamesGet = () => `${ base_url }${ upcoming_games }`;
export const newGamesGet = () => `${ base_url }${ new_games }`;
export const searchGameGet = game_name => `${ base_url }${ query_games }${ game_name }&page_size=21`;
export const gameDetailsGet = game_id => `${ base_url }${ game_details }${ game_id }`;
export const gameScreenshotsGet = game_id => `${ base_url }${ game_details }${ game_id }${ game_screenshots }`;
export const gameGenresGet = () => `${ base_url }${ game_genres }`;
export const specificGenreGet = genre_id => `${ base_url }${ game_genres }/${genre_id}`;
export const gamePlatformsGet = () => `${ base_url }${ game_platforms }`;
export const specificPlatformGet = platform_id => `${ base_url }${ game_platforms }${ platform_id }`;
export const gamePublishersGet = () => `${ base_url }${ game_publishers }`;
export const specificPublisherGet = publisher_id => `${ base_url }${ game_publishers }${ publisher_id }`;
