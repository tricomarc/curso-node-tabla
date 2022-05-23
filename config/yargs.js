const argv = require('yargs')
                .option('n',{
                    alias: 'numero',
                    type: 'number',
                    demandOption: true,
                    describe: 'Número que se requiere multiplicar'
                })
                .option('l', {
                    alias: 'listar',
                    type: 'boolean',
                    demandOption: true,
                    default: false,
                    describe: 'Muestra los valores que se copiaran al archivo'

                })
                .option('h', {
                    alias: 'hasta',
                    type: 'number',
                    demandOption: true,
                    describe: 'Hasta que numero se efectuara la multiplicación'
                })
                .check( (argv, options) => {
                    //console.log('yargs', argv)
                    if( isNaN(argv.n)){
                        throw 'El valor ingresado no es un numero'
                    }
                    if(isNaN(argv.h)){
                        throw 'El valor limite no es un numero'
                    }
                    return true;
                })
                .argv;

module.exports = argv;