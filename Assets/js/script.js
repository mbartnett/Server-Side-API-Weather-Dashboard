// API stuff

const apiKey = '7e04a867561611c9d92b2e344ce5ac39';
const submitBtn = document.getElementById('submit')
let currentSection = document.getElementById('current-section');
let fiveDaySection = document.getElementById('five-day-section');
const searchText = document.getElementById('search-text');
submitBtn.addEventListener('click', getWeather)

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
            currentSection.innerHTML = `<h2><span id="current-city">${currentWeather.name}</span>, <span id="current-date">${(currentWeather.dt)}</span> <img style="display:inline-block;" src="${iconURL}" /></h2>
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
                        fiveDaySection.innerHTML = 
                    `<section class="five-day-child-container">
                        <h3>${fiveDayWeather[0].dt}</h3>
                        <p></p>
                        <p>Temp:</p>
                        <p>Wind:</p>
                        <p>Humidity:</p>            
                        </section>
                    <section class="five-day-child-container">
                        <h3>DATE</h3>
                        <p>EMOJI</p>
                        <p>Temp:</p>
                        <p>Wind:</p>
                        <p>Humidity:</p>                   
                    </section>`
                    }
                })
        })
}

