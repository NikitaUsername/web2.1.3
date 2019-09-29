function getWeather(button){
	$.get(
		"http://api.openweathermap.org/data/2.5/weather",
		{
			"q" : "Miami",
			"APPID" : "1db91134dffc102e728e7a3d0ad5eb23"
		},
		function(data){
			console.log(data);
		}
	);
}
