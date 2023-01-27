const argv = require( 'yargs' )
                        .option('b',{
                            alias: 'base',
                            type: 'number',
                            demandOption: true,
                            describe: 'Es el numero base de la tabla de multiplicar '
                        
                        })
                        .option('l',{
                            alias: 'listar',
                            type: 'boolean',
                            demandOption: true,
                            default: false,
                            describe: 'Dibuja la tabla de multiplicar'
                        })
                        .option('h',{
                            alias: 'hasta',
                            type: 'number',
                            demandOption: true,
                            default: 10,
                            describe: 'Controla la cantidade del multiplicador'
                        })
                        .check( (argv, options) => {
                            if ( isNaN (argv.b) ) {
                                throw 'La base tiene que ser un numero';
                            }
                            return true;
                        })
                        .argv;

module.exports = argv;