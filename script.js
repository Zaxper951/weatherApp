const img = document.querySelector('img');
const apiKey = '4d7af9c6227f451eace32827232808';
const baseURL = 'https://api.weatherapi.com/v1';

const searchForm = document.getElementById('searchForm');
const locationInput = document.getElementById('locationInput');

// Assinging condition to file path
const weatherIcons = {
    '1000': {
        day: 'day/113.png',
        night: 'night/113.png',
    },
    '1003': {
        day:'day/116.png', 
        night:'night/116.png',
    },

    '1006': {
        day: 'day/119.png',
        night: 'night/119.png',
        },

    '1009': {
        day: 'day/122.png',
        night: 'night/122.png',
        },

    '1030': {
        day: 'day/143.png',
        night: 'night/143.png',
        },

    '1063': {
        day: 'day/176.png',
        night: 'night/176.png',
        },

    '1066': {
        day: 'day/179.png',
        night: 'night/179.png',
    },

    '1069': {
        day: 'day/182.png',
        night: 'night/182.png',
    },

    '1072': {
        day: 'day/185.png',
        night: 'night/185.png',
    },

    '1087': {
        day: 'day/200.png',
        night: 'night/200.png',
    },

    '1114': {
        day: 'day/227.png',
        night: 'night/227.png',
    },

    '1117': {
        day: 'day/230.png',
        night: 'night/230.png',
    },

    '1135': {
        day: 'day/248.png',
        night: 'night/248.png',
    },

    '1147': {
        day: 'day/260.png',
        night: 'night/260.png',
    },

    '1150': {
        day: 'day/263.png',
        night: 'night/263.png',
    },

    '1153': {
        day: 'day/266.png',
        night: 'night/266.png',
    },

    '1168': {
        day: 'day/281.png',
        night: 'night/281.png',
    },

    '1171': {
        day: 'day/284.png',
        night: 'night/284',
    },

    '1180': {
        day: 'day/293.png',
        night: 'night/293.png',
    },

    '1183': {
        day: 'day/296.png',
        night: 'night/296.png',
    },

    '1186': {
        day: 'day/299.png',
        night: 'night/299.png',
    },

    '1189': {
        day: 'day/302.png',
        night: 'night/302.png',
    },

    '1192': {
        day: 'day/305.png',
        night: 'night/305.png',
    },

    '1195': {
        day: 'day/308.png',
        night: 'night/308.png',
    },

    '1198': {
        day: 'day/311.png',
        night: 'night/311.png',
    },

    '1201': {
        day: 'day/314.png',
        night: 'night/314.png',
    },

    '1204': {
        day: 'day/317.png',
        night: 'night/317.png',
    },

    '1207': {
        day: 'day/320.png',
        night: 'night/320.png',
    },

    '1210': {
        day: 'day/323.png',
        night: 'night/323.png',
    },

    '1213': {
        day: 'day/326.png',
        night: 'night/326.png',
    },

    '1216': {
        day: 'day/329.png',
        night: 'night/329.png',
    },

    '1219': {
        day: 'day/332.png',
        night: 'night/332.png',
    },

    '1222': {
        day: 'day/335.png',
        night: 'night/335.png',
    },

    '1225': {
        day: 'day/338.png',
        night: 'night/338.png',
    },

    '1237': {
        day: 'day/350.png',
        night: 'night/350.png',
    },

    '1240': {
        day: 'day/353.png',
        night: 'night/353.png',
    },

    '1243': {
        day: 'day/356.png',
        night: 'night/356.png',
    },

    '1246': {
        day: 'day/359.png',
        night: 'night/359.png',
    },

    '1249': {
        day: 'day/362.png',
        night: 'night/362.png',
    },

    '1252': {
        day: 'day/365.png',
        night: 'night/365.png',
    },

    '1255': {
        day: 'day/368.png',
        night: 'night/368.png',
    },

    '1258': {
        day: 'day/371.png',
        night: 'night/371.png',
    },

    '1261': {
        day: 'day/374.png',
        night: 'night/374.png',
    },

    '1264': {
        day: 'day/377.png',
        night: 'night/377.png',
    },

    '1273': {
        day: 'day/386.png',
        night: 'night/386.png',
    },

    '1276': {
        day: 'day/389.png',
        night: 'night/389.png',
    },

    '1279': {
        day: 'day/392.png',
        night: 'night/392.png',
    },

    '1282': {
        day: 'day/395.png',
        night: 'night/395.png',
    }
    // Add more weather conditions and their corresponding icon paths here
};

