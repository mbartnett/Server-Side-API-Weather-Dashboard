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
            currentSection.innerHTML =
                `<h2><span id="current-city">${currentWeather.name}</span>, <span id="current-date">${dayjs.unix(currentWeather.dt).format('MMMM D, YYYY')}</span> <img style="display:inline-block;" src="${iconURL}" /></h2>
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
                        let fiveIconURL1 = `https://openweathermap.org/img/w/${fiveDayWeather.list[1].weather[0].icon}.png`;
                        let fiveIconURL2 = `https://openweathermap.org/img/w/${fiveDayWeather.list[2].weather[0].icon}.png`;
                        let fiveIconURL3 = `https://openweathermap.org/img/w/${fiveDayWeather.list[3].weather[0].icon}.png`;
                        let fiveIconURL4 = `https://openweathermap.org/img/w/${fiveDayWeather.list[4].weather[0].icon}.png`;
                        fiveDaySection.innerHTML =
                            `<section class="five-day-child-container">
                        <h3>${dayjs(fiveDayWeather.list[0].dt_txt).format('MMMM D, YYYY')}</h3>
                        <p><img style="display:inline-block;" src="${fiveIconURL0}" /></p>
                        <p>Temp: ${fiveDayWeather.list[0].main.temp}</p>
                        <p>Wind: ${fiveDayWeather.list[0].wind.speed} mph</p>
                        <p>Humidity: ${fiveDayWeather.list[0].main.humidity}</p>            
                        </section>
                    <section class="five-day-child-container">
                        <h3>${dayjs.unix(fiveDayWeather.list[1].dt).format('MMMM D, YYYY')}</h3>
                        <p><img style="display:inline-block;" src="${fiveIconURL1}" /></p>
                        <p>Temp: ${fiveDayWeather.list[1].main.temp}</p>
                        <p>Wind: ${fiveDayWeather.list[1].wind.speed} mph</p>
                        <p>Humidity: ${fiveDayWeather.list[1].main.humidity}</p>                  
                    </section>
                    <section class="five-day-child-container">
                        <h3>${dayjs(fiveDayWeather.list[2].dt_txt).format('MMMM D, YYYY')}</h3>
                        <p><img style="display:inline-block;" src="${fiveIconURL2}" /></p>
                        <p>Temp: ${fiveDayWeather.list[2].main.temp}</p>
                        <p>Wind: ${fiveDayWeather.list[2].wind.speed} mph</p>
                        <p>Humidity: ${fiveDayWeather.list[2].main.humidity}</p>                  
                    </section>
                    <section class="five-day-child-container">
                        <h3>${dayjs(fiveDayWeather.list[3].dt_txt).format('MMMM D, YYYY')}</h3>
                        <p><img style="display:inline-block;" src="${fiveIconURL3}" /></p>
                        <p>Temp: ${fiveDayWeather.list[3].main.temp}</p>
                        <p>Wind: ${fiveDayWeather.list[3].wind.speed} mph</p>
                        <p>Humidity: ${fiveDayWeather.list[3].main.humidity}</p>                 
                    </section>
                    <section class="five-day-child-container">
                        <h3>${dayjs(fiveDayWeather.list[4].dt_txt).format('MMMM D, YYYY')}</h3>
                        <p><img style="display:inline-block;" src="${fiveIconURL4}" /></p>
                        <p>Temp: ${fiveDayWeather.list[4].main.temp}</p>
                        <p>Wind: ${fiveDayWeather.list[4].wind.speed} mph</p>
                        <p>Humidity: ${fiveDayWeather.list[4].main.humidity}</p>                    
                    </section>`
                    }
                })
        })
}

