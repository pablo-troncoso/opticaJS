const btn = document.querySelector('#cristales')
btn.addEventListener('click', () => {

    Swal.fire({
        title: 'Felicidades encontraste el botón de descuento!',
        text: 'Solicita tu descuento de 15% en compras.',
        icon: 'success',
        confirmButtonText: 'Aceptar'
})
})


