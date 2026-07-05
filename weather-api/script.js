const weatherForm = document.getElementById("weather-form");
const cityInput = document.getElementById("city-input");

const weatherCard = document.getElementById("weather-card");
const cityName = document.getElementById("city-name");
const temperature = document.getElementById("temperature");
const weatherCondition = document.getElementById("weather-condition");
const humidity = document.getElementById("humidity");
const windSpeed = document.getElementById("wind-speed");

weatherForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const cityInput_val = cityInput.value.trim();

  if (cityInput_val === "") {
    alert("Please enter city!!!");
    return;
  }

  const url =  `https://api.weatherapi.com/v1/current.json?key=ce91dfa8db9e4e43bd5225801260407&q=${cityInput_val}`;

  const response = await fetch(url);
  const data = await response.json();

  cityName.textContent = data.location.name;
  temperature.textContent = `Temperature: ${data.current.temp_c}°C`;
  weatherCondition.textContent = `Condition: ${data.current.condition.text}`;
  humidity.textContent = `Humidity: ${data.current.humidity}%`;
  windSpeed.textContent = `Wind Speed: ${data.current.wind_kph} kph`;
});