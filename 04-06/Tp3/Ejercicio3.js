let opcion = prompt(
  "Seleccioná una opción:\n" +
  "1 - Consultar saldo \n" +
  "2 - Retirar dinero \n" +
  "3 - Depositar dinero \n" +
  "4 - Ver últimos movimientos \n" +
  "5 - Cambiar clave \n" +
  "6 - Transferir dinero \n" +
  "7 - Salir \n"
);

opcion = parseInt(opcion);

switch(opcion) {
  case 1:
    console.log("Mostrando saldo disponible...");
    break;
  case 2:
    console.log("Iniciando proceso de retiro...");
    break;
  case 3:
    console.log("Depósito en curso...");
    break;
  case 4:
    console.log("Cargando últimos movimientos...");
    break;
  case 5:
    console.log("Redirigiendo para cambiar la clave...");
    break;
  case 6:
    console.log("Preparando transferencia...");
    break;
  case 7:
    console.log("Gracias por usar el cajero. ¡Hasta pronto!");
    break;
  default:
    console.log("Opción inválida. Por favor, seleccioná una opción del 1 al 7.");
    break;
}