let email = prompt("Ingrese su correo");
let arroba = email.indexOf("@");
let userName = email.slice(0, arroba);

console.log("Tu nombre de usuario:", userName);
