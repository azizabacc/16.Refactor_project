import Data from "./config.js";
import { generateCard } from "./cardgenerator.js";
import { day } from "./dayGenerator.js";
import { clean } from "./cleanContainer.js";
const container = document.querySelector(".container");
const cityNameContainer = document.querySelector('.city-name');

export const weatherForecast = (lat,lon) =>{
    fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&cnt=5&units=metric&exclude=minutely,hourly,alerts&appid=${Data.key}`)
.then(response => response.json())
.then(result => {
    console.log('Welcome to this basic weather app. this is not a product but the product of an academic exercise.')

    clean(container);
    // Looping through 5 days of weather data
    for(let i = 0; i < 5; i++) {

        const data = result.list[i];
        //generate card day
        generateCard(day(i),data);

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
        console.log(lon,lat);
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