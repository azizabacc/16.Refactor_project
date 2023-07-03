import { generateDiv,generateImg,generateTitle ,generateSpan} from "./div_generator.js";
const container = document.querySelector(".container");

// generate card and give it to parent 
export const generateCard = (dayOfTheWeek,data) =>{
        // Create the elements with Data
       
        const card = generateDiv("card",container);
        const imageBox =generateDiv('imgBx',card);
        generateImg(data.weather[0].icon,imageBox)

        const contentBox =generateDiv("contentBx",card);


        generateTitle("h2",dayOfTheWeek,contentBox)

        generateTitle("h4",data.weather[0].description,contentBox)

        const currentTempBox = generateDiv("color",contentBox);


        generateTitle('h3',"Temp:",currentTempBox);

        generateSpan("current-temp",data.main.temp + "°C",currentTempBox)
        const minMaxTemperatures =generateDiv("details",contentBox)



        generateTitle('h3',"More:",minMaxTemperatures)
        generateSpan("min-temp",data.main.temp_min + "°C",minMaxTemperatures)

        generateSpan("max-temp",data.main.temp_max + "°C",minMaxTemperatures)
}
                           