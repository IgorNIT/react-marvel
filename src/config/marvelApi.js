import CryptoJS from 'crypto-js'
import moment from 'moment'

class MarvelAPI {

    static getCharacters() {

        const config = {
            publicKey: 'a95ee78b694617f7b462f0cc1e922b98',
            privateKey: 'c38948bb262f5a6615781b02b6b57fa3fb0e7139',
            baseUrl: `${window.location.protocol || 'https'}//gateway.marvel.com`
        }
 
        const URI = '/v1/public/characters';
        const timeStamp = moment().unix();
        const hash = CryptoJS.MD5(timeStamp + config.privateKey + config.publicKey).toString(CryptoJS.enc.Hex);
    
        let params = `?apikey=${config.publicKey}&ts=${timeStamp}&hash=${hash}`;
       
        return `${config.baseUrl}${URI}${params}`;
    }
}

export default MarvelAPI;