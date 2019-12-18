getWeather = jest.fn(cityName => {
    if (cityName === 'сityName') {
        return Promise.resolve({
            "coord": {
                "lon": -97.42,
                "lat": 35.59
            },
            "weather": [
                {
                    "id": 701,
                    "main": "Mist",
                    "description": "mist",
                    "icon": "50n"
                }
            ],
            "base": "stations",
            "main": {
                "temp": 287.06,
                "pressure": 1022,
                "humidity": 100,
                "temp_min": 286.15,
                "temp_max": 288.15
            },
            "visibility": 14484,
            "wind": {
                "speed": 3.6,
                "deg": 210
            },
            "clouds": {
                "all": 90
            },
            "dt": 1573039688,
            "sys": {
                "type": 1,
                "id": 6021,
                "country": "US",
                "sunrise": 1573044975,
                "sunset": 1573083021
            },
            "timezone": -21600,
            "id": 4544356,
            "name": "Miami",
            "cod": 200
        });
    } else {
        return Promise.resolve({
            isOk: false,
            error: {
                status: "404",
                message: "city not found"
            }
        });
    }
});

exports.getWeather = getWeather;