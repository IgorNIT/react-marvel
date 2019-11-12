import CryptoJS from 'crypto-js';
import moment from 'moment';

const config = {
    'itemsToShow' : [25, 50, 75, 100],
    'endpoint' : {
        'characters' : '',
        'comic' : ''
    }
};


class MarvelApi {

    static GenerateApiData() {
        const config = {
            baseUrl   : 'https://gateway.marvel.com/v1/public/',
            publicKey : 'a95ee78b694617f7b462f0cc1e922b98',
            privateKey: 'c38948bb262f5a6615781b02b6b57fa3fb0e7139'
        };

        const timeStamp = moment().unix();
        const hash = CryptoJS.MD5(timeStamp + config.privateKey + config.publicKey).toString(CryptoJS.enc.Hex);

        return {
            baseUrl : config.baseUrl,
            apiKey  : `?apikey=${config.publicKey}&ts=${timeStamp}&hash=${hash}`
        };

    }
}

export default MarvelApi;