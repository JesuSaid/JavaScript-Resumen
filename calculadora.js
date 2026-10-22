// Elementos del DOM, seleccionamos los siguientes elementos
const displayActual = document.getElementById('operacion-actual')
const displayAnterior = document.getElementById('operacion-anterior')

// Estado de la calculadora
let numeroActual = '0'
let numeroAnterior = ''
let operador = null
let debeReset = false
const listaHistorial = document.getElementById('lista-historial')
let historial = []

cargarHistorial()

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

function actualizarDisplay() {
    displayActual.textContent = numeroActual
    displayAnterior.textContent = numeroAnterior
}

function seleccionarOperador(op) {
    //Si hay una operacion pendiente, calculamos primer
    if(!debeReset && operador) calcular()

    operador = op
    numeroAnterior = numeroActual + ' ' + op
    debeReset = true
    actualizarDisplay()
}

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

        agregarAlHistorial(`${anterior} ${operador} ${actual} = ${resultado}`)
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

function mostrarError(mensaje) {
    displayActual.textContent = "Error"
    displayAnterior.textContent = mensaje

    setTimeout(() =>{
        limpiar()
    }, 2000)
}


function limpiar() {
    numeroActual = '0'
    numeroAnterior = ''
    operador = null
    debeReset = false
    actualizarDisplay()
}

function agregarAlHistorial(operacion) {
    historial.unshift(operacion)  //Agregar al principio

    // Limitar a las ultimas 10 operaciones
    if (historial.length >10) {
        historial = historial.slice(0, 10)
    }

    renderizarHistorial()
    guardarHistorial()
}

function renderizarHistorial() {
    // Limpiar contenedor
    listaHistorial.innerHTML = ''

    historial.forEach(operacion => {
        const div = document.createElement('div')
        div.className = 'operacion-historial'
        div.textContent = operacion

        // Al hacer click, usar el resultado de esa operacion
        div.addEventListener('click', () => {
            const resultado = operacion.split(' = ')[1]
            if (resultado) {
                numeroActual = resultado
                numeroAnterior = ''
                operador = null
                debeReset = true
                actualizarDisplay()
            }
        })
        listaHistorial.appendChild(div)
    })
}

function guardarHistorial() {
    localStorage.setItem('calculadora-historial', JSON.stringify(historial))
}

function cargarHistorial() {
    const guardado = localStorage.getItem('calculadora-historial')
    if (guardado) {
        historial = JSON.parse(guardado)
        renderizarHistorial()
    }
}

// Implementacion del funcionamiento de los
// Botones numericos
const botonesNumero = document.querySelectorAll('.btn-numero')

botonesNumero.forEach(boton => {
    boton.addEventListener('click', () => {
        agregarNumero(boton.dataset.numero)
    })
})

document.querySelectorAll('.btn-operador').forEach(boton => {
    boton.addEventListener('click', () => {
        seleccionarOperador(boton.dataset.operador)
    })
})

document.getElementById('clear').addEventListener('click', limpiar)

document.getElementById('igual').addEventListener('click', calcular)

// Funcionalidad el boton Eliminar
document.getElementById('delete').addEventListener('click', () => {
    if (numeroActual.length > 1) {
        numeroActual = numeroActual.slice(0,-1)
    } else {
        numeroActual = '0'
    }

    actualizarDisplay()
})

document.addEventListener('keydown', (evento) => {
    const tecla = evento.key

    // Numeros y putno decimal
    if('0123456789.'.includes(tecla)){
        evento.preventDefault()
        agregarNumero(tecla)

        // Operadores
    } else if (tecla === '+'){ 
        evento.preventDefault()
        seleccionarOperador('+')
    } else if (tecla === '-'){
        evento.preventDefault()
        seleccionarOperador('-')
    } else if (tecla === '*') {
        evento.preventDefault()
        seleccionarOperador('×')
    } else if (tecla === '/') {
        evento.preventDefault()
        seleccionarOperador('÷')
        // Igual (Enter o =)
    } else if (tecla ==='Enter' || tecla === '=') {
        evento.preventDefault()
        calcular()
        // Limpiar (Escape)
    } else if (tecla === 'Escape') {
        limpiar()
        //Borrar (Backspace)
    } else if (tecla === 'Backspace') {
        evento.preventDefault()
        if (numeroActual.length > 1) {
            numeroActual = numeroActual.slice(0,-1)
        } else {
            numeroActual = '0'
        }
        actualizarDisplay()
    }
})

// Boton de limpiar el historial
document.getElementById('limpiar-historial').addEventListener('click', ()=> {
    historial = []
    renderizarHistorial()
    guardarHistorial()
})