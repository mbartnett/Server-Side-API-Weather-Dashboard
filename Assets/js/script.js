// API stuff

const apiKey = '7e04a867561611c9d92b2e344ce5ac39';

const submitBtn = document.getElementById('submit')

let currentSection = document.getElementById('current-section');
let fiveDaySection = document.getElementById('five-day-section');
const searchText = document.getElementById('search-text');
submitBtn.addEventListener('click', getWeather)

const rightTop = document.querySelector('.right-top-child-container')
const rightBottom = document.querySelector('.right-bottom-child-container')

submitBtn.addEventListener("click", function() {
rightTop.style.display = "flex";
rightBottom.style.display = "block";
});

function getWeather() {
    var cityName = searchText.value
    displayWeather(cityName);
}

function displayWeather(cityName) {
    const apiURL = "http://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + apiKey + "&units=imperial";
    fetch(apiURL)
        .then(function (response) {
            return response.json()
        })
        .then(function (currentWeather) {
            console.log(currentWeather)
            let iconURL = `https://openweathermap.org/img/w/${currentWeather.weather[0].icon}.png`;
            currentSection.innerHTML =
                `<h2><span id="current-city">${currentWeather.name}</span>, <span id="current-date">${dayjs.unix(currentWeather.dt).format('MMMM D, YYYY')}</span> <span class="emoji">${parseWeatherEmoji(currentWeather.weather[0].icon)}</span></h2>
            <h4>Temp: <span id="current-temp">${currentWeather.main.temp}</span></h4>
            <h4>Wind: <span id="current-wind">${currentWeather.wind.speed} mph</span></h4>
            <h4>Humidity: <span id="current-humidity">${currentWeather.main.humidity}</span></h4>`
            const fiveDayURL = `http://api.openweathermap.org/data/2.5/forecast?lat=${currentWeather.coord.lat}&lon=${currentWeather.coord.lon}&appid=${apiKey}&units=imperial`
            fetch(fiveDayURL)
                .then(function (response) {
                    return response.json()
                })
                .then(function (fiveDayWeather) {
                    for (i = 2; i < fiveDayWeather.list.length; i = i + 8) {
                        console.log(fiveDayWeather.list[i])
                        let fiveIconURL0 = `https://openweathermap.org/img/w/${fiveDayWeather.list[0].weather[0].icon}.png`;
                        let fiveIconURL1 = `https://openweathermap.org/img/w/${fiveDayWeather.list[8].weather[0].icon}.png`;
                        let fiveIconURL2 = `https://openweathermap.org/img/w/${fiveDayWeather.list[16].weather[0].icon}.png`;
                        let fiveIconURL3 = `https://openweathermap.org/img/w/${fiveDayWeather.list[24].weather[0].icon}.png`;
                        let fiveIconURL4 = `https://openweathermap.org/img/w/${fiveDayWeather.list[32].weather[0].icon}.png`;
                        fiveDaySection.innerHTML =
                    `<section class="five-day-child-container">
                        <h3>${dayjs(fiveDayWeather.list[0].dt_txt).format('MMMM D, YYYY')}</h3>
                        <p class="emoji">${parseWeatherEmoji(fiveDayWeather.list[0].weather[0].icon)}</p>
                        <p>Temp: ${fiveDayWeather.list[0].main.temp}</p>
                        <p>Wind: ${fiveDayWeather.list[0].wind.speed} mph</p>
                        <p>Humidity: ${fiveDayWeather.list[0].main.humidity}</p>            
                        </section>
                    <section class="five-day-child-container">
                        <h3>${dayjs(fiveDayWeather.list[8].dt_txt).format('MMMM D, YYYY')}</h3>
                        <p class="emoji">${parseWeatherEmoji(fiveDayWeather.list[8].weather[0].icon)}</p>
                        <p>Temp: ${fiveDayWeather.list[8].main.temp}</p>
                        <p>Wind: ${fiveDayWeather.list[8].wind.speed} mph</p>
                        <p>Humidity: ${fiveDayWeather.list[8].main.humidity}</p>                  
                    </section>
                    <section class="five-day-child-container">
                        <h3>${dayjs(fiveDayWeather.list[16].dt_txt).format('MMMM D, YYYY')}</h3>
                        <p class="emoji">${parseWeatherEmoji(fiveDayWeather.list[16].weather[0].icon)}</p>
                        <p>Temp: ${fiveDayWeather.list[16].main.temp}</p>
                        <p>Wind: ${fiveDayWeather.list[16].wind.speed} mph</p>
                        <p>Humidity: ${fiveDayWeather.list[16].main.humidity}</p>                  
                    </section>
                    <section class="five-day-child-container">
                        <h3>${dayjs(fiveDayWeather.list[24].dt_txt).format('MMMM D, YYYY')}</h3>
                        <p class="emoji">${parseWeatherEmoji(fiveDayWeather.list[24].weather[0].icon)}</p>
                        <p>Temp: ${fiveDayWeather.list[24].main.temp}</p>
                        <p>Wind: ${fiveDayWeather.list[24].wind.speed} mph</p>
                        <p>Humidity: ${fiveDayWeather.list[24].main.humidity}</p>                 
                    </section>
                    <section class="five-day-child-container">
                        <h3>${dayjs(fiveDayWeather.list[32].dt_txt).format('MMMM D, YYYY')}</h3>
                        <p class="emoji">${parseWeatherEmoji(fiveDayWeather.list[32].weather[0].icon)}</p>
                        <p>Temp: ${fiveDayWeather.list[32].main.temp}</p>
                        <p>Wind: ${fiveDayWeather.list[32].wind.speed} mph</p>
                        <p>Humidity: ${fiveDayWeather.list[32].main.humidity}</p>                    
                    </section>`
                    }
                })
        })
}

