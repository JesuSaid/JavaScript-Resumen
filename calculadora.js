// Elementos del DOM, seleccionamos los siguientes elementos
const displayActual = document.getElementById('operacion-actual')
const displayAnterior = document.getElementById('operacion-anterior')

// Estado de la calculadora
let numeroActual = '0'

// Implementacion del funcionamiento de los
// Botones numericos
const botonesNumero = document.querySelectorAll('.btn-numero')

botonesNumero.forEach(boton => {
    boton.addEventListener('click', () => {
        const numero = boton.dataset.numero

        // Evitar multiples puntos decimales
        if (numero === '.' && numeroActual.includes('.')) return

        // Remplazar el 0 inicial o concatenar
        if (numeroActual === '0' && numero !== '.') {
            numeroActual = numero
        } else {
            numeroActual += numero
        }

        displayActual.textContent = numeroActual
    })
})

// Funcionamiento de boton de limpiar
document.getElementById('clear').addEventListener('click', () => {
    numeroActual = '0'
    displayActual.textContent = numeroActual
    displayAnterior.textContent = ''
})

// Funcionalidad el boton Eliminar
document.getElementById('delete').addEventListener('click', () => {
    if (numeroActual.length > 1) {
        numeroActual = numeroActual.slice(0,-1)
    } else {
        numeroActual = '0'
    }

    displayActual.textContent = numeroActual
})