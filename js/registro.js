/* Registrarse */

const btnRegistrarse = document.querySelector(".registrarse"),
    nombre = document.querySelector(".nombre"),
    emailRegistro = document.querySelector(".emailRegistro"),
    passwordRegistro = document.querySelector(".passwordRegistro");
    p = document.getElementById("mensaje");
//operador logico or
let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

//Completar campos vacios!
/*
Toastify({
    text: "Completar los campos vacios!",
    duration: 2500,
    close: true,
    gravity: "top", // `top` or `bottom`
    position: "left", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
    background: "linear-gradient(to right, #00b09b, #96c93d)",
    },
    onClick: function(){} // Callback after click
}).showToast();
*/
//Creador de Usuarios
class Usuario {
    constructor (nombre, email, password) {
        this.nombre = nombre
        this.email = email
        this.password = password
    }
}

function crearUsuario(name, email, password) {
    name = nombre.value;
    email = emailRegistro.value;
    password = passwordRegistro.value;

    const user = new Usuario(name, email, password);
    return user
}

function guardarUsuario(usuario) {
    let userSaved = usuarios.push(usuario);
    return userSaved;
}

function guardarEnStorage(elemento) {
    let ls = localStorage.setItem("usuarios", JSON.stringify(elemento));
    return ls;
}

function limpiarCampos(){
    nombre.value = "";
    emailRegistro.value = "";
    passwordRegistro.value = "";
}

// Eventos
btnRegistrarse.addEventListener ("click", (e) =>{
    e.preventDefault();
    let newUser = crearUsuario(nombre, emailRegistro, passwordRegistro)

    if(nombre.value == ""){
        p.classList.add("error")
        p.innerText = "Completa los campos vacios!"
    }else {
        if(emailRegistro.value == ""){
            p.classList.add("error")
            p.innerText = "Completa los campos vacios!"
        }else {
            if(passwordRegistro.value == ""){
                p.classList.add("error")
                p.innerText = "Completa los campos vacios!"
            }else {
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Te registraste correctamente!',
                    showConfirmButton: false,
                    timer: 1500
                })
                p.classList.add("valido")
                p.innerText = "Hola " + nombre.value +" te registraste correctamente!";
                guardarUsuario(newUser)
                guardarEnStorage(usuarios)
                limpiarCampos()
            }
        }
    }
});