const axios = require('axios');

// Obtiene la latitud y longitud de una dirección enviada por consola, usando la api de geolocalización de Google Maps
const getLugarLatLng = async (direccion) => {

    let encodeURL = encodeURI(direccion);

    // Especificar api key
    let resp = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${ encodeURL }&key=YOUR-API-KEY`)
    
    if(resp.data.status === 'ZERO_RESULTS') {
        throw new Error(`No hay resultados para la ciudad ${ direccion }`);
    }
    
    let location = resp.data.results[0];

    let coors = location.geometry.location;
    
    return {
        direccion: location.formatted_address,
        latitud: coors.lat,
        longitud: coors.lng
    }
}

module.exports = {
    getLugarLatLng
}