function parseWeatherEmoji(weatherCode) {
    weatherCode = parseInt(weatherCode)
    let emoji;
    switch (weatherCode) {
        case 1:
            emoji = "☀️"
            break;
        case 2:
            emoji = "🌤"
            break;
        case 3:
            emoji = "☁️"
            break;
        case 4:
            emoji = "☁️"
            break;
        case 9:
            emoji = "🌧"
            break;
        case 10:
            emoji = "🌧"
            break;
        case 11:
            emoji = "⛈"
            break;
        case 13:
            emoji = "❄️"
            break;
        case 50:
            emoji = "💦"
            break;
        default:
            break;
    }
    return emoji
}

// currentWeather.weather[0] can be {01d, 01n, 02d, 02n, etc.}

// let emoji = currentWeather.weather[0];
// if (currentWeather.weather[0] || fiveDayWeather.list[i].weather[0] === "01d" || "01n") {
//     emoji = "☀️";
// }

// else if (currentWeather.weather[0] || fiveDayWeather.list[i].weather[0] === "02d" || "02n") {
//     return "🌤";
// } else if (currentWeather.weather[0] || fiveDayWeather.list[i].weather[0] === "03d" || "03n") {
//     return "☁️";
// } else if (currentWeather.weather[0] || fiveDayWeather.list[i].weather[0] === "04d" || "04n") {
//     return "☁️";
// } else if (currentWeather.weather[0] || fiveDayWeather.list[i].weather[0] === "09d" || "09n") {
//     return "🌧";
// } else if (currentWeather.weather[0] || fiveDayWeather.list[i].weather[0] === "10d" || "10n") {
//     return "🌧";
// } else if (currentWeather.weather[0] || fiveDayWeather.list[i].weather[0] === "11d" || "11n") {
//     return "⛈";
// } else if (currentWeather.weather[0] || fiveDayWeather.list[i].weather[0] === "13d" || "13n") {
//     return "❄️";
// } else if (currentWeather.weather[0] || fiveDayWeather.list[i].weather[0] === "50d" || "50n") {
//     return "💦";
// }
