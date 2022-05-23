//const { argv } = require('process');
const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs');
const colors = require('colors');

console.clear();
//console.log(process.argv);
// console.log(argv);
//console.log('base: yargs', argv.n);
//const numero = 10;

// console.log(numero);

 crearArchivo( argv.n , argv.l, argv.h)
     .then( nombreArchivo => console.log(nombreArchivo.rainbow, 'creado') )
     .catch(err => console.log(err));

 