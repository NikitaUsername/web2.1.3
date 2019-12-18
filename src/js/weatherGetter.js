getWeather = async (cityName ) =>{
    const weatherData = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=d5bb735f9e1ce1a846ab736fc9d95dc6`);
   //console.log (weatherData.json())
    return weatherData.json();
} 

exports.getWeather = getWeather;