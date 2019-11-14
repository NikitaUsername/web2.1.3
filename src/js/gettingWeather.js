import axios from 'axios'
export async function getWeather(cityName) {
	return axios.get('http://api.openweathermap.org/data/2.5/weather?', {
		params:{
			q: cityName,
			units: 'metric',
			APPID: '1db91134dffc102e728e7a3d0ad5eb23'
		}
    });
};

