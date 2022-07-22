
/* TIENDA */
/*
const Productos =  [
    {producto: "Cavado Completo", precio: 850},
    {producto: "Pierna Entera", precio: 1400},
    {producto: "Brazo Entero", precio: 1150},
    {producto: "Tira de cola", precio: 800},
    {producto: "Rostro Completo", precio: 1150},
]
console.log(Productos);
/* Precios pagando en efectivo */
/*
const precios = Productos.map(el=>{
    return {
        producto: el.producto,
        precio: el.precio / 1.30,
    }
})
console.log(precios);

/* Filter */
/*
const barato = Productos.filter((el) =>{
    return el.precio < 1000
})
console.log(barato);

let ingreso = prompt("Elige el producto que quieras comprar: \n 1-Cavado Completo $850 \n 2-Pierna Entera $1.400 \n 3-Brazo Entero $1.150 \n 4-Tira de cola $800 \n 5-Rostro Completo $1.150");
    if (ingreso == "0") {
    alert("Gracias, que tengas un buen día");
    }
    while (ingreso != "0") {
        switch (ingreso) {
            case "1":
                alert("Seleccionaste Cavado Completo $850, te atenderemos de inmediato");
                break;
            case "2":
                alert("Seleccionaste Piernas $1.400, te atenderemos de inmediato");
                break;
            case "3":
                alert("Seleccionaste Brazo Entero $1.150, te atenderemos de inmediato");
                break;
            case "4":
                alert("Seleccionaste Tira de cola $800, te atenderemos de inmediato");
                break;
            case "5":
                alert("Seleccionaste Rostro Completo $1.150, te atenderemos de inmediato");
                break;
            default:
                alert("opcion no valida");
                break;
        }
    ingreso = prompt("Puedes elegir otro producto; \nPon 0 para finalizar: \n 1-Cavado Completo $850 \n 2-Pierna Entera $1.400 \n 3-Brazo Entero $1.150 \n 4-Tira de cola $800 \n 5-Rostro Completo $1.150");
    if (ingreso == "0") {
        alert("Pasemos al costo final del producto");
    }
}

/* PRECIO FINAL */
/*
alert("Recorda que pagando en efectivo tenes un descuento del 30%")

let precioProducto = prompt("Ingresa el precio del producto seleccionado")
precioProducto = parseInt(precioProducto);

let pago = prompt("Usted paga en efectvio?: si / no")

if (pago == "no"){
    alert("El precio final es de " + precioProducto);
}else{
    const resta = (a,b) => a - b
    const descuento = x => x * 0.30
    
    let precioDescuento = resta(precioProducto, descuento(precioProducto));
    alert("El precio final con descuento es de " + Math.floor(precioDescuento));
}
*/