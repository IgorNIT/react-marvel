import CryptoJS from 'crypto-js'
import moment from 'moment'
//import config  from 'config'

class MarvelAPI {

     

    static getCharacters(origOptions = {}) {

        const config = {
            publicKey: 'a95ee78b694617f7b462f0cc1e922b98',
            privateKey: 'c38948bb262f5a6615781b02b6b57fa3fb0e7139',
            baseUrl: `${window.location.protocol || 'https'}//gateway.marvel.com`,
        }



        //const defaultOptions = { page: 0, count: 20, name: '', nameStartsWith: '' }
        //const options = Object.assign(defaultOptions, origOptions)
    
        const URI = '/v1/public/characters'
        const timeStamp = moment().unix()
        const hash = CryptoJS.MD5(timeStamp + config.privateKey + config.publicKey)
            .toString(CryptoJS.enc.Hex)


    
        //const currentOffset = options.page === 1 ? 0 : (options.count * (options.page - 1))
    
        let params = `?apikey=${config.publicKey}&ts=${timeStamp}&hash=${hash}`
    
        // if (options.name) {
        //     params = params.concat(`&name=${options.name}`)
        // }
        // if (options.nameStartsWith) {
        //     params = params.concat(`&nameStartsWith=${options.nameStartsWith}`)
        // }
        return `${config.baseUrl}${URI}${params}`;        
    }  

}
  
export default MarvelAPI