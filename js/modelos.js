
//Modelos de Lentes
const modelos = ["Deportivo 01", "Deportivo 02", "Lectura 01", "Lectura 02", "Juegos 01", "Juegos 02", "Clásico 01", "Clásico 02"
];

//Sumar un nuevo modelo de lentes al final
modelos.push("Clásico 03")

//SUmar un nuevo modelo de lentes al inicio
modelos.unshift("Deportivo 00")

//Eliminan el primer elemento con shift y el último con pop.
// modelos.shift()
// modelos.pop()

//Elimina en cualquier posición
//modelos.splice(1, 2)

console.log( modelos.length)
console.log(modelos)




class lente{
    constructor(estilo,modelo,precio,disponibilidad){
        this.estilo=estilo
        this.modelo=modelo
        this.precio=precio
        this.disponibilidad=disponibilidad
    }
    habilitar(){
        let error= "lente disponible"
        if(this.disponibilidad==false){
            this.disponibilidad = true
        }else{
            console.log(error)
        }
    }
    desabilitar(){
        let error="lente no disponible"
        if(this.disponibilidad==true){
            this.disponibilidad=false
        }else{
            console.log(error)
        }
    }
}

let lente1 = new lente("Deportivo","Modelo 01", 100, true)
let lente2 = new lente("Deportivo", "Modelo 02", 150, true)
let lente3 = new lente("Lectura", "Modelo 01", 50, false)
let lente4 = new lente("Lectura", "Modelo 02", 20, true)
let lente5 = new lente("Juegos", "Modelo 01", 10, true)
let lente6 = new lente("Clásico", "Modelo 01", 100, true)

const lentes = []


lentes.push(lente1)
lentes.push(lente2)
lentes.push(lente3)
lentes.push(lente4)
lentes.push(lente5)
lentes.push(lente6)

console.log(lentes)



function agregarlente(){
    let estilolentenuevo= prompt("ingrese el estilo")
    let modelonuevo= prompt("ingrese el modelo")
    let precionuevo =Number(prompt("Ingrese el precio"))
    let disponibilidadnuevo=confirm("ingrese si esta disponible")
    let lentenuevo = new lente(estilolentenuevo, modelonuevo, precionuevo,disponibilidadnuevo)
    //console.log(lentenuevo)
    lentes.push(lentenuevo)    
    console.log(lentes)
}
agregarlente()
















