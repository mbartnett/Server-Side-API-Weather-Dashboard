// API stuff

const apiKey = '7e04a867561611c9d92b2e344ce5ac39';

var submitBtn = document.getElementById('submit')

var currentSection = document.getElementById('current-section');

// Elements by ID

const searchText = document.getElementById('search-text');

// const currentDate = document.getElementById('current-date');
// const currentCity = document.getElementById('current-city');
// const currentEmoji = document.getElementById('current-emoji');
// const currentTemp = document.getElementById('current-temp');
// const currentWind = document.getElementById('current-wind');
// const currentHumidity = document.getElementById('current-humidity');

// Object captures all location data

let locationData = {
    city: '',
    state: '',
    country: '',
    coordinates: ''
};

submitBtn.addEventListener('click', getWeather)

function getWeather() {
    var cityName = searchText.value
    alert(cityName)
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
            currentSection.innerHTML=` <h2><span id="current-city">${currentWeather.name}</span>, <span id="current-date">${dayjs(currentWeather.dt).unix()}</span> <span id="current-emoji">EMOJI</span></h2>
            <h4>Temp: <span id="current-temp"></span></h4>
            <h4>Wind: <span id="current-wind"></span></h4>
            <h4>Humidity: <span id="current-humidity"></span></h4>`
            const fiveDayURL = `http://api.openweathermap.org/data/2.5/forecast?lat=${currentWeather.coord.lat}&lon=${currentWeather.coord.lon}&appid=${apiKey}&units=imperial`
            fetch(fiveDayURL)      
            .then(function (response){
                return response.json()
            })
            .then(function (fiveDayWeather){
                for (i = 2; i < fiveDayWeather.list.length; i = i+8){
                    console.log(fiveDayWeather.list[i])
                }
            })
        })
}

