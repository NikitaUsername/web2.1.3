import { getWeather } from './gettingWeather.js';

const submitForm = (event) => {
	event.preventDefault();

	showWeather(event.target[0].value);
};

const showWeather = (cityName)=>{
	if (cityName.length < 1) {
		alert("Enter city name!!!");
	}
	else {
	getWeather(cityName)
	.then( data => writeWeather(data.data))
	.catch(err => writeError(err.message));
	}
};



function getEl(id) {
	return document.getElementById(id);
};

function writeWeather(information) {
	removeData();
	information.weather[0].icon = "src=http://openweathermap.org/img/wn/" + information.weather[0].icon + "@2x.png";
	var info = nunjucks.render('weather.njk', { information });
	getEl('head').insertAdjacentHTML("afterbegin", info);
};

function writeError(information){
	removeData();
	var info = nunjucks.render('error.njk', { information });
	getEl('head').insertAdjacentHTML("afterbegin", info);
};

function removeData(){
	if (getEl("DATA") !== null){
		getEl("DATA").remove();
	};
	if (getEl("errorMsg") !== null){
		getEl("errorMsg").remove();
	};
};

$(document).ready( () => {
	document.getElementById('city_form').addEventListener('submit', submitForm);
	
});