const carrito = JSON.parse(localStorage.getItem("carrito")) || [] 

const seccionCarrito = document.querySelector(".contenedorCarrito")

function mostrarCarrito() {
    seccionCarrito.innerHTML = ""
    if (carrito.length == 0) {
        seccionCarrito.innerHTML = `    
        <div class="box-carrito">
            <h2>Ups.. Carrito vacio!</h2>
            <a class="a-volver" href="../pag/tienda.html">Volver a la tienda</a>
        </div>
        `
    }else {
        for (producto of carrito) {
            const {id, img, nombre, precio,} = producto
            const productoHTML = `
            <div class="cajaCarrito">
                <img class="imgProductosCarrito" src="${img}" alt="Foto"></img>
                <h3 class="nombreProductosCarrito">${nombre}</h3>
                <p class="precioProductosCarrito">$${precio}</p>
                <button class="agregarProductosCarrito" onclick="eliminarDelCarrito(${id})">Eliminar</button>
            </div>
        `
        seccionCarrito.innerHTML += productoHTML
        }
    }
}

mostrarCarrito()

function eliminarDelCarrito(id) {
    const producto = carrito.find(producto => producto.id == id)
    if(producto){
        carrito.splice(carrito.findIndex(producto => producto.id == id), 1)
    }
    notificacion()
    mostrarCarrito()
    mostrarResumen()
    guardarCarrito()
}

function guardarCarrito() {
    localStorage.setItem("carrito", JSON.stringify(carrito));
}

const seccionResumen = document.querySelector(".contenedorResumen")

function mostrarResumen(){
    seccionResumen.innerHTML = ""
    const total = calcularTotal()
    const resumenHTML = `
        <div class="cajaResumen">
            <h3 class="h3Resumen">Resumen</h3>
            <p class="pTotal">Total a pagar: $${total}</p>
            <a class="aComprar" href="../pag/comprar.html">Comprar</a>
        </div>
    `
    seccionResumen.innerHTML = resumenHTML
}

mostrarResumen()

function calcularTotal(){
    let total = 0 
    for (producto of carrito){
        total += producto.precio 
    }
    return total
}

function notificacion() {
    Toastify({
        text: "Producto eliminado!",
        duration: 2000,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "center", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
        background: "linear-gradient(to right, #ff0000, #ff8000)",
        },
        onClick: function(){} // Callback after click
    }).showToast();
}