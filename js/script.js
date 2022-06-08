const btn = document.querySelector('#cristales')
btn.addEventListener('click', () => {

    Swal.fire({
        title: 'Usando Sweet Alert!',
        text: 'Dale Click!',
        icon: 'success',
        confirmButtonText: ':)'
})
})
