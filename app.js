// requiereds
const argv = require('./config/yargs').argv;
const colors = require('colors');
const { crearArchivo } = require('./multiplicar/multiplicar');
const { listarTabla } = require('./multiplicar/multiplicar');

let comando = argv._[0];


switch (comando) {
    case 'listar':
        let resultado = listarTabla(argv.base, argv.limite)
        console.log(resultado);
        break;
    case 'Crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${ archivo}`))
            .catch(e => console.log(e))
        console.log("Crear");
        break;
    default:
        console.log("El comando no es reconocido");
        break;
}


// let parametro = argv[2];
// let base = parametro.split('=')[1]