// numeros primos
// variable numeros enteros
let ingrese_numero=prompt("ingrese numero entero")

let num_entero= Number(ingrese_numero)

let cuenta_resto=0
//variables para comparar
for (let index = 0; index < 10; index++) {
    let resto=num_entero%index
    if (resto==0){
        cuenta_resto++
    }
}


if (cuenta_resto>2) {
    console.log(`El numero no es primo ${num_entero}`)
    
} 
else {
    console.log(`El numero es primo ${num_entero}`)
}



