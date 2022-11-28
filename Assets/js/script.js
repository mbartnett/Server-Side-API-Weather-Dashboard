// Variable stores the API key

const apiKey = '7e04a867561611c9d92b2e344ce5ac39';

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

var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + apiKey;

// Fetch 

fetch(queryURL)