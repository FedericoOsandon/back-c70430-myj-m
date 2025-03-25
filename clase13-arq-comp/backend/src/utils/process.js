// obj process creado al ejecutar un script de node
// console.log(process.cwd())
// console.log(process.pid)
// console.log(process.memoryUsage())
// console.log(process.version)

// Permite manejar argumento 

// ámbito empresarial
// distintos entornos -> desarrollo - QA - Production - Capacitación
// distintos entornos = distinas variables de entorno con distintos valores - BBDD - Config

// para manejar distintos entornos: process + .env + manejo de argumentos
// console.log(process.argv.slice(2)) // + librería(commander) es mas fácil 
// instalar commander npm i commander
const { Command } = require('commander')

const program = new Command()

program
    // .option('-p <port>', 'puerto de funcionamiento de mi servidor', 8080)
    // .option('-l, --letters [letters...]', 'resto')
    .option('--mode <mode>', 'modo de ejecución del entorno del server', 'production')
    .parse()

// console.log('options: ', program.opts())
// console.log('Resto de los argumento: ', program.args)
module.exports = {
    program
}
// console.log('1- iniciando el proceso')
// process.on('exit', code => {
//     console.log('2- esperando o escuchando hasta que ocurra un exit', code)
// })
// process.on('uncaughtException', exception => {
//     console.log('Escuchando errores no controlados', exception)
// })
// Console
// console.log('3- fin del proceso')

