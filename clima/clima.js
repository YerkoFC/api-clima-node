const axios = require('axios');

// Obtiene la temperatura de una ciudad, la cual se especifica mediante su latitud y longitud, usando la api de OpenWeatherMap
const getClima = async (lat, lng) => {
    // Especificar api key
    let resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng }&units=metric&appid=YOUR-API-KEY`);
    return resp.data.main.temp;
}

module.exports = {
    getClima
}