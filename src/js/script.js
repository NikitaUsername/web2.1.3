function getWeather(button){
	var cityName = document.getElementById('inp').value;
	if (cityName.length<1){
		alert("Enter city name!!!");
	}
	else{
		$.ajax({
			url: "http://api.openweathermap.org/data/2.5/weather",
			data:	{ "q" : cityName, "APPID" : "1db91134dffc102e728e7a3d0ad5eb23"}
		},)
		.done(
			function(data){
				console.log(data);
				writeWeather(data);
			}
		)
	}
}

function getEl(id){
	return document.getElementById(id);
}

function writeWeather(information){
//alert(information.main.temp);
getEl('city').innerText = "City:";
getEl('city1').innerText =information.name;
getEl('temp').innerText = "Temperature:";
getEl('temp1').innerText =information.main.temp;
getEl('weath').innerText = "Weather:";
getEl('weath1').innerText = information.weather[0].description;
getEl('press').innerText = "Pressure:";
getEl('press1').innerText = information.main.pressure;
getEl('wind').innerText = "Wind speed:";
getEl('wind1').innerText = information.wind.speed;
getEl('clouds').innerText = "Clouds:";
getEl('clouds1').innerText = information.clouds.all;
getEl('weatherPic').src = "http://openweathermap.org/img/wn/" + information.weather[0].icon + "@2x.png";

}


