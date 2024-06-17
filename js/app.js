// ejercicio 1
//Convierte una temperatura dada en grados Celsius a grados Fahrenheit y determina si la temperatura en Fahrenheit es alta, baja o moderada.

// Declara una variable para almacenar una temperatura en grados Celsius.

alert("celsius a fahrenheit")

let input_user= prompt("ingrese el numero del grado celsius")

let grado_celsius=Number(input_user)

//formula despejada 
let fahrenheit_formula= ((grado_celsius*1.8)+32)



if (fahrenheit_formula < 32) {
    console.log(`temperatura baja/moderada (menor 32), ${fahrenheit_formula},grados fahrenheit`)
}

if (fahrenheit_formula > 85) {
    console.log(`temperatura alta (mayor a 85) ${fahrenheit_formula} grados fahrenheit`)
}
else{
    /*console.log(`el volor ingresado fue ${grado_celsius} y su equivalente en fahrenheit es ${fahrenheit_formula}`)*/
    console.log(fahrenheit_formula)
}