// Get weather icon
/*function getWeatherIcon(conditionCode) {
    // Determine the icon path based on the condition code
    
    const iconPath = weatherIcons[conditionCode];

    if (iconPath) {
        // Return an HTML string with the weather icon image
        return `<img src="${iconPath}" alt="${conditionCode} icon" />`;
    } else {
        // Handle cases where the condition code doesn't match any known icon
        console.warn(`No icon found for condition code: ${conditionCode}`);
        return ''; // Return an empty string if no icon is available
    }
}; */

function getWeatherIcon_3Days(conditionCode) {
    // Determine the icon path based on the condition code
    
    const iconPath = weatherIcons[conditionCode].day;

    if (iconPath) {
        // Return an HTML string with the weather icon image
        return `<img src="${iconPath}" alt="${conditionCode} icon" />`;
    } else {
        // Handle cases where the condition code doesn't match any known icon
        console.warn(`No icon found for condition code: ${conditionCode}`);
        return ''; // Return an empty string if no icon is available
    }
};

// Test code for get weather icon
function getWeatherIcon(conditionCode, isDaytime) {
    // Determine the icon path based on the condition code and time of day
    const iconPath = weatherIcons[conditionCode];

    if (iconPath) {
        // Use the appropriate icon based on time of day
        const icon = isDaytime ? iconPath.day : iconPath.night;

        // Return an HTML string with the weather icon image
        return `<img src="${icon}" alt="${conditionCode} icon" />`;
    } else {
        // Handle cases where the condition code doesn't match any known icon
        console.warn(`No icon found for condition code: ${conditionCode}`);
        return ''; // Return an empty string if no icon is available
    }
}

// Format time
function formatTime(date) {
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    const formattedHours = hours % 12 === 0 ? 12 : hours % 12;
    return `${formattedHours} ${ampm}`;
}

searchForm.addEventListener('submit',function (e){
    e.preventDefault();
    const userInput = locationInput.value.trim();
    getCurrentWeather(userInput);
    getForecast(userInput);
    getHourlyForecast(userInput);
    const forecastInfo = document.getElementById('forecastInfo');
    forecastInfo.style.display = 'inline-grid';
    const hourlyForecast = document.getElementById('hourlyForecast');
    hourlyForecast.style.display = 'inline-grid';

    //make the buttons appear 
    const metricSetting = document.getElementById('metricSetting');
    metricSetting.style.display = 'inline-flex';
    const imperialSetting = document.getElementById('imperialSetting');
    imperialSetting.style.display = 'inline-flex';

    // Humidity
    getHumidity(userInput);
    const humidity = document.getElementById('humidity');
    humidity.style.display = 'inline-grid';

    // UV Index
    getUVIndex(userInput);
    const uv = document.getElementById('uv');
    uv.style.display = 'inline-grid';

    //Visibility
    getVisibility(userInput);
    const visibility = document.getElementById('visibility');
    visibility.style.display = 'inline-grid';

    // Wind Speed
    getWindSpeed(userInput);
    const windSpeed = document.getElementById('windSpeed');
    windSpeed.style.display = 'inline-grid';

    // Feels Like Temp
    getFeelsLike(userInput);
    const feelsLike = document.getElementById('feelsLike');
    feelsLike.style.display = 'inline-grid';

    // Precipation
    getPrecipation(userInput)
    const precipation = document.getElementById('precipation');
    precipation.style.display = 'inline-grid';

    // Pressure
    getPressure(userInput);
    const pressure = document.getElementById('pressure');
    pressure.style.display = 'inline-grid';

    // Cloud
    getCloud(userInput);
    const cloud = document.getElementById('cloud');
    cloud.style.display = 'inline-grid';

    // Wind 
    getWind2(userInput);
    const wind2 = document.getElementById('wind2');
    wind2.style.display = 'inline-grid';

    // Wind Direction
    getWind2Dir(userInput);
    const wind2Dir = document.getElementById('wind2Dir');
    wind2Dir.style.display = 'inline-grid';

    // Wind Degree
    getWind2Degree(userInput);
    const Wind2Degree = document.getElementById('wind2Degree');
    Wind2Degree.style.display = 'inline-grid';

    // Time Zone
    getTimeZone(userInput);
    const timeZone = document.getElementById('timeZone');
    timeZone.style.display = 'inline-grid';
});

