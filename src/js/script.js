const { getWeather } = require('./weatherGetter');
Handlebars = require('handlebars');
const source = document.getElementById('template').innerHTML;

const template = Handlebars.compile(source);

const submitForm = (event) => {
	event.preventDefault();

	const cityName = event.target[0].value;
	if (cityName.length < 1) {
		alert("Enter city name!!!");
	}
	else {
		getWeather(cityName)
			.then(function (data) {
				writeWeather(data);

			});
	}
};

function writeWeather(information) {


	let container;
	if (information.weather) {
		
		container = template({
			city: 'City: ' + information.name,
			temp: 'Temperature: ' + information.main.temp,
			desc: 'Weather: ' + information.weather[0].description,
			press: 'Pressure: ' + information.main.pressure,
			wind: 'Wind: ' + information.wind.speed,
			clouds: 'Clouds: ' + information.clouds.all
		});
	} else {
		container = template({
			error: 'An error was occured: ' + information.message
		})
	}
	document.getElementById('data').innerHTML = container;
};

exports.writeWeather = writeWeather;

window.onload = function () {
document.getElementById('city_form').addEventListener('submit', submitForm);
};