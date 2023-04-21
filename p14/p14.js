let entrada = [17,19,21];

function par(entrada) {
    let puntaje_par = 0;
    let puntaje_impar = 0;
    let puntaje5 = 0;
    for (let index = 0; index < entrada.length; index++) {
        if (entrada[index] % 2 === 0) {
            puntaje_par += 2;
        } else {
            if (entrada[index] === 7) {
                puntaje_impar += 0;
            } else if(entrada[index] === 5) {
                puntaje5 +=3;
            } else {
                puntaje_impar += 1;
            }

        }

    
    }
    return {puntaje_par: puntaje_par, puntaje_impar: puntaje_impar, puntaje5: puntaje5};
};

var par_impar = par(entrada);

console.log(par_impar.puntaje_par + par_impar.puntaje_impar + par_impar.puntaje5);