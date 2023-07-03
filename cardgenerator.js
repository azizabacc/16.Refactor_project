import { generateDiv,generateImg,generateTitle ,generateSpan} from "./div_generator.js";
import { meanTempPerDay } from "./meanTemp.js";
const container = document.querySelector(".container");

// generate card and give it to parent 
export const generateCard = (dayOfTheWeek,weatherIcon,weatherDesc,temp,temp_min,temp_max ) =>{
        // Create the elements with Data
       
        const card = generateDiv("card",container);
        const imageBox =generateDiv('imgBx',card);
        generateImg(weatherIcon,imageBox)

        const contentBox =generateDiv("contentBx",card);


        generateTitle("h2",dayOfTheWeek,contentBox)

        generateTitle("h4",weatherDesc,contentBox)

        const currentTempBox = generateDiv("color",contentBox);


        generateTitle('h3',"Temp:",currentTempBox);

        generateSpan("current-temp",temp + "°C",currentTempBox)
        const minMaxTemperatures =generateDiv("details",contentBox)



        generateTitle('h3',"More:",minMaxTemperatures)
        generateSpan("min-temp",temp_min + "°C",minMaxTemperatures)

        generateSpan("max-temp",temp_max + "°C",minMaxTemperatures)
}
                           