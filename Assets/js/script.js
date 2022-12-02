// API stuff

const apiKey = '7e04a867561611c9d92b2e344ce5ac39';
const submitBtn = document.getElementById('submit')
let currentSection = document.getElementById('current-section');
const searchText = document.getElementById('search-text');

submitBtn.addEventListener('click', getWeather)

function getWeather() {
    var cityName = searchText.value
    displayWeather(cityName);
}

function displayWeather(cityName) {
    let dateJS = dayjs().format('M/D/YYY')
    const apiURL = "http://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + apiKey + "&units=imperial";
    fetch(apiURL)
        .then(function (response) {
            return response.json()
        })
        .then(function (currentWeather) {
            console.log(currentWeather)
            const iconURL = `http://api.openweathermap.org/img/w/${currentWeather.weather[0].icon}`
            currentSection.innerHTML=`<h2><span id="current-city">${currentWeather.name}</span>, <span id="current-date">${dayjs(currentWeather.dt_txt).unix()}</span> <span id="current-emoji">${`<"iconURL">`}.png</span></h2>
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

