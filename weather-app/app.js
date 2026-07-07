const searchForm_element = document.getElementById("search-form");
const inputField_element = document.getElementById("inputField");

const cityName_element = document.getElementById("cityName");
const Temperature_element = document.getElementById("Temperature");
const Condition_element = document.getElementById("Condition");
const Humidity_element = document.getElementById("Humidity");
const WindSpeed_element = document.getElementById("WindSpeed");
const WeatherIcon_element = document.getElementById("WeatherIcon");
const loading_element = document.getElementById("loading");

searchForm_element.addEventListener("submit", async (e) => {
  e.preventDefault();

  const city = inputField_element.value.trim();

  if (city === "") {
    alert("Please enter a city");
    return;
  }

  loading_element.textContent = "Loading...";

  try {
    const weather = `https://api.weatherapi.com/v1/current.json?key=ce91dfa8db9e4e43bd5225801260407&q=${city}`;

    const response = await fetch(weather);
    const weatherData = await response.json();

    console.log(weatherData);

    loading_element.textContent = "";

    if (weatherData.error) {
      alert(weatherData.error.message);
      return;
    }

    cityName_element.textContent =
      `${weatherData.location.name}, ${weatherData.location.country}`;

    Temperature_element.textContent =
      `${weatherData.current.temp_c} °C`;

    Condition_element.textContent =
      weatherData.current.condition.text;

    Humidity_element.textContent =
      `${weatherData.current.humidity}%`;

    WindSpeed_element.textContent =
      `${weatherData.current.wind_kph} kph`;

    WeatherIcon_element.src =
      "https:" + weatherData.current.condition.icon;

    searchForm_element.reset();
  } catch (error) {
    loading_element.textContent = "";
    alert("Something went wrong. Please try again.");
    console.error(error);
  }
});