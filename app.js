const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

// Obtiene toda la info relacionada a la direccion enviada por consola
let getInfo = async () => {
    //Se coloca el codigo de la funcion dentro de un try catch para manejar los posibles errores
    try {
        let coors = await lugar.getLugarLatLng(argv.direccion);
        let temp = await clima.getClima(coors.latitud, coors.longitud);

        return `El clima en ${ coors.direccion } es de ${ temp }`;
    } catch (e) {
        console.log(`No se pudo determinar el clima en ${ argv.direccion }`);
    }
}

// Muestra por consola la temperatura de la direccion enviada por consola
getInfo()
    .then( resp =>console.log(resp))
    .catch( e => console.log(e))

