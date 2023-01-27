// Repaso del REQUIRE, EXPORT and IMPORT en NodeJS.

const { crearArchivo } = require("./helpers/multiplicar");
const argv  = require("./config/yargs");
const colors = require( 'colors' );

console.log( process.argv );

console.log( argv );

crearArchivo( argv.base, argv.listar, argv.hasta )
    .then( crearArchivo => console.log( crearArchivo.green, 'creado' ) )
    .catch( err => console.log(err) )