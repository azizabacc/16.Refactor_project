
const convertTimeStamp = (timeStamp) => {
    let date = new Date(timeStamp * 1000);
    return date.toLocaleDateString("en-US", {
      month: "long",
      weekday: "long",
      year: "numeric",
      day: "numeric",
    });
  };
const mean = (array) => {
    let sum = 0;
    let result = 0;
    for (let i = 0; i < array.length; i++) {
      sum += array[i];
    }
    result = (sum / array.length).toFixed(1);
    return result;
  };
  
  export const meanTempPerDay = (dataList,temp) => {
    let temptab = [];
    let DaysMeanTemp = [];
    for (let j = 0; j < dataList.length - 1; j++) {
      let day = convertTimeStamp(dataList[j].dt).slice(0, 2);
      if (day != convertTimeStamp(dataList[j + 1].dt).slice(0, 2)) {
        temptab.push(dataList[j].main.temp);
        DaysMeanTemp.push(mean(temptab));
        temptab = [];
      } else {
        temptab.push(dataList[j].main.temp);
      }
    }
    return DaysMeanTemp;
  };
  export const meanTempMaxPerDay = (dataList) => {
    let temptab = [];
    let DaysMeanTemp = [];
    for (let j = 0; j < dataList.length - 1; j++) {
      let day = convertTimeStamp(dataList[j].dt).slice(0, 2);
      if (day != convertTimeStamp(dataList[j + 1].dt).slice(0, 2)) {
        temptab.push(dataList[j].main.temp_max);
        DaysMeanTemp.push(mean(temptab));
        temptab = [];
      } else {
        temptab.push(dataList[j].main.temp_max);
      }
    }
    return DaysMeanTemp;
  };
// not very useful it seams that temp take always the same value as temp_min
  export const meanTempMinPerDay = (dataList) => {
    let temptab = [];
    let DaysMeanTemp = [];
    for (let j = 0; j < dataList.length - 1; j++) {
      let day = convertTimeStamp(dataList[j].dt).slice(0, 2);
      if (day != convertTimeStamp(dataList[j + 1].dt).slice(0, 2)) {
        temptab.push(dataList[j].main.temp_min);
        DaysMeanTemp.push(mean(temptab));
        temptab = [];
      } else {
        temptab.push(dataList[j].main.temp_min);
      }
    }
    return DaysMeanTemp;
  };