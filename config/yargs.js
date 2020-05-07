const options = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    },
}
module.exports.argv = require('yargs')
    .command('listar', 'Imprime la consola de la tabla de multiplicar', options)
    .command('crear', 'Genera un archivo con la  tabla de multiplicar', options)
    .help()
    .argv;

// module.exports = {
//     argv
// }
