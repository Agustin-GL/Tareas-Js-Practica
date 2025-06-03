let precio = parseInt(prompt("Precio:"));
let descuento = parseInt(prompt("Descuento:"));
let resultadoDescuento = precio * (descuento / 100);
let precioFinal = precio - resultadoDescuento;

console.log("Precio con descuento:", precioFinal);
