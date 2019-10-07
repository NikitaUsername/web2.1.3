$(document).keypress(function (e) {
	if (e.which == 13) {
		getWeather();
	}
});

function getWeather(button) {
	var cityName = document.getElementById('inp').value;
	if (cityName.length < 1) {
		alert("Enter city name!!!");
	}
	else {
		$.ajax({
			url: "http://api.openweathermap.org/data/2.5/weather",
			data: { "q": cityName, "units": "metric", "APPID": "1db91134dffc102e728e7a3d0ad5eb23" },
			error: function (data, status) {
				if (getEl("DATA") !== null){
					getEl("DATA").remove();
				};
				getEl('errorMsg').innerText = "Something went wrong! Error:  " + data.status;
			}
		})
			.done(
				function (data) {
					//console.log(data);
					writeWeather(data);
				}
			)
	}
};

function getEl(id) {
	return document.getElementById(id);
};

function writeWeather(information) {
	getEl("errorMsg").innerText = "";
	if (getEl("DATA") !== null){
		getEl("DATA").remove();
	};
	information.weather[0].icon = "src=http://openweathermap.org/img/wn/" + information.weather[0].icon + "@2x.png";
	var info = nunjucks.render('weather.njk', { information });
	getEl('head').insertAdjacentHTML("afterbegin", info);
};

function clearFields() {
	getEl('city').innerText = " ";
	getEl('city1').innerText = " ";
	getEl('temp').innerText = " ";
	getEl('temp1').innerText = " ";
	getEl('weath').innerText = " ";
	getEl('weath1').innerText = " ";
	getEl('press').innerText = " ";
	getEl('press1').innerText = " ";
	getEl('wind').innerText = " ";
	getEl('wind1').innerText = " ";
	getEl('clouds').innerText = " ";
	getEl('clouds1').innerText = "";
	getEl('weatherPic').src = "";
};