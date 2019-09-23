const fs = require('fs');

let listartabla = (base, limite = 10) => {
    for (let i = 1; i <=limite; i++){
        console.log(`${base} * ${i} = ${base * i}`)
    }
}

let creararchivo = (base) => {
    return new Promise ((resolve, reject) =>{
    //let base = 5;
    let datos = '';
    
    
    for(let i = 1; i<=10; i++){
        datos +=   `${base} * ${i} = ${base * i}\n`;
    }

        fs.writeFile(`Tabla del ${base}.txt`, datos ,(error) => {
            if (error){
                reject(error);
            }else{
                resolve(`Tabla del -${base}`);
            } 
            
            console.log('El archivo ha sido creado con exito');
        });
    });
    }

    module.exports = {
        creararchivo,
        listartabla
    }