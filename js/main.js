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
            <a class="agregarProductos" href="https://api.whatsapp.com/send?phone=33145083&text=Buenas,%20queria%20hacer%20la%20compra%20de%20un%20producto.">
            Comprar</a>
        </div>
        `
        seccionProductos.innerHTML += productoHTML
    }
}

let catalogo = []

fetchProductos().then(productos => {
    catalogo = productos
    mostrarCatalogo()
})
