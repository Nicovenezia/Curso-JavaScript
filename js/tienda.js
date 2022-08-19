// TIENDA

async function fetchProductos() {
    const respuesta = await fetch("../data/productos.json") 
    return await respuesta.json()
}

const seccionProductos = document.querySelector(".contenedorTienda")

function mostrarCatalogo() {
    for (producto of catalogo) {
        const {img, nombre, precio, precioDescuento} = producto
        const productoHTML = `
        <div class="col-12 shadow p-3 mb-5 bg-body cajaProductos">
            <img class="imgProductos" src="${img}" alt="Foto"></img>
            <h3 class="nombreProductos">${nombre}</h3>
            <p class="precioProductos descuento">$${precio}</p>
            <p class="precioProductos">$${precioDescuento}</p>
            <a class="agregarProductos" href="">Comprar</a>
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

const carrito = []

function sumarAlCarrito(nombre) {
    const producto = catalogo.find(p => p.nombre = nombre)
    carrito.push(producto);
    console.log(carrito);
}

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
