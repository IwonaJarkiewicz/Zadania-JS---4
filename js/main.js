'use strict';
// suma kwadratów


var tablica = [1, 2, 3, 4, 5, 6];

function sumaKwadratów(tablicaLiczb) {
    var suma = 0;


    for (var i = 0; i < tablicaLiczb.length; i++) {

        var kwadrat = tablicaLiczb[i] * tablicaLiczb[i];

        suma += kwadrat;
    }

    return suma;

};

sumaKwadratów(tablica);
console.log(sumaKwadratów(tablica));
