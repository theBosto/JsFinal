const apiUrl =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=b4a281ba83ca8a4c8286900e8adb8057&page=1";

const imgPath = "https://image.tmdb.org/t/p/w1280";

const SearchApi =
  "https://api.themoviedb.org/3/search/movie?&api_key=b4a281ba83ca8a4c8286900e8adb8057&query=";

const main = document.getElementById("main");
const form = document.getElementById("form");
const search = document.getElementById("search");

function showMovies(url) {
  fetch(url)
    .then((res) => res.json())
    .then(function (data) {
      if (data.results.length === 0) {
        const message = document.createElement("p");
        message.textContent = "No movies found.";
        message.classList = "noMovies"
        main.appendChild(message);
      } else {
        data.results.forEach((element) => {
          const el = document.createElement("div");
          const image = document.createElement("img");
          const text = document.createElement("h2");

          text.innerHTML = `${element.title}`;
          image.src = imgPath + element.poster_path;
          el.appendChild(image);
          el.appendChild(text);
          main.appendChild(el);
        });
      }
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
      const errorMessage = document.createElement("p");
      errorMessage.textContent = "An error occurred while fetching data.";
      main.appendChild(errorMessage);
    });
}

function showDefaultMovies() {
  main.innerHTML = "";
  showMovies(apiUrl); 
}

showDefaultMovies();

form.addEventListener("submit", (event) => {
  event.preventDefault();
  main.innerHTML = "";
  const movieSearch = search.value.trim();

  if (movieSearch) {
    showMovies(SearchApi + movieSearch);
    search.value = "";
  } else {
    showDefaultMovies();
  }
});
