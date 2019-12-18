jest.mock('../js/weatherGetter.js');

const { getWeather } = require('../js/weatherGetter');
const { bodyHTML } = require('../setupJest');
const { writeWeather } = require('../js/script');



beforeEach(() => {
    document.body.innerHTML = bodyHTML;

});
console.log(document.body.innerHTML);
describe('renderResult function', () => {
    test('should render error', () => {
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

});