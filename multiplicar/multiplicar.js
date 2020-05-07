const fs = require('fs');
const colors = require('colors');

module.exports.listarTabla = (base, limite) => {
    for (let i = 0; i <= limite; i++) {
        let resultado = base * i;
        console.log(`${base} * ${i} = ${resultado}\n`.green);
    }
}

module.exports.crearArchivo = (base,limite) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`El valor introducido ${base} no es un numero`);
            return
        }
        let data = ''

        for (let i = 0; i <= limite; i++) {
            let resultado = base * i;
            data += `${base} * ${i} = ${resultado}\n`;
        }
        fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, data, (err) => {
            if (err) {
                reject(err)
            } else {
                resolve(`tabla-${base}-al-${limite}.txt`)
            }
        })
    })
}



