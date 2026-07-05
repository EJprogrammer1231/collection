  const movieForm = document.getElementById("movie-form");
  const movieInput = document.getElementById("movie-input");

  const movieCard = document.getElementById("movie-card");

  const poster = document.getElementById("poster");
  const title = document.getElementById("title");
  const year = document.getElementById("year");
  const genre = document.getElementById("genre");
  const imdbRating = document.getElementById("imdb-rating");
  const plot = document.getElementById("plot");

  movieForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const movieInput_val = movieInput.value.trim();

    if (movieInput_val === "") {
      alert("Please enter movie name!!");
      return;
    }

    const urlMovie = `https://www.omdbapi.com/?apikey=e7139f30&t=${movieInput_val}`;
    const response = await fetch(urlMovie);
    const convertData = await response.json();

    console.log(convertData);

    if (convertData.Response === "False") {
      alert(convertData.Error);
      return;
    }

    poster.src = convertData.Poster;
    title.textContent = convertData.Title;
    year.textContent = convertData.Year;
    genre.textContent = convertData.Genre;
    imdbRating.textContent = convertData.imdbRating;
    plot.textContent = convertData.Plot;
  });