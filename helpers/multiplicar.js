const fs = require('fs');

const crearArchivo = async (base = 5, listar) => {
    try {
        let salida = `==================\nTabla del: ${base}\n==================\n`;
        for (let index = 0; index <= 10; index++) {
            salida += `${base} x ${index} = ${base * index}\n`;
        }
        if (listar) { console.log(salida); }
        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
        return `tabla-${base}.txt`;
    } catch (error) {
        throw error;
    }
}

module.exports = {
    crearArchivo
}
