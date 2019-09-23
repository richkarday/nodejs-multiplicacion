const { creararchivo, listartabla} = require('./Multiplicar/mutliplicacion');
const argumentos = require('yargs')
    .command('Listar', 'Imprimir en consola la tabla de multiplicar',{
        base: {
            demand: true,
            alias: 'b'
        },
        limite: {
            alias: 'l',
            default: 10
        }
    })

    .command('Crear', 'Crear tabla de multiplicar',{
        base: {
            demand: true,
            alias: 'B'
        }
    })
    
    .help()
    .argv

    

let base = 7;
let comando = argumentos._[0];

switch(comando){
    case 'Listar':
        listartabla(argumentos.base, argumentos.limite);
        
    break;

    case 'Crear':
        creararchivo(argumentos.base) 
        
    break;

    default:
        console.log('Comando no reconocido');
}

// switch(comando){
//     case 'Crear':
//         creararchivo();
//     break;
    
//     default:
//         console.log('Comando no reconodido');
// }

// creararchivo (base)
// .then(respuesta => console.log(`Archivo creado: ${respuesta}`))
// .catch(error => console.log(error));