// Getting and showing current weather to page
async function getCurrentWeather(userInput) {
    try {
        const requestparam = '/current.json';
        const response = await fetch(`${baseURL}${requestparam}?key=${apiKey}&q=${userInput}`,{mode:'cors'})
        if (response.ok){
            const jsonResponse = await response.json();
            console.log(jsonResponse);
            const currentInfo = document.getElementById('currentInfo');
    
    // Create HTML content to display the weather information
    const htmlContent = `
        <h2>${jsonResponse.location.name}, ${jsonResponse.location.region}</h2> 
        <h2>${jsonResponse.location.country}</h2>
        <p>${jsonResponse.location.localtime}</p>
        <p>Temperature: ${jsonResponse.current.temp_f}°F</p>
        <p>Condition: ${jsonResponse.current.condition.text}</p>
    `;

    // Populate the 'weather-info' div with the HTML content
    currentInfo.innerHTML = htmlContent;
        }
    }
    catch(error){
        console.log(error);
    }
};


// Forecast Info API request 
async function getForecast(userInput) {
    try {
        const requestparam = '/forecast.json';
        const response = await fetch(`${baseURL}${requestparam}?key=${apiKey}&q=${userInput}&days=14`, { mode: 'cors' });
        if (response.ok) {
            const jsonResponse = await response.json();
            console.log(jsonResponse);
            

            const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

            // Loop through the forecast data and populate the forecastInfo div
            for (let i = 0; i < jsonResponse.forecast.forecastday.length; i++) {
                const forecastDayData = jsonResponse.forecast.forecastday[i];
                const date = new Date(forecastDayData.date);
                const dayOfWeek = daysOfWeek[date.getDay()];
            
                // Construct the IDs using template literals
                const forecastDayElement = document.getElementById(`forecastDay${i}`);
                const forecastSymbolElement = document.getElementById(`forecastSymbol${i}`);
                const ForecastLowElement = document.getElementById(`ForecastLow${i}`);
                const ForecastHighElement = document.getElementById(`ForecastHigh${i}`);
            
                let conditionCode = forecastDayData.day.condition.code;
            
                forecastDayElement.innerHTML = `${dayOfWeek}`;
                forecastSymbolElement.innerHTML = `${getWeatherIcon_3Days(conditionCode)}`;
                ForecastLowElement.innerHTML = `Low: ${forecastDayData.day.mintemp_f}`;
                ForecastHighElement.innerHTML = `High: ${forecastDayData.day.maxtemp_f}`;
    }
}
    }
    catch (error) {
        console.log(error);
    }   
}

// Hourly forecast API
/*async function getHourlyForecast(userInput){
    try{
        const requestparam='/forecast.json';
        const response = await fetch(`${baseURL}${requestparam}?key=${apiKey}&q=${userInput}&days=14`, {mode: 'cors'});
        if (response.ok) {
            const jsonResponse = await response.json();
            console.log(jsonResponse);

            // Loop through the forecast data and populate the forecastInfo div
            const hoursAhead = 24;
            for (let i = 0; i < hoursAhead; i++) {
                const forecastDayData = jsonResponse.forecast.forecastday[0].hour[i];
                const apiDate = new Date(forecastDayData.time);

                //ensuring that time starts from current time 
                const currentDate = new Date();
                const currentHour = currentDate.getHours();
                const hours = [];
                for (let i = 0; i < hoursAhead; i++) {
                    const nextHour = (currentHour + i) % 24; // Ensure it stays within 0-23
                    hours.push(nextHour);
                }

                // formatting the time to AM and PM 
                const formattedHours = hours.map((hour) => {
                    if (hour === 0) {
                        return '12 AM';
                    } else if (hour < 12) {
                        return `${hour} AM`;
                    } else if (hour === 12) {
                        return '12 PM';
                    } else {
                        return `${hour - 12} PM`;
                    }
                });
            
                // Construct the IDs using template literals
                const timeElement = document.getElementById(`time${i}`);
                const conditionSymbolElement = document.getElementById(`condition${i}`);
                const tempElement = document.getElementById(`currentTemp${i}`);
                
            
                let conditionCode = forecastDayData.condition.code;
            
                timeElement.innerHTML = `${formattedHours[i]}`;
                conditionSymbolElement.innerHTML = `${getWeatherIcon(conditionCode.night)}`;
                tempElement.innerHTML = `${forecastDayData.feelslike_f}`;
            }
        }
    }
    catch(error){
        console.log(error);
    }
}*/

