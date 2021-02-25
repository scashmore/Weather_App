//Script
var form = document.querySelector('#submit');
var city = document.querySelector('#userCity');

form.addEventListener('submit', function (event) {
    event.preventDefault();
    console.log(city.value);

    var cityUrl = 'https://api.openweathermap.org/data/2.5/weather?q=' + city.value + '&appid=' + apiKey + '&units=' + unit;
    var forcastUrl = 'https://api.openweathermap.org/data/2.5/forecast?q=' + city.value + '&appid=' + apiKey + '&units=' + unit;
    fetch(cityUrl)
        .then(function (r) {
            return r.json();
        })
        .then(function (data) {
            //console.log(data);
            weather = document.querySelector('#weather');
            weather.textContent = "Today's Current Tempature: " + parseInt(data.main.temp) + "°F";
            var lat = parseInt(data.coord.lat);
            var lon = parseInt(data.coord.lon);
            var UV = 'http://api.openweathermap.org/data/2.5/uvi/forecast?lat=' + lat + '&lon=' + lon + '&appid=' + apiKey;
            fetch(UV)
                .then(function (ur) {
                    return ur.json();
                })
                .then(function (data) {
                    console.log(data.list[0].uvi);
                    uvi = document.querySelector('#uvi');
                    uvi.textContent = "UV Index: " + parseInt(data.list[0].uvi);
                })
        })
    fetch(forcastUrl)
        .then(function (r) {
            return r.json();
        })
        .then(function (data) {
            //console.log(data.list[1].weather);
            console.log(data);
            weather19 = document.querySelector('#tomorrow9Am');
            weather19.textContent = "9 A.M. : " + parseInt(data.list[1].main.temp) + "°F";
            weather112 = document.querySelector('#tomorrow12Pm');
            weather112.textContent = "12 P.M. : " + parseInt(data.list[2].main.temp) + "°F";
            weather16 = document.querySelector('#tomorrow6Pm');
            weather16.textContent = "6 P.M. : " + parseInt(data.list[4].main.temp) + "°F";
            weather2 = document.querySelector('#nextDay9Am');
            weather2.textContent = "9 A.M. : " + parseInt(data.list[9].main.temp) + "°F";
            weather212 = document.querySelector('#nextDay12Pm');
            weather212.textContent = "12 P.M. : " + parseInt(data.list[10].main.temp) + "°F";
            weather26 = document.querySelector('#nextDay6Pm');
            weather26.textContent = "6 P.M. : " + parseInt(data.list[12].main.temp) + "°F";
            weather3 = document.querySelector('#followingDay9Am');
            weather3.textContent = "9 A.M. : " + parseInt(data.list[17].main.temp) + "°F";
            weather312 = document.querySelector('#followingDay12Pm');
            weather312.textContent = "12 P.M. : " + parseInt(data.list[18].main.temp) + "°F";
            weather36 = document.querySelector('#followingDay6Pm');
            weather36.textContent = "6 P.M. : " + parseInt(data.list[20].main.temp) + "°F";
            weather4 = document.querySelector('#followingNextDay9Am');
            weather4.textContent = "9 A.M. : " + parseInt(data.list[25].main.temp) + "°F";
            weather412 = document.querySelector('#followingNextDay12Pm');
            weather412.textContent = "12 P.M. : " + parseInt(data.list[26].main.temp) + "°F";
            weather46 = document.querySelector('#followingNextDay6Pm');
            weather46.textContent = "6 P.M. : " + parseInt(data.list[28].main.temp) + "°F";
            weather5 = document.querySelector('#NextFollowingDay9Am');
            weather5.textContent = "9 A.M. : " + parseInt(data.list[33].main.temp) + "°F";
            weather512 = document.querySelector('#NextFollowingDay12Pm');
            weather512.textContent = "12 P.M. : " + parseInt(data.list[34].main.temp) + "°F";
            weather56 = document.querySelector('#NextFollowingDay6Pm');
            weather56.textContent = "6 P.M. : " + parseInt(data.list[36].main.temp) + "°F";
            

        })
})
