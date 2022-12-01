// API stuff

const apiKey = '7e04a867561611c9d92b2e344ce5ac39';
const apiURL = '"http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + apiKey;'
fetch(apiURL)

// Elements by ID

const searchText = document.getElementById('search-text');

const currentDate = document.getElementById('current-date');
const currentCity = document.getElementById('current-city');
const currentEmoji = document.getElementById('current-emoji');
const currentTemp = document.getElementById('current-temp');
const currentWind = document.getElementById('current-wind');
const currentHumidity = document.getElementById('current-humidity');

// Object captures all location data

let locationData = {
    city: '',
    state: '',
    country: '',
    coordinates: ''
};

// Stores user input

let userSubmittedInfo;

// Generates a URL including the user submitted info and the API key

var queryURL = 

// Fetch 

fetch(queryURL)

/*

function searchApi(city) {
    console.log(apiKey);
    var url = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${apiKey}`;
    fetch(url).then(function(response){
        console.log(response);
        return response.json();
    }).then(function(data){
        console.log(data);
        getWeather(data[0].lat, data[0].lon);
        getForecast(data[0].lat, data[0].lon);
    })
}

function getWeather(lat, lon) {
    var url =`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&appid=${apiKey}`;
    fetch(url)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data);
        
        var cityName = data.name;
        var cityNameEl = document.createElement("p");
        cityNameEl.textContent = cityName;
        
        var currentDate = new Date(data.dt * 1000).toLocaleDateString("en-US");
        var currentDateEl = document.createElement("p");
        currentDateEl.textContent = currentDate;

        var icon = data.weather[0].icon;
        var iconEl = document.createElement("img");
        iconEl.setAttribute("src", "https://www.openweathermap.org/img/wn/" + icon + ".png");

        var temperature = data.main.temp;
        var tempEl = document.createElement("p");
        tempEl.textContent = "Temperature: " + temperature + "°F";

        var humidity = data.main.humidity;
        var humidityEl = document.createElement("p");
        humidityEl.textContent = "Humidity: " + humidity + "%";

        var windSpeed = data.wind.speed;
        var windSpeedEl = document.createElement("p");
        windSpeedEl.textContent = "Wind Speed: " + windSpeed + " mph";
     
        document.querySelector("#current-weather").append(cityNameEl, currentDateEl, iconEl, tempEl, humidityEl, windSpeedEl);
        

    })
}

function getForecast(lat, lon) {
    var url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=imperial&appid=${apiKey}`;
    fetch(url).then(function(respone){
        console.log(respone);
        return respone.json();
    })
}

*/