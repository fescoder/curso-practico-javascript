const lista = [
    -1500,
    -100,
    0,
    200,
    100,
    500,
    300,
    400000000
];

const listaOrdenada = lista.sort((a, b) => a-b);


function calcularMediaAritmetica(lista) {
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
);

const promedioLista = sumaLista / lista.length;

return promedioLista;
}

const mitadLista = parseInt(listaOrdenada.length / 2);

function esPar(numero) {
    return numero % 2 == 0;
}

let mediana;

if (esPar(listaOrdenada.length)) {
    const elemento1 = listaOrdenada[mitadLista - 1];
    const elemento2 = listaOrdenada[mitadLista];

    mediana = calcularMediaAritmetica([elemento1, elemento2]);

} else {
    mediana = listaOrdenada[mitadLista];
}