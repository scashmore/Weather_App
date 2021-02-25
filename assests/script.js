//Script
// var apiKey = '385c0b950097c66bff864ee7edcaf22f'
// var city = 'brevard';
// // var state = 'nc'
// var unit = 'imperial';
// var cityUrl = 'https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey + '&units=' + unit;
//var forcastUrl = 'https://api.openweathermap.org/data/2.5/forecast?q=' + city + '&appid=' + apiKey + '&units=' + unit;



function weatherApp() {
    var apiKey = '385c0b950097c66bff864ee7edcaf22f'
    var city = 'brevard';
    // var state = 'nc'
    var unit = 'imperial';
    var cityUrl = 'https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey + '&units=' + unit;
    var forcastUrl = 'https://api.openweathermap.org/data/2.5/forecast?q=' + city + '&appid=' + apiKey + '&units=' + unit;
    fetch(cityUrl)
        .then(function (r) {
            return r.json();
        })
        .then(function (data) {
            //console.log(data);
            weather = document.querySelector('#weather');
            weather.textContent = "Today's Current Tempature: " + parseInt(data.main.temp);
            var lat = parseInt(data.coord.lat);
            var lon = parseInt(data.coord.lon);
            var UV = 'http://api.openweathermap.org/data/2.5/uvi/forecast?lat=' + lat + '&lon=' + lon + '&appid=' + apiKey;
            fetch(UV)
                .then(function (ur) {
                    return ur.json();
                })
                .then(function (data) {
                    //console.log(data.list[0].uvi);
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
            weather19.textContent = "9 A.M. : " + parseInt(data.list[1].main.temp);
            weather112 = document.querySelector('#tomorrow12Pm');
            weather112.textContent = "12 P.M. : " + parseInt(data.list[2].main.temp);
            weather16 = document.querySelector('#tomorrow6Pm');
            weather16.textContent = "6 P.M. : " + parseInt(data.list[4].main.temp);
            weather2 = document.querySelector('#nextDay9Am');
            weather2.textContent = "9 A.M. : " + parseInt(data.list[9].main.temp);
            weather212 = document.querySelector('#nextDay12Pm');
            weather212.textContent = "12 P.M. : " + parseInt(data.list[10].main.temp);
            weather26 = document.querySelector('#nextDay6Pm');
            weather26.textContent = "6 P.M. : " + parseInt(data.list[12].main.temp);
            weather3 = document.querySelector('#followingDay9Am');
            weather3.textContent = "9 A.M. : " + parseInt(data.list[17].main.temp);
            weather312 = document.querySelector('#followingDay12Pm');
            weather312.textContent = "12 P.M. : " + parseInt(data.list[18].main.temp);
            weather36 = document.querySelector('#followingDay6Pm');
            weather36.textContent = "6 P.M. : " + parseInt(data.list[20].main.temp);

        })
};
weatherApp();
