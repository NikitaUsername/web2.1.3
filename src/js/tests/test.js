import assert from 'assert'
import { getWeather } from '../gettingWeather'

describe('gettingWeather', () => {
    it('Should resolve', (done) => {
        getWeather('Miami')
            .then( data => {
                assert.equal(data.data.name, 'Miami');
                done();
            })
            .catch(error => done(error))
    });

    it('Should not find', (done) => {
        getWeather('Miam')
            .then(data => done(data))
            .catch(error => {
                assert.equal(error.message, 'Request failed with status code 404');
                done();  
            });
    });
}); 