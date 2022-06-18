
/* REGISTRARSE */
alert("Bienvenido, vamos a registrarnos!")

let edad = prompt("ingresa tu edad")
edad = parseInt(edad)
if (edad == "") {
    alert("Campo requerido")
}else {
    alert("Usted es apto para registrarse")
    let nombre = prompt("ingresa tu nombre");
    if (nombre == "") {
        alert("Campo requerido");
    } else {
        let apellido = prompt("ingresa tu apellido");
        if (apellido== "") {
            alert("Campo requerido");
        } else {
            alert("Bienvenido/a " + nombre + apellido +" te registraste correctamente");

let ingreso = prompt(
    "Elige la zona que quieras depilar: \n 1-Cavado $500 \n 2-Piernas $500 \n 3-Brazos $500 \n 4-Tira de cola $500 \n 5-Rostro $500"
    );
    if (ingreso == "0") {
    alert("Gracias, que tengas un buen día");
    }
    while (ingreso != "0") {
    switch (ingreso) {
        case "1":
            alert("Seleccionaste Cavado, te atenderemos de inmediato");
            break;
        case "2":
            alert("Seleccionaste Piernas, te atenderemos de inmediato");
            break;
        case "3":
            alert("Seleccionaste Brazos, te atenderemos de inmediato");
            break;
        case "4":
            alert("Seleccionaste Tira de cola, te atenderemos de inmediato");
            break;
        case "5":
            alert("Seleccionaste Rostro, te atenderemos de inmediato");
            break;
        default:
            alert("opcion no valida");
            break;
    }
    ingreso = prompt(
        "Puedes elegir otra zona a depilar; \nPon 0 para finalizar: \n 1-Cavado \n 2-Piernas \n 3-Brazos \n 4-Tira de cola \n 5-Rostro"
    );
    if (ingreso == "0") {
        alert("Gracias, que tengas un buen día");
    }
}
}
}
}

alert("Calculadora del costo total dependiendo la cantidad de sesiones que necesites")

let ingreso = prompt("Ingresa el precio de la zona a depilar")
ingreso = parseInt(ingreso);
let limite = prompt("Cuantas sesiones de depilacion vas a querer?");
limite = parseInt(limite);
if (isNaN(ingreso) || isNaN(limite)) {
    alert("El valor ingresado no es un número");
} else {
    for (let index = 0; index <= limite; index++) {
    let result = ingreso * index;
    console.log(ingreso + " X " + index + "=" + result);
    }
}
