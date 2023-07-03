import Data from "./config.js";
import { generateCard } from "./cardgenerator.js";
import { day } from "./dayGenerator.js";
import { iconWeather } from "./iconWeatherPerDay.js";
import { clean } from "./cleanContainer.js";
import { meanTempPerDay ,meanTempMaxPerDay,meanTempMinPerDay} from "./meanTemp.js";
const container = document.querySelector(".container");
const cityNameContainer = document.querySelector('.city-name');

const weatherForecast = (lat,lon) =>{
    fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&exclude=minutely,hourly,alerts&appid=${Data.key}`)
.then(response => response.json())
.then(result => {
    console.log('Welcome to this basic weather app. this is not a product but the product of an academic exercise.')
    clean(container);
    // Looping through  5 days of weather data

    
        //const data = result.list[i];
        const DaysMeanTemp = meanTempPerDay(result.list)
        const DayMeanTempMax =meanTempMaxPerDay(result.list)
        const DayMeanTempMin =meanTempMinPerDay(result.list)
        const iconWeatherarray = iconWeather(result.list);
        console.log(result);
        console.log('temp' + DaysMeanTemp);
        console.log('max' + DayMeanTempMax);
        console.log('min' + DayMeanTempMin);
        console.log('icons' +iconWeatherarray.iconArray);
        console.log('icons' +iconWeatherarray.weatherDescription);
        for(let i = 0; i < 5; i++) {
  
        generateCard(day(i),iconWeatherarray.iconArray[i],iconWeatherarray.weatherDescription[i],DaysMeanTemp[i],DayMeanTempMax[i],DayMeanTempMin[i]);

    };
});
}
// Fetching first api to get the City coordinates then fetch weather api
export const forecast = (thisCity) =>{
    const apiUrl = "https://api.openweathermap.org/data/2.5/forecast/?q=" + thisCity + "&appid=" + Data.key;

    fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
    
        const lon = data.city.coord.lon;
        const lat = data.city.coord.lat;
        cityNameContainer.innerHTML = data.city.name;
            weatherForecast(lat,lon);
    })
    .catch((error) => {
        // If there are errors, send out an error message
        console.error('Error:', "not a place!");
        clean(container);
        return alert("Are you sure you aren't holding your map upside down?");
    });
}