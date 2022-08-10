// Helpers

function esPar(numero) {
    return numero % 2 === 0;
}

function calcularMediaAritmetica(lista) {
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    );

    const promedioLista = sumaLista / lista.length;
    return promedioLista;
}

// Calculadora de mediana

function medianaSalarios(lista) {
    const mitad = parseInt(lista.length / 2);

    if (esPar(lista.length)) {
        const personMitad1 = lista[mitad - 1];
        const personMitad2 = lista[mitad];

        const mediana = calcularMediaAritmetica([personMitad1, personMitad2]);

        return mediana;

    } else {
        return lista[mitad];
    }
}

// Mediana general
const salariosCol = colombia.map(persona => persona.salary);

const salariosColOrdenados = salariosCol.sort((a, b) => a - b);

const medianaGeneralCol = medianaSalarios(salariosColOrdenados);

// Mediana del top 10%

const spliceStart = (90 * salariosColOrdenados.length) / 100 ;
const spliceCount = salariosColOrdenados.length - spliceStart;

const salarioColTop10 = salariosColOrdenados.splice(spliceStart, spliceCount);

const medianaTop10Col = medianaSalarios(salarioColTop10);

console.log(medianaGeneralCol, medianaTop10Col);