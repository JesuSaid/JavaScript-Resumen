// Elementos del DOM, seleccionamos los siguientes elementos
const displayActual = document.getElementById('operacion-actual')
const displayAnterior = document.getElementById('operacion-anterior')

// Estado de la calculadora
let numeroActual = '0'
let numeroAnterior = ''
let operador = null
let debeReset = false

// Implementacion del funcionamiento de los
// Botones numericos
const botonesNumero = document.querySelectorAll('.btn-numero')

botonesNumero.forEach(boton => {
    boton.addEventListener('click', () => {
        agregarNumero(boton.dataset.numero)
    })
})

function agregarNumero(numero) {
    if(debeReset) {
        numeroActual = "0"
        debeReset = false
    }
    // Evitar multiples puntos decimales
    if (numero === '.' && numeroActual.includes('.')) return

    // Remplazar el 0 inicial o concatenar
    if (numeroActual === '0' && numero !== '.') {
        numeroActual = numero
    } else {
        numeroActual += numero
    }
    actualizarDisplay()
}

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


function actualizarDisplay() {
    displayActual.textContent = numeroActual
    displayAnterior.textContent = numeroAnterior
}

function seleccionarOperador(op) {
    //Si hay una operacion pendiente, calculamos primer
    if(!debeReset && operador) {
        calcular()
    }

    operador = op
    numeroAnterior = numeroActual + ' ' + op
    debeReset = true
    actualizarDisplay()
}

document.querySelectorAll('.btn-operador').forEach(boton => {
    boton.addEventListener('click', () => {
        seleccionarOperador(boton.dataset.operador)
    })
})

function calcular() {
    if(!operador && debeReset) return

    const anterior = parseFloat(numeroAnterior)
    const actual = parseFloat(numeroActual)

    if (isNaN(anterior) || isNaN(actual)) return 

    let resultado

    try{
        switch(operador) {
            case '+':
                resultado = anterior + actual
                break
            case '-':
                resultado = anterior - actual
                break
            case '×':
                resultado = anterior * actual
                break
            case '÷':
                if (actual === 0){
                    throw new Error('No se puede dividir por cero')
                }
                resultado = anterior / actual
                break
            default:
                return 
        }

        // Redondear para evitar errores de punto flotante
        resultado = Math.round((resultado + Number.EPSILON) * 100000000) / 100000000

        numeroActual = resultado.toString()
        numeroAnterior = ''
        operador = null
        debeReset = false
    } catch (error) {
        mostrarError(error.message)
        return 
    }

    actualizarDisplay()
}

