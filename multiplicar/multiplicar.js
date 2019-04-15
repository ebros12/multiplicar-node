// requiereds
const fs = require('fs');
const colors = require('colors');
let listarTabla = (base, limite = 10) => {
    console.log('|ººººººººººººººººººººººººººººººº|'.green);
    console.log('|ººººººººººººººººººººººººººººººº|'.yellow);
    console.log(`|ººººººTabla de ${base}ººººººººª|`.red);
    console.log('|ººººººººººººººººººººººººººººººº|'.green);
    console.log('|ººººººººººººººººººººººººººººººº|'.yellow);
    console.log('|ººººººººººººººººººººººººººººººº|'.red);
    let resultado = ''
    for (let index = 1; index <= limite; index++) {
        console.log(`${base} * ${index} = ${base*index}\n`.yellow);
    }
}

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`El valor introducido ${base} no es un numero`);
            return;
        }
        let data = ''
        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base*i}\n`.white;
        }

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err) reject(err);
            else
                resolve(`tabla-${base}.txt`)

        });
    })
}

module.exports = {
    crearArchivo,
    listarTabla
}