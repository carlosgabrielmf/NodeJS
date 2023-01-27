const { log } = require('console');
const fs = require( 'fs' );
const colors = require( 'colors' );



const crearArchivo = async ( base = 3, listar = false, hasta = 10 ) => {

    try {
    // Creamos una variable para guardar nuestra tabla de multiplicar.
        let salida = '';

    // Con FOR podemos crear la funcion de multiplicar de forma sencilla
        for (let i = 1; i <= hasta; i++) {
            salida += `${ base } x ${ i } = ${ base * i }\n`;
        }

    // Aqui procedemos a crear nuestro archivo para con el paquete que requerimos arriba.
    // lo haremos mediante funcion.
        if (listar) {
            console.log("===============".green);
            console.log('tabla del ', colors.green(base));
            console.log("===============".green);
            console.log(salida);
        }
    
        fs.writeFileSync( `./salida/tabla-del-${ base }.txt`, salida)

        return `tabla-del: ${ base }.txt creada`;
    } catch (err) {
        throw err;
    }

}

module.exports = {
    crearArchivo
}