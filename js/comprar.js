
new Cleave('.tarjeta', {
    creditCard: true,
    onCreditCardTypeChanged: function (type) {
        // update UI ...
    }
});

new Cleave('.vencimiento', {
    date: true,
    datePattern: ['m', 'y'],
    delimiter: '/'
});  

new Cleave('.codigo', {
    numericOlny: true,
    blocks: [3]
});

function notificacionError() {
    Toastify({
        text: "Completar los campos vacios!",
        duration: 2500,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "center", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
        background: "linear-gradient(to right, #ff0000, #ff9000)",
        },
        onClick: function(){} // Callback after click
    }).showToast();

    setTimeout(() => {
    },2000);
}

const btnConfirmar = document.querySelector(".btnComprar"),
nombreCompra = document.querySelector (".nombreCompra"),
emailCompra = document.querySelector (".emailCompra"),
tarjeta = document.querySelector (".tarjeta"),
vencimiento = document.querySelector (".vencimiento"),
codigo = document.querySelector (".codigo")


btnConfirmar.addEventListener ("click", (e) =>{
    e.preventDefault();

    if(nombreCompra.value == ""){
        notificacionError()
    }else {
        if(emailCompra.value == ""){
            notificacionError()
        }else {
            if(tarjeta.value == ""){
                notificacionError()
            }else{
                if(vencimiento.value == ""){
                    notificacionError() 
                }else {
                    if(codigo.value == ""){
                        notificacionError()
                    }else {
                        Swal.fire({
                            position: 'center',
                            icon: 'success',
                            title: 'La compra fue realizada con exito!',
                            showConfirmButton: false,
                            timer: 2500
                        })
                        
                        setTimeout(() => {
                            window.location.href = "../pag/tienda.html"
                        },2500);
                    }
                }
            }
        }
    }
});