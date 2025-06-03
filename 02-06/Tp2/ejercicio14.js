let num = parseInt(prompt("Ingrese el primer numero"));
let num2 = parseInt(prompt("Ingrese el segundo numero"));

let compMayor = num > num2;
let compMenor = num < num2;
let compIgual = num == num2;
console.log(
  "El primero es Mayor que el segundo?",
  compMayor,
  "El primero es menor que el segundo?",
  compMenor,
  "Son Iguales?",
  compIgual
);
