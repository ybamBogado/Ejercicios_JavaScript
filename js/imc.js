// 1.Declara variables para el peso (en kilogramos) y la altura (en metros) de una persona.
// inputs
let ingrese_peso=prompt("ingresa el peso")

let ingrese_altura=prompt("ingrese altura")

// variables 
let peso= Number(ingrese_peso)

let altura=Number(ingrese_altura)

// Calcula el IMC usando la fórmula 

let formula_imc=(peso/(altura**2))

// console.log(formula_imc)

// Usa una sentencia if para clasificar el IMC como bajo peso (< 18.5), normal (18.5 - 24.9), sobrepeso (25 - 29.9) u obesidad (>= 30).

if (formula_imc<18.5) {
    console.log("bajo peso ",formula_imc )
}
else if (formula_imc >= 18.5 && formula_imc<=24.9 ) {
        console.log("normal ",formula_imc )
}
else if (formula_imc >= 25 && formula_imc<=29.9 ) {
    console.log("sobrepeso ",formula_imc )
}
else{
    console.log("obesidad",formula_imc)
}

