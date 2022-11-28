// Variable stores the API key

const apiKey = '7e04a867561611c9d92b2e344ce5ac39';

//Object captures all location data

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