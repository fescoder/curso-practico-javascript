
// Código del cuadrado
console.group("Cuadrados");

// const ladoCuadrado = 5;
// console.log("Los lados del cuadrado miden: " + ladoCuadrado + " cm.");

function perimetroCuadrado(lado) {
    return lado * 4;
}

// console.log("El perimetro del cuadrado es: " + perimetroCuadrado + " cm.");

function areaCuadrado(lado) {
    return lado * lado;
}
// console.log("El area del cuadrado es: " + areaCuadrado + " cm^2.");

console.groupEnd();

// Código del triangulo
console.group("Triangulos");

// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;


// console.log(
//     "Los lados del triangulo miden: " + ladoTriangulo1 + " cm, " + ladoTriangulo2 + " cm, " + baseTriangulo + " cm."
// );

// const alturaTriangulo = 5.5;
// console.log("La altura del triangulo es de: " + alturaTriangulo + " cm.")

function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;
}
// console.log("El perimetro del triangulo es de: " + perimetroTriangulo + " cm.")

function areaTriangulo(base, altura) {
    return (base * altura) / 2;
}
// console.log("El area del triangulo es de: " + areaTriangulo + " cm^2.")

console.groupEnd();

// Código del Circulo
console.group("Circulos");

// Radio
// const radioCirculo = 4;
// console.log("El radio del circulo es: " + radioCirculo + " cm.");

// Diametro
function diametroCirculo(radio) {
    return radio * 2;
}
// console.log("El diametro del circulo es: " + diametroCirculo + " cm.");

// PI
// const PI = Math.PI;
// console.log("PI es: " + PI + " cm.");

// Circunferencia
function circunferenciaCirculo(radio) {
    return diametroCirculo(radio) * Math.PI;
}
// console.log("La circunferencia del circulo es: " + circunferenciaCirculo + " cm.");

// Area
function areaCirculo(radio) {
    return (radio * radio) * Math.PI;
}
// console.log("El area del circulo es: " + areaCirculo + " cm^2.");

// Altura triangulo isosceles
function alturaTrianguloIsosceles(ladoA, base) {
    return Math.sqrt((ladoA**2 - base**2));
}

console.groupEnd();



// Aquí interactuamos con el HTML

function calcularPerimetroCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);
}



function calcularPerimetroTriangulo() {
    const lado1 = parseInt(document.getElementById("InputLado1Triangulo").value);
    const lado2 = parseInt(document.getElementById("InputLado2Triangulo").value);
    const base = parseInt(document.getElementById("InputBaseTriangulo").value);

    const perimetro = perimetroTriangulo(lado1, lado2, base);
    alert(perimetro);
}

function calcularAreaTriangulo() {
    const base = document.getElementById("InputBaseTriangulo").value;
    const altura = document.getElementById("InputAlturaTriangulo").value;

    const area = areaTriangulo(base,altura);
    alert(area);
}


function calcularDiametroCirculo() {
    const radio = document.getElementById("InputCirculo").value;

    const diametro = diametroCirculo(radio);
    alert(diametro);
}

function calcularCircunferenciaCirculo() {
    const radio = document.getElementById("InputCirculo").value;

    const diametro = circunferenciaCirculo(radio);
    alert(diametro);
}

function calcularAreaCirculo() {
    const radio = document.getElementById("InputCirculo").value;

    const diametro = areaCirculo(radio);
    alert(diametro);
}

function calcularAlturaTrianguloIsosceles() {
    const ladoA = parseInt(document.getElementById("InputLadoATrianguloIsosceles").value);
    const ladoB = parseInt(document.getElementById("InputLadoBTrianguloIsosceles").value);
    const base = parseInt(document.getElementById("InputBaseTrianguloIsosceles").value);

    if(ladoA === ladoB && ladoA != base) {
        const altura = alturaTrianguloIsosceles(ladoA, base);
        alert(altura);
    } else {
        alert("Los 2 lados de un triangulo isosceles deben ser iguales y diferentes a la base.");
    }
}