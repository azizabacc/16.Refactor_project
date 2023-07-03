
export const iconWeather = (datalist) =>{
    let iconArray = [];
    let weatherDescription = [];
    for(let j=0 ; j<datalist.length ; j+=8){
        iconArray.push(datalist[j].weather[0].icon)
        weatherDescription.push(datalist[j].weather[0].description)
        
    }
console.log(weatherDescription);
    return {iconArray,weatherDescription}
} 
