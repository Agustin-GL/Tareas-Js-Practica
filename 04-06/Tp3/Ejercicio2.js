let bateria = parseInt(prompt("Ingresar nivel de bateria del 0 al 100"))
if (bateria >= 80){
    console.log("Bateria llena 🔋")
} else if(bateria >= 30){
    console.log("Batería media ⚠️")
} else {
    console.log("Batería baja, conectá el cargador 🔌")
}