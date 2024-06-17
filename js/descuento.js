//introducir dato
let precio_input=prompt("ingrese el precio")
//precio inicial
let precio_inicial=Number(precio_input)

let precio_descuento=precio_inicial
//if de descuentos
if (precio_inicial>100) {
    precio_descuento-=(precio_inicial*0.1)
    console.log(`Precio final ${precio_descuento}`)
} 
else if(precio_inicial<100 && precio_inicial>50){
    precio_descuento-=(precio_inicial*0.05)
    console.log(`Precio final ${precio_descuento}`)
}
else {
    console.log(`Precio final ${precio_descuento}`)
}