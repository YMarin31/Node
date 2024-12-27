const { crearArchivo } = require('./helpers/multiplicar.js');
const argv = require('./config/yargs.js');

console.clear();
crearArchivo(argv.b, argv.l)
    .then(nombreArchivo => console.log(nombreArchivo, 'creado'))
    .catch(err => console.log(err));