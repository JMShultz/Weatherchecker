

const apiKey = '48205a00080b9db7adfd2a939418ad39';
const baseURL='https://api.openweathermap.org/data/2.5/weather';

const cityInput= document.getElementById('City-input');
const searchBtn= document.getElementById('City-input');
const weatherDisplay= document.getElementById('City-input');
const errorMessage= document.getElementById('City-input');



const CityName= document.getElementById('city-name');
const weatherDiscription= document.getElementById('weatherDiscription');
const Temp= document.getElementById('Temp');
const Humidity= document.getElementById('Humidity');
const windSpeed= document.getElementById('windSpeed');
const weatherIcon= document.getElementById('weatherIcon');

async function fetchweather(City){
try {
    const responce= await fetch(`${baseURL}?q=${City}&appid=${apiKey}&units=metric`)
    const data = await responce.json()
    displayWeather(data)
    errorMessage.classList.add("hidden")
    weatherDisplay.classList.remove("hidden")
  
} catch (error) {
    showError(error.message)
}
};

fetchweather('Ohio')
    function showError(message){

    };

    function displayWeather(data){
        CityName.textContent=`Weather in ${data.name},${data.sys.country}`
        weatherDiscription.textContent=`condition:${data.weather[0].description}`
        Temp.textContent=`Temperature:${data.main.temp} C`
        Humidity.textContent=`Humidity:${data.main.humidity}`
        windSpeed.textContent=`WindSpeed:${data.wind.speed}`

    };
