
//1 variables numericas
let num1=1
let num2=2
let num3=3
//Realiza y guarda el resultado de las operaciones de suma, resta y multiplicación entre las variables.

let suma= num1+num2+num3
let resta= num1-num2-num3
let multiplicación= num1*num2*num3

if (suma>resta && suma>multiplicación) {
    console.log(`Suma es mayor, su resultado es ${suma}`)

}
else if(resta>suma && resta>multiplicación){
    console.log(`Resta es mayor, su resultado es ${resta}`)
}
else {
    console.log(`Multiplicacion es mayor, su resultado es ${multiplicación}`)
}