// const precioOriginal = 120;
// const descuento = 18;

function precioConDescuento(precio, descuento) {
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;

    return precioConDescuento;
}

// console.log({precioOriginal, descuento, porcentajePrecioConDescuento, precioConDescuento});

function calcularPrecioConDescuento() {
    const precio = document.getElementById("InputPrice").value;
    const descuento = document.getElementById("InputDiscount").value;

    const precioFinal = precioConDescuento(precio, descuento);

    const resultP = document.getElementById("ResultP");
    resultP.innerText = `El precio con descuento es: $${precioFinal}`;

}



const cupones = [
    {
        nombre: "1er grado",
        valor: 10,
    },
    {
        nombre: "2do grado",
        valor: 20,
    },
    {
        nombre: "3er grado",
        valor: 30,
    }
];

function calcularPrecioConCuponDeDescuento() {
    const precio = document.getElementById("InputPriceC").value;
    const cuponUsuario = document.getElementById("InputDiscountC").value;

    const cuponValido = function (cupon) {
        return cupon.nombre === cuponUsuario;
    }

    const cuponConfirmado = cupones.find(cuponValido);

    if(!cuponConfirmado) {
        alert(`El cupon ${cuponUsuario} es invalido.`)
    } else {
        const resultCupon = precioConDescuento(precio, cuponConfirmado.valor);
        ResultPC.innerText = `El precio final con el cupon de ${cuponConfirmado.nombre} es de: $${resultCupon}.`
    }
}