let edad = parseInt(prompt("ingrese su edad"))
if (edad >= 18) {
    console.log("Podes comprar")
} else if (edad == 17){
    console.log("Podes venir acompañado de tus padres")
} else {
    console.log("No podés comprar, necesitás venir con un adulto mayor de edad")
}