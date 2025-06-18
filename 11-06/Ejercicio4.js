function pedirNumeros() {
  let suma = 0;
  let numero;

  do {
    numero = prompt("Ingrese un numero o cancelar para finalizar:");
    if (numero === null) { 
      break; 
    }
    if (isNaN(parseInt(numero))) { 
      alert("Por favor, ingrese un numero");
    } else {
      suma += parseInt(numero);
    }
  } while (true); 
  if (suma > 0) { 
    alert("La suma total es: " + suma);
  } else {
    alert("No se ingresaron numeros");
  }
}
pedirNumeros();