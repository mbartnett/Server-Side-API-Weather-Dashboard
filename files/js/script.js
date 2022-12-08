// API key
const apiKey = '7e04a867561611c9d92b2e344ce5ac39';

// Variables

const submitBtn = document.getElementById('submit')
let currentSection = document.getElementById('current-section');
let fiveDaySection = document.getElementById('five-day-section');
const searchText = document.getElementById('search-text');
const rightTop = document.querySelector('.right-top-child-container')
const rightBottom = document.querySelector('.right-bottom-child-container')
let results = document.querySelector("#results");
let resultsContainer = document.querySelector(".left-results-container");
const rule = document.querySelector("#rule");
let cityNames = [];

// Function that creates a button and stores data for a queried city's name

function cityNameButton() {
    if (localStorage.getItem("cityName")) {
        cityNames = JSON.parse(localStorage.getItem("cityName"))
        resultsContainer.innerHTML = '<hr noshade id="rule">'
        for (i = 0; i < cityNames.length; i++) {
            resultsContainer.innerHTML += `<button class="results" id="results" type="text">${cityNames[i]}</button>`
        }
        let results = document.querySelectorAll(".results")
        for (i = 0; i < results.length; i++) {
            results[i].addEventListener("click", function () {
                displayWeather(this.textContent)
                rightTop.style.display = "flex";
                rightBottom.style.display = "block";
                results.style.display = "block";
                rule.style.display = "block";
            })
        }
    }
}

cityNameButton()

// Functions for fetching and displaying a city's current weather and five day weather forecast

function getWeather() {
    var cityName = searchText.value
    displayWeather(cityName);
    rightTop.style.display = "flex";
    rightBottom.style.display = "block";
    results.style.display = "block";
    rule.style.display = "block";
}

submitBtn.addEventListener('click', getWeather)

function displayWeather(cityName) {
    const apiURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + apiKey + "&units=imperial";
    fetch(apiURL)
        .then(function (response) {
            console.log(response.status);
            if (response.status !== 200) {
                alert("Please enter a valid city.");
            }
            return response.json()
        })
        .then(function (currentWeather) {
            console.log(currentWeather)
            if (cityNames.includes(currentWeather.name) === false && cityName.length > 0) {
                cityNames.push(currentWeather.name)
                localStorage.setItem("cityName", JSON.stringify(cityNames))
                cityNameButton()
            }
            currentSection.innerHTML =
                `<h2><span id="current-city">${currentWeather.name}</span>, <span id="current-date">${dayjs.unix(currentWeather.dt).format('MMMM D, YYYY')}</span></h2>
            <h4 style="font-size: 64px;><span class="emoji">${parseWeatherEmoji(currentWeather.weather[0].icon)}</span></h4>
            <h4><b>Temp:</b> <span id="current-temp">${currentWeather.main.temp}</span></h4>
            <h4><b>Wind:</b> <span id="current-wind">${currentWeather.wind.speed} mph</span></h4>
            <h4><b>Humidity:</b> <span id="current-humidity">${currentWeather.main.humidity}</span></h4>`
            const fiveDayURL = `https://api.openweathermap.org/data/2.5/forecast?lat=${currentWeather.coord.lat}&lon=${currentWeather.coord.lon}&appid=${apiKey}&units=imperial`
            fetch(fiveDayURL)
                .then(function (response) {
                    return response.json()
                })
                .then(function (fiveDayWeather) {
                    for (i = 2; i < fiveDayWeather.list.length; i = i + 8) {
                        console.log(fiveDayWeather.list[i])
                        fiveDaySection.innerHTML =
                            `<section class="five-day-child-container">
                        <h3>${dayjs(fiveDayWeather.list[0].dt_txt).format('MMM. D, YYYY')}</h3>
                        <p class="emoji">${parseWeatherEmoji(fiveDayWeather.list[0].weather[0].icon)}</p>
                        <p><b>Temp:</b> ${fiveDayWeather.list[0].main.temp}</p>
                        <p><b>Wind:</b> ${fiveDayWeather.list[0].wind.speed} mph</p>
                        <p><b>Humidity:</b> ${fiveDayWeather.list[0].main.humidity}</p>            
                        </section>
                    <section class="five-day-child-container">
                        <h3>${dayjs(fiveDayWeather.list[8].dt_txt).format('MMM. D, YYYY')}</h3>
                        <p class="emoji">${parseWeatherEmoji(fiveDayWeather.list[8].weather[0].icon)}</p>
                        <p><b>Temp:</b> ${fiveDayWeather.list[8].main.temp}</p>
                        <p><b>Wind:</b> ${fiveDayWeather.list[8].wind.speed} mph</p>
                        <p><b>Humidity:</b> ${fiveDayWeather.list[8].main.humidity}</p>                  
                    </section>
                    <section class="five-day-child-container">
                        <h3>${dayjs(fiveDayWeather.list[16].dt_txt).format('MMM. D, YYYY')}</h3>
                        <p class="emoji">${parseWeatherEmoji(fiveDayWeather.list[16].weather[0].icon)}</p>
                        <p><b>Temp:</b> ${fiveDayWeather.list[16].main.temp}</p>
                        <p><b>Wind:</b> ${fiveDayWeather.list[16].wind.speed} mph</p>
                        <p><b>Humidity:</b> ${fiveDayWeather.list[16].main.humidity}</p>                  
                    </section>
                    <section class="five-day-child-container">
                        <h3>${dayjs(fiveDayWeather.list[24].dt_txt).format('MMM. D, YYYY')}</h3>
                        <p class="emoji">${parseWeatherEmoji(fiveDayWeather.list[24].weather[0].icon)}</p>
                        <p><b>Temp:</b> ${fiveDayWeather.list[24].main.temp}</p>
                        <p><b>Wind:</b> ${fiveDayWeather.list[24].wind.speed} mph</p>
                        <p><b>Humidity:</b> ${fiveDayWeather.list[24].main.humidity}</p>                 
                    </section>
                    <section class="five-day-child-container">
                        <h3>${dayjs(fiveDayWeather.list[32].dt_txt).format('MMM. D, YYYY')}</h3>
                        <p class="emoji">${parseWeatherEmoji(fiveDayWeather.list[32].weather[0].icon)}</p>
                        <p><b>Temp:</b> ${fiveDayWeather.list[32].main.temp}</p>
                        <p><b>Wind:</b> ${fiveDayWeather.list[32].wind.speed} mph</p>
                        <p><b>Humidity:</b> ${fiveDayWeather.list[32].main.humidity}</p>                    
                    </section>`
                    }
                })
        })
}

// Function that parses weather icons into emojis

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