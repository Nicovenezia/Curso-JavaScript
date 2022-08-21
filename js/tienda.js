// TIENDA

async function fetchProductos() {
    const respuesta = await fetch("../data/productos.json") 
    return await respuesta.json()
}

const seccionProductos = document.querySelector(".contenedorTienda")

function mostrarCatalogo() {
    for (producto of catalogo) {
        const {id, img, nombre, precio, precioDescuento} = producto
        const productoHTML = `
        <div class="col-12 shadow p-3 mb-5 bg-body cajaProductos">
            <img class="imgProductos" src="${img}" alt="Foto"></img>
            <h3 class="nombreProductos">${nombre}</h3>
            <p class="precioProductos descuento">$${precio}</p>
            <p class="precioProductos">$${precioDescuento}</p>
            <button class="agregarProductos" onclick="agregarAlCarrito(${id})">Agregar</button>
        </div>
        `
        seccionProductos.innerHTML += productoHTML
    }
}

let catalogo = []

fetchProductos().then(productos => {
    catalogo = productos
    mostrarCatalogo();
});

const buscarProductos = document.querySelector(".buscarTienda")

function filtrarProductos(filtro){ 
    let filtrado = catalogo.filter((el) => {
        return el.nombre.includes(filtro);
    });
    return filtrado 
};

buscarProductos.addEventListener("keyup", (e) => {
    e.preventDefault();
    seccionProductos.innerHTML = "";
    let filtro = filtrarProductos(buscarProductos.value);
    mostrarCatalogo(filtro);
});

function notificacion() {
    Toastify({
        text: "Producto agregado!",
        duration: 2000,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "center", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
        background: "linear-gradient(to right, #3daa26, #45e623)",
        },
        onClick: function(){} // Callback after click
    }).showToast();
}

const carrito = JSON.parse(localStorage.getItem("carrito")) || [] 

function agregarAlCarrito(id) {
    const producto = catalogo.find(p => p.id == id);
    carrito.push(producto);
    notificacion();
    guardarCarrito();
};

function guardarCarrito() {
    localStorage.setItem("carrito", JSON.stringify(carrito));
}

