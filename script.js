
import { forecast } from "./Weatherforecast.js";
const searchBar = document.querySelector('#searchBar');



// Event will start on a keyup action
searchBar.addEventListener('keyup', (event) => {
    // checking the action for specific key (Enter)
    if(event.key === "Enter") {
        // Store target in variable
        const thisCity = event.target.value.toLowerCase();
        event.currentTarget.value = '';
        forecast(thisCity);
    };
});