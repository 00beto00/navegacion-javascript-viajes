
import { barcelona, roma, paris, londres } from './ciudades.js'

// Obtener los datos del DOM 
let enlaces = document.querySelectorAll('a')

let tituloElemento = document.getElementById('titulo')
let subTituloElemento = document.getElementById('subtitulo')
let parrafoElemento = document.getElementById('parrafo')
let precioElemento = document.getElementById('precio')


console.log(enlaces);

// Agregar elemento click
enlaces.forEach(function (enlace) {

    enlace.addEventListener('click', function () { 
        // REMOVER ACTIVO

        enlaces.forEach(function (enlace) {
            enlace.classList.remove('active')
        })

        // AGREGAR ACTIVO
        this.classList.add('active')

        // Obtener contenido segun el enlace
        let contenido = obtenerContenido(this.textContent)

        // Mostrar contenido al DOM
        tituloElemento.innerHTML = contenido.titulo
        subTituloElemento.innerHTML = contenido.subtitulo
        parrafoElemento.innerHTML = contenido.parrafo
        precioElemento.innerHTML = contenido.precio

    })

})
// FUNCION PARA TRAER INFORMACION CORRECTA DE CIUDADES
function obtenerContenido(enlace) {

    let contenido = {

        'Barcelona': barcelona,
        'Roma': roma,
        'París': paris,
        'Londres': londres
    }
    return contenido[enlace]

}

