
/* REGISTRARSE */
function saludar() {
    alert("Bienvenido/a, vamos a registrarnos!");
}

saludar();

let edad = prompt("ingresa tu edad");
edad = parseInt(edad);

if (edad == "") {
    alert("Campo requerido");
}else {
    alert("Usted es apto para registrarse");
    let nombre = prompt("ingresa tu nombre");

    if (nombre == "") {
        alert("Campo requerido");
    }else {
        let apellido = prompt("ingresa tu apellido");

        if (apellido== "") {
            alert("Campo requerido");
        }else {
            alert("Hola " + nombre + " " + apellido +" te registraste correctamente!");
/* TIENDA */
let ingreso = prompt("Elige el producto que quieras comprar: \n 1-Cavado $600 \n 2-Piernas $800 \n 3-Brazos $700 \n 4-Tira de cola $500 \n 5-Rostro $550");
    
    if (ingreso == "0") {
    alert("Gracias, que tengas un buen día");
    }
    while (ingreso != "0") {
        switch (ingreso) {
            case "1":
                alert("Seleccionaste Cavado $600, te atenderemos de inmediato");
                break;
            case "2":
                alert("Seleccionaste Piernas $800, te atenderemos de inmediato");
                break;
            case "3":
                alert("Seleccionaste Brazos $700, te atenderemos de inmediato");
                break;
            case "4":
                alert("Seleccionaste Tira de cola $500, te atenderemos de inmediato");
                break;
            case "5":
                alert("Seleccionaste Rostro $550, te atenderemos de inmediato");
                break;
            default:
                alert("opcion no valida");
                break;
        }
    ingreso = prompt("Puedes elegir otro producto; \nPon 0 para finalizar: \n 1-Cavado $600\n 2-Piernas $800\n 3-Brazos $700\n 4-Tira de cola $500\n 5-Rostro $550");
    if (ingreso == "0") {
        alert("Pasemos al costo final del producto");
    }
}
/* PRECIO FINAL */
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
    alert("El precio final con descuento es de " + precioDescuento);
}
}
}
}




