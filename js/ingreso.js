/* Iniciar sesion  */

const btnIngresar = document.querySelector(".ingresar"),
    email = document.querySelector(".email"),
    password = document.querySelector(".password"),
    p = document.getElementById("mensaje");

function IniciarSesion(usuario) {
    let userFound = usuario.find((usuario)=> {
        return usuario.email == email.value && usuario.password == password.value
    });
    //Operador ternario
    userFound ? window.location.href = "./pag/inicio.html" : p.classList.add("error"); p.innerText = "Email o password incorrectos!";

    return userFound;
}

function recuperarLS(){
    let datos = JSON.parse(localStorage.getItem("usuarios"));
    return datos;
}
const usuariosLS = recuperarLS();

// Eventos
btnIngresar.addEventListener("click", (e)=> {
    e.preventDefault();
    IniciarSesion(usuariosLS);
});
