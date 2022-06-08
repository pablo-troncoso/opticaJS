console.dir(document.body);

let div     = document.getElementById("app");
let parrafo = document.getElementById("parrafo1");
console.log(div.innerHTML);
console.log(parrafo.innerHTML);


let lentes = document.getElementsByClassName("lentes");
console.log(lentes[0].innerHTML);
console.log(lentes[1].innerHTML);
console.log(lentes[2].innerHTML);
console.log(lentes[3].innerHTML);


let boton = document.getElementById("btnPrincipal")
boton.onclick = () =>{console.log("Veces que apretaste el botón :)")}