//Test Code
async function getHourlyForecast(userInput) {
    try {
        const requestparam = '/forecast.json';
        const response = await fetch(`${baseURL}${requestparam}?key=${apiKey}&q=${userInput}&days=14`, { mode: 'cors' });
        if (response.ok) {
            const jsonResponse = await response.json();
            console.log(jsonResponse);

            // Loop through the forecast data and populate the forecastInfo div
            const hoursAhead = 24;
            for (let i = 0; i < hoursAhead; i++) {
                const forecastDayData = jsonResponse.forecast.forecastday[0].hour[i];
                const apiDate = new Date(forecastDayData.time);

                // Ensuring that time starts from the current time 
                const currentLocalTime = jsonResponse.location.localtime;
                const currentDate = new Date(currentLocalTime);
                const currentHour = currentDate.getHours();
                const hours = [];
                for (let i = 0; i < hoursAhead; i++) {
                    const nextHour = (currentHour + i) % 24; // Ensure it stays within 0-23
                    hours.push(nextHour);
                }

                // Formatting the time to AM and PM 
                const formattedHours = hours.map((hour) => {
                    if (hour === 0) {
                        return '12 AM';
                    } else if (hour < 12) {
                        return `${hour} AM`;
                    } else if (hour === 12) {
                        return '12 PM';
                    } else {
                        return `${hour - 12} PM`;
                    }
                });

                // Construct the IDs using template literals
                const timeElement = document.getElementById(`time${i}`);
                const conditionSymbolElement = document.getElementById(`condition${i}`);
                const tempElement = document.getElementById(`currentTemp${i}`);

                let conditionCode = forecastDayData.condition.code;
                const isDaytime = hours[i] >= 6 && hours[i] < 18; // Determine if it's daytime

                timeElement.innerHTML = `${formattedHours[i]}`;
                conditionSymbolElement.innerHTML = `${getWeatherIcon(conditionCode, isDaytime)}`;
                tempElement.innerHTML = `${forecastDayData.feelslike_f}`;
            }
        }
    } catch (error) {
        console.log(error);
    }
}



async function getHumidity(userInput){
    try{
        const requestparam = '/current.json';
        const response = await fetch(`${baseURL}${requestparam}?key=${apiKey}&q=${userInput}`,{mode:'cors'})
        if (response.ok){
            const jsonResponse = await response.json();
            const humidity = document.getElementById('humidityValue');
    // Populate the 'weather-info' div with the HTML content
    humidity.innerHTML = `${jsonResponse.current.humidity}%`;
        }
    }
    catch(error){
        console.log(error);
    }
}

async function getUVIndex(userInput){
    try{
        const requestparam = '/current.json';
        const response = await fetch(`${baseURL}${requestparam}?key=${apiKey}&q=${userInput}`,{mode:'cors'})
        if (response.ok){
            const jsonResponse = await response.json();
            const uvValue = document.getElementById('uvValue');
    // Populate the 'weather-info' div with the HTML content
    uvValue.innerHTML = `${jsonResponse.current.uv}%`;
        }
    }
    catch(error){
        console.log(error);
    }
}

async function getVisibility(userInput){
    try{
        const requestparam = '/current.json';
        const response = await fetch(`${baseURL}${requestparam}?key=${apiKey}&q=${userInput}`,{mode:'cors'})
        if (response.ok){
            const jsonResponse = await response.json();
            const visibilityValue = document.getElementById('visibilityValue');
    // Populate the 'weather-info' div with the HTML content
            visibilityValue.innerHTML = `${jsonResponse.current.vis_miles} miles`;
        }
    }
    catch(error){
        console.log(error);
    }
}

async function getWindSpeed(userInput){
    try{
        const requestparam = '/current.json';
        const response = await fetch(`${baseURL}${requestparam}?key=${apiKey}&q=${userInput}`,{mode:'cors'})
        if (response.ok){
            const jsonResponse = await response.json();
            const windSpeedValue = document.getElementById('windSpeedValue');
    // Populate the 'weather-info' div with the HTML content
            windSpeedValue.innerHTML = `${jsonResponse.current.wind_mph} mph`;
        }
    }
    catch(error){
        console.log(error);
    }
}

