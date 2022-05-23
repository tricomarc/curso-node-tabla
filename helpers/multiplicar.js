const fs = require ('fs');
const colors = require('colors');
const crearArchivo = async (numero = 5, listar = false, hasta) => {

    try {
        
        
        let salida, consola = '';

        for(let i = 1; i <= hasta; i++){
            salida += `${numero} x ${i} = ${numero * i}\n`;
            consola += `${numero} ${ 'x'.green } ${i} ${' = '.green} ${numero * i}\n`;
        }
        if( listar ){
            console.log('===================='.green);
            console.log('   Tabla del: '.green , colors.blue(numero))
            console.log('===================='.green);
            console.log(consola);
        }
        
        fs.writeFileSync(`./salida/tabla-${numero}.txt`, salida);

        return (`tabla-${numero}.txt`);

    } catch (err) {
        throw err;
    }

}

module.exports = {crearArchivo};