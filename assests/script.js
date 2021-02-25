//Script
var apiKey = '385c0b950097c66bff864ee7edcaf22f'
var city = 'brevard';
// var state = 'nc'
var unit = 'imperial';
var cityUrl = 'https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey + '&units=' + unit;
var forcastUrl = 'https://api.openweathermap.org/data/2.5/forecast?q=' + city + '&appid=' + apiKey + '&units=' + unit;

function start() {
    fetch(cityUrl)
    .then(function (r) {
        return r.json();
    })
    .then(function (data) {
        console.log(data);
        weather = document.querySelector('#weather');
        weather.textContent = "Today " + parseInt(data.main.temp);
    })};


function test() {
    fetch(forcastUrl)
    .then(function(r) {
        return r.json();
    })
    .then(function (data) {
        //console.log(data.list[1].weather);
        console.log(data);
        weather1 = document.querySelector('#tomorrow');
        weather1.textContent = "Tomorrow 9 A.M. " + parseInt(data.list[1].main.temp);
        weather2 = document.querySelector('#nextDay');
        weather2.textContent = "2 Day 9 A.M. " + parseInt(data.list[9].main.temp);
        weather3 = document.querySelector('#followingDay');
        weather3.textContent = "3 Day 9 A.M. " + parseInt(data.list[17].main.temp);
        
    })
}

test();