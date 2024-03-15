const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNGEyODFiYTgzY2E4YTRjODI4NjkwMGU4YWRiODA1NyIsInN1YiI6IjY1ZWRkZmQyYmRjMzRjMDE2MzMyZTdkMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.t3fvqXqcEtO_y8j-cq9x5v1csjc-Cw5tXc8WhxB0oKM",
  },
};

let currentIndex = 0;
let timerId;

function updateSlider() {
  fetch(
    "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc",
    options
  )
    .then((response) => response.json())
    .then((response) => {
      currentIndex = Math.floor(Math.random() * response.results.length + 1);

      const movieTitle = response.results[currentIndex].title;
      document.querySelector(".title_info h1").textContent = movieTitle;

      const movieOverview = response.results[currentIndex].overview;
      document.querySelector(".title_info_synopsis").textContent =
        movieOverview;

      const maturityNumber = response.results[currentIndex].adult
        ? "18+"
        : "16+";
      document.querySelector(".maturity_number").textContent = maturityNumber;

      const voteAverage = response.results[currentIndex].vote_average;
      document.querySelector(".vote_average").textContent = voteAverage;

      const language = response.results[currentIndex].original_language;
      document.querySelector(".language").textContent = language;

      let splitted = response.results[currentIndex].release_date.split("-");

      const year = splitted[0];
      document.querySelector(".item_year span").textContent = year;

      const movieBackDrop = response.results[currentIndex].backdrop_path;
      document.querySelector(
        ".bg_img"
      ).style.backgroundImage = `url(https://image.tmdb.org/t/p/original${movieBackDrop})`;
    })
    .catch((err) => console.error(err));
}

function startSlider() {
  updateSlider();

  timerId = setInterval(updateSlider, 5000);
}

startSlider();