async function getFeelsLike(userInput){
    try{
        const requestparam = '/current.json';
        const response = await fetch(`${baseURL}${requestparam}?key=${apiKey}&q=${userInput}`,{mode:'cors'})
        if (response.ok){
            const jsonResponse = await response.json();
            const feelsLikeValue = document.getElementById('feelsLikeValue');
    // Populate the 'weather-info' div with the HTML content
            feelsLikeValue.innerHTML = `${jsonResponse.current.feelslike_f} &deg;F`;
        }
    }
    catch(error){
        console.log(error);
    }
}

async function getPrecipation(userInput){
    try{
        const requestparam = '/current.json';
        const response = await fetch(`${baseURL}${requestparam}?key=${apiKey}&q=${userInput}`,{mode:'cors'})
        if (response.ok){
            const jsonResponse = await response.json();
            const precipationValue = document.getElementById('precipationValue');
    // Populate the 'weather-info' div with the HTML content
            precipationValue.innerHTML = `${jsonResponse.current.precip_in} inches`;
        }
    }
    catch(error){
        console.log(error);
    }
}

async function getPressure(userInput){
    try{
        const requestparam = '/current.json';
        const response = await fetch(`${baseURL}${requestparam}?key=${apiKey}&q=${userInput}`,{mode:'cors'})
        if (response.ok){
            const jsonResponse = await response.json();
            const pressureValue = document.getElementById('pressureValue');
    // Populate the 'weather-info' div with the HTML content
            pressureValue.innerHTML = `${jsonResponse.current.pressure_in} inches`;
        }
    }
    catch(error){
        console.log(error);
    }
}

async function getCloud(userInput){
    try{
        const requestparam = '/current.json';
        const response = await fetch(`${baseURL}${requestparam}?key=${apiKey}&q=${userInput}`,{mode:'cors'})
        if (response.ok){
            const jsonResponse = await response.json();
            const cloudValue = document.getElementById('cloudValue');
    // Populate the 'weather-info' div with the HTML content
            cloudValue.innerHTML = `${jsonResponse.current.cloud} %`;
        }
    }
    catch(error){
        console.log(error);
    }
}

async function getWind2(userInput){
    try{
        const requestparam = '/current.json';
        const response = await fetch(`${baseURL}${requestparam}?key=${apiKey}&q=${userInput}`,{mode:'cors'})
        if (response.ok){
            const jsonResponse = await response.json();
            const wind2Value = document.getElementById('wind2Value');
    // Populate the 'weather-info' div with the HTML content
            wind2Value.innerHTML = `${jsonResponse.current.wind_mph} mph`;
        }
    }
    catch(error){
        console.log(error);
    }
}

async function getWind2Dir(userInput){
    try{
        const requestparam = '/current.json';
        const response = await fetch(`${baseURL}${requestparam}?key=${apiKey}&q=${userInput}`,{mode:'cors'})
        if (response.ok){
            const jsonResponse = await response.json();
            const wind2DirValue = document.getElementById('wind2DirValue');
    // Populate the 'weather-info' div with the HTML content
            wind2DirValue.innerHTML = `${jsonResponse.current.wind_dir}`;
        }
    }
    catch(error){
        console.log(error);
    }
}

async function getWind2Degree(userInput){
    try{
        const requestparam = '/current.json';
        const response = await fetch(`${baseURL}${requestparam}?key=${apiKey}&q=${userInput}`,{mode:'cors'})
        if (response.ok){
            const jsonResponse = await response.json();
            const wind2DegreeValue = document.getElementById('wind2DegreeValue');
    // Populate the 'weather-info' div with the HTML content
            wind2DegreeValue.innerHTML = `${jsonResponse.current.wind_degree} &deg`;
        }
    }
    catch(error){
        console.log(error);
    }
}

async function getTimeZone(userInput){
    try{
        const requestparam = '/current.json';
        const response = await fetch(`${baseURL}${requestparam}?key=${apiKey}&q=${userInput}`,{mode:'cors'})
        if (response.ok){
            const jsonResponse = await response.json();
            const timeZoneValue = document.getElementById('timeZoneValue');
    // Populate the 'weather-info' div with the HTML content
            timeZoneValue.innerHTML = `${jsonResponse.location.tz_id}`;
        }
    }
    catch(error){
        console.log(error);
    }
}

