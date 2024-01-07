
const apiKey = '48205a00080b9db7adfd2a939418ad39'; 
const apiUrl = 'https://api.openweathermap.org/data/2.5/forecast';
var weatherBtn = document.querySelector("#weatherselect");
weatherBtn.addEventListener("click", getForecast);


function getWeather(city) {
  return fetch(`${apiUrl}?q=${city}&appid=${apiKey}`)
    .then(response => response.json());
}

function WeatherForecast(weatherData) {
  const container = document.getElementById('weather');
  container.innerHTML = ''; 

  weatherData.list.forEach(item => {
    const date = new Date(item.dt * 1000); 
    const day = date.toLocaleDateString('en-US', { weekday: 'long' });
    const time = date.toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric' });

    const temps = item.main.temp;
    const Weatherdescription = item.weather[0].description;

    const forecastWeather = document.createElement('div');
    forecastWeather.classList.add('forecast-item');
    forecastWeather.innerHTML = `
      <p><strong>${day}</strong></p>
      <p>${time}</p>
      <p>${temps} &deg;F</p>
      <p>${Weatherdescription}</p>
    `;

    container.appendChild(forecastWeather);
  });
}

async function getForecast() {
  const citySelect = document.getElementById('citySelect');
  const city = citySelect.value;

  if (!city) {
    alert('Please enter a city name.');
    return;
  }

  try {
    const weatherData = await getWeather(city);
    WeatherForecast(weatherData);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

getWeather();