jest.mock('../js/weatherGetter.js');

const { getWeather } = require('../js/weatherGetter');
const { bodyHTML } = require('../setupJest');
const { writeWeather } = require('../js/script');



beforeEach(() => {
    document.body.innerHTML = bodyHTML;

});

describe('renderResult function', () => {
    test('should render error', () => {
        console.log(document.body.innerHTML);
        const result = {
            cod: "404",
            message: "city not found"
        };

        writeWeather(result);

        const expectedResult =
            '<div id="error">An error was occured: city not found</div>' +
            '<div id="city"></div>' +
            '<div id="temp"></div>' +
            '<div id="weath"></div>' +
            '<div id="press"></div>' +
            '<div id="wind"></div>' +
            '<div id="clouds"></div>';

        expect(document.getElementById('info').innerHTML)
            .toEqual(expectedResult);
    });

    test('should render error', () => {
        console.log(document.body.innerHTML);
        const result = {
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

        writeWeather(result);

        const expectedResult =
        '<div id="error"></div>'+
       '<div id="city">City: Miami</div>'+
        '<div id="temp">Temperature: 287.06</div>'+
        '<div id="weath">Weather: mist</div>'+
        '<div id="press">Pressure: 1022</div>'+
        '<div id="wind">Wind: 3.6</div>'+
        '<div id="clouds">Clouds: 90</div>';
        expect(document.getElementById('info').innerHTML)
            .toEqual(expectedResult);
    });

});