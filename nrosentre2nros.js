/*4. Hacer un programa que muestre todos los numeros ingresados entre dos numeros ingresados por el usuario  */

let primerNro = parseInt(prompt("Ingrese un Número"))
let segundoNro = parseInt(prompt("Ingrese otro Número"))

document.write("Los números que existen entre " + primerNro + " y " + segundoNro + " son: ");

if(primerNro < segundoNro) {
    for (let i = primerNro; i < segundoNro; i++) {
        document.write("<br>" + i)
    }
} else if(primerNro > segundoNro) {
    for (let i = primerNro; i > segundoNro; i--) {
        document.write("<br>" + i)
    }
}