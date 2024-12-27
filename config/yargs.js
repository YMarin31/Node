const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'base de la tabla de multiplicar'
    })
    .option('l', {
        alias: 'listar',
        type: 'boolean',
        default: true,
        describe: 'Listar el elemento'
    })
    .check((argv, option) => {
        if (isNaN(argv.b)) {
            throw 'La base iene que ser un número'
        }
        return true;
    })
    .argv;

module.exports = argv;