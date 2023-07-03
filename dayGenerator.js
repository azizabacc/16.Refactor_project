
// the remainder operator (%) to switch from saturday (last in array) back to sunday (first in array)

const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

export const day = (i) =>{
    const date = new Date();
    let dayOfTheWeek = weekdays[(date.getDay() + i) % 7];
    return dayOfTheWeek;
}