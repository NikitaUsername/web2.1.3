const { getWeather } = require('../js/weatherGetter');

beforeEach(() => {
    fetch.resetMocks();

});


describe('Get weather function', () => {
    test('Should return correct weather object for correct cityName with "isOk" equal to true',
        async () => {
            fetch.mockResponseOnce(JSON.stringify(
                {
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
                }
            ));

            const expectedResult = {
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

            };

            expect(await getWeather('cityName')).toStrictEqual(expectedResult);
        });
});

describe('Get weather function', () => {
    test('Should return correct error object for incorrect cityName with "isOk" equal to false',
        async () => {
            fetch.mockResponseOnce(
                JSON.stringify(
                    {
                        "cod": "404",
                        "message": "city not found"
                    }
                ));   

            const expectedResult = {
                "cod": "404",
                "message": "city not found"
            };

            expect(await getWeather('badCityName')).toStrictEqual(expectedResult);
        });
});