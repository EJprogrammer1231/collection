const searchForm_element = document.getElementById("search-form");
const inputField_element = document.getElementById("inputField");

const cityName_element = document.getElementById("cityName");
const Temperature_element = document.getElementById("Temperature");
const Condition_element = document.getElementById("Condition");
const Humidity_element = document.getElementById("Humidity");
const WindSpeed_element = document.getElementById("WindSpeed");
const WeatherIcon_element = document.getElementById("WeatherIcon");

searchForm_element.addEventListener("submit", async (e) => {
  e.preventDefault();

  const get_inputField_element_val = inputField_element.value.trim();

    if (get_inputField_element_val === "") {
    alert("Please enter city");
    return;
  }

  const weather = `https://api.weatherapi.com/v1/current.json?key=ce91dfa8db9e4e43bd5225801260407&q=${get_inputField_element_val}`;

  const response = await fetch(weather);
  const weatherData = await response.json();

  console.log(weatherData);

  if (weatherData.error) {
    alert(weatherData.error.message);
    return;
  }

  cityName_element.textContent = weatherData.location.name;
  Temperature_element.textContent = weatherData.current.temp_c;
  Condition_element.textContent = weatherData.current.condition.text;
  Humidity_element.textContent = weatherData.current.humidity;
  WindSpeed_element.textContent = weatherData.current.wind_kph;
  WeatherIcon_element.src = "https:" + weatherData.current.condition.icon;

  searchForm_element.reset();
});