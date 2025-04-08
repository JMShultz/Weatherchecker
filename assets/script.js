

const apiKey = '48205a00080b9db7adfd2a939418ad39';
const baseURL='https://api.openweathermap.org/data/2.5/weather';

const cityInput= document.getElementById('city-input');
const searchBtn= document.getElementById('btn-search');
const weatherDisplay= document.getElementById('displayWeather');
const errorMessage= document.getElementById('error-message');



const CityName= document.getElementById('city-name');
const weatherDiscription= document.getElementById('weatherDiscription');
const Temp= document.getElementById('Temp');
const Humidity= document.getElementById('Humidity');
const windSpeed= document.getElementById('windSpeed');
const weatherIcon= document.getElementById('weatherIcon');

async function fetchweather(City){
try {
    const responce= await fetch(`${baseURL}?q=${City}&appid=${apiKey}&units=imperial`)
    const data = await responce.json()
    displayWeather(data)
    errorMessage.classList.add("hidden")
    weatherDisplay.classList.remove("hidden")
  
} catch (error) {
    showError(error.message)
}
};


    function showError(message){
errorMessage.textContent=message
errorMessage.classList.remove('hidden')
weatherDisplay.classList.add('hidden')
    };

    function displayWeather(data){
        CityName.textContent=`Weather in ${data.name},${data.sys.country}`
        weatherDiscription.textContent=`condition:${data.weather[0].description}`
        Temp.textContent=`Temperature:${data.main.temp} F`
        Humidity.textContent=`Humidity:${data.main.humidity}`
        windSpeed.textContent=`Wind Speed:${data.wind.speed}`

    };

    searchBtn.addEventListener('click',() => {
        const city=cityInput.value.trim()

        if(city){
            fetchweather(city)
            cityInput.value=''

        }else{
            showError("Please enter city")
        }


    })
