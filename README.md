# **Resumen de JavaScript:**
## Introducción, Estructuras de control, Funciones, Arrays, Objetos, Tipos de datos primitivos, Referencias, Prototipos y Manejo de errores y Programación asíncrona

Síntesis de los 65 temas de estas nueve secciones de [Aprende JavaScript](https://www.aprendejavascript.dev/), curso de midudev. Cada tema incluye título, subtítulo, definición breve y un ejemplo propio para practicar. Al final se añade una sección de Proyecto que integra las tres lecciones prácticas de DOM y Eventos en una explicación conjunta.

Cada ejemplo es independiente. Los bloques JavaScript generales pueden probarse en la consola del navegador. En Módulos, guarda los fragmentos en los archivos indicados y cárgalos mediante un servidor HTTP local; los ejemplos de DOM son documentos HTML completos. Los comentarios junto a `console.log()` indican la salida esperada.

### Índice

1. [Introducción](#1-introducción)
    - [1.1. ¿Qué es JavaScript?](#11-qué-es-javascript)
    - [1.2. La consola del navegador](#12-la-consola-del-navegador)
    - [1.3. Tipos de datos](#13-tipos-de-datos)
    - [1.4. Operadores de comparación](#14-operadores-de-comparación)
    - [1.5. Operadores lógicos](#15-operadores-lógicos)
    - [1.6. Variables](#16-variables)
    - [1.7. Comentarios](#17-comentarios)
    - [1.8. Console.log](#18-consolelog)
    - [1.9. Operador typeof](#19-operador-typeof)
    - [1.10. null y undefined](#110-null-y-undefined)
2. [Estructuras de control](#2-estructuras-de-control)
    - [2.1. Condicional if](#21-condicional-if)
    - [2.2. Bucles con while](#22-bucles-con-while)
    - [2.3. Bucles con do while](#23-bucles-con-do-while)
    - [2.4. Expresiones y Declaraciones](#24-expresiones-y-declaraciones)
    - [2.5. Bucles con for](#25-bucles-con-for)
    - [2.6. Condiciones con Switch](#26-condiciones-con-switch)
3. [Funciones](#3-funciones)
    - [3.1. Tu primera función](#31-tu-primera-función)
    - [3.2. Parámetros](#32-parámetros)
    - [3.3. Function Expression](#33-function-expression)
    - [3.4. Funciones flecha](#34-funciones-flecha)
    - [3.5. Recursividad](#35-recursividad)
    - [3.6. Scope (Ámbito)](#36-scope-ámbito)
    - [3.7. Closures (Clausuras)](#37-closures-clausuras)
4. [Arrays](#4-arrays)
    - [4.1. ¿Qué son los Arrays en JavaScript?](#41-qué-son-los-arrays-en-javascript)
    - [4.2. Métodos](#42-métodos)
    - [4.3. Iteración y Recorrido de Arrays](#43-iteración-y-recorrido-de-arrays)
    - [4.4. Buscar en Arrays](#44-buscar-en-arrays)
    - [4.5. Ordenar Arrays](#45-ordenar-arrays)
    - [4.6. Transformar Arrays](#46-transformar-arrays)
    - [4.7. Matrices con Arrays](#47-matrices-con-arrays)
    - [4.8. Algoritmos con Arrays](#48-algoritmos-con-arrays)
5. [Objetos](#5-objetos)
    - [5.1. Objetos](#51-objetos)
    - [5.2. Atajos y propiedades computadas](#52-atajos-y-propiedades-computadas)
    - [5.3. Transformación a Array e iteración](#53-transformación-a-array-e-iteración)
    - [5.4. Operador de encadenamiento opcional](#54-operador-de-encadenamiento-opcional)
6. [Tipos de datos primitivos](#6-tipos-de-datos-primitivos)
    - [6.1. Métodos en tipos primitivos](#61-métodos-en-tipos-primitivos)
    - [6.2. String](#62-string)
    - [6.3. Number](#63-number)
    - [6.4. BigInt](#64-bigint)
    - [6.5. Symbol](#65-symbol)
7. [Referencias y Prototipos](#7-referencias-y-prototipos)
    - [7.1. Valor y Referencia](#71-valor-y-referencia)
    - [7.2. Qué son los prototipos](#72-qué-son-los-prototipos)
    - [7.3. Funciones constructoras e instancias](#73-funciones-constructoras-e-instancias)
    - [7.4. Clases](#74-clases)
    - [7.5. Herencia en Clases](#75-herencia-en-clases)
8. [Manejo de errores](#8-manejo-de-errores)
    - [8.1. Try/Catch](#81-trycatch)
    - [8.2. Finally](#82-finally)
    - [8.3. Errores Personalizados](#83-errores-personalizados)
9. [Programación asíncrona](#9-programación-asíncrona)
    - [9.1. Callbacks](#91-callbacks)
    - [9.2. Promises (Promesas) - Básico](#92-promises-promesas---básico)
    - [9.3. Promises (Promesas) - Avanzado](#93-promises-promesas---avanzado)
    - [9.4. Fetch API](#94-fetch-api)
    - [9.5. async/await](#95-asyncawait)
10. [Módulos](#10-módulos)
    - [10.1. ¿Qué son los Módulos?](#101-qué-son-los-módulos)
    - [10.2. Export e Import](#102-export-e-import)
    - [10.3. Importaciones Dinámicas](#103-importaciones-dinámicas)
    - [10.4. Patrones y Buenas Prácticas](#104-patrones-y-buenas-prácticas)
11. [DOM y Eventos](#11-dom-y-eventos)
    - [11.1. Selección de Elementos](#111-selección-de-elementos)
    - [11.2. Manipulación del DOM](#112-manipulación-del-dom)
    - [11.3. Eventos y Event Listeners](#113-eventos-y-event-listeners)
12. [Sets y Maps](#12-sets-y-maps)
    - [12.1. ¿Qué son Set y Map?](#121-qué-son-set-y-map)
    - [12.2. Set](#122-set)
    - [12.3. Operaciones con Sets](#123-operaciones-con-sets)
    - [12.4. Map](#124-map)
    - [12.5. WeakSet y WeakMap](#125-weakset-y-weakmap)
13. [Proyecto: calculadora interactiva con DOM y Eventos](#13-proyecto-calculadora-interactiva-con-dom-y-eventos)

## 1. Introducción

Fundamentos para entender el lenguaje, representar información y comenzar a escribir código.

### 1.1. ¿Qué es JavaScript?

#### Un lenguaje para dar instrucciones y crear interactividad

**Definición breve:** JavaScript es un lenguaje de programación que nació en 1995 para añadir interactividad a las páginas web. Actualmente también se utiliza en servidores, aplicaciones y otros entornos. Programar consiste en escribir instrucciones que una computadora puede ejecutar.

**Ejemplo:** calcular y mostrar el costo de una compra.

```javascript
const precio = 40;
const cantidad = 3;
console.log(precio * cantidad); // 120
```

Fuente: [¿Qué es JavaScript?](https://www.aprendejavascript.dev/clase/introduccion/que-es-javascript).

### 1.2. La consola del navegador

#### Un espacio para ejecutar código y consultar resultados

**Definición breve:** La consola es una herramienta del navegador que permite ejecutar JavaScript de forma interactiva y consultar resultados, mensajes y errores. Para abrirla, puedes hacer clic derecho en una página, seleccionar «Inspeccionar» y entrar en la pestaña «Consola» o «Console».

**Ejemplo:** escribir estas instrucciones en la consola.

```javascript
console.log(12 + 8); // 20
console.log('Estoy practicando JavaScript'); // Estoy practicando JavaScript
```

Fuente: [La consola del navegador](https://www.aprendejavascript.dev/clase/introduccion/la-consola-del-navegador).

### 1.3. Tipos de datos

#### Números, texto y valores booleanos

**Definición breve:** Los tipos de datos indican qué clase de valor representa la información. Al comenzar destacan `number` para números, `string` para texto y `boolean` para `true` o `false`. Los siete tipos primitivos son `number`, `string`, `boolean`, `null`, `undefined`, `symbol` y `bigint`.

Con números puedes usar `+`, `-`, `*`, `/`, `%` y `**`. Con cadenas, `+` concatena texto. Los paréntesis permiten cambiar la prioridad de las operaciones.

**Ejemplo:** representar un producto y operar con sus datos.

```javascript
const producto = 'Cuaderno'; // string
const precio = 25.5; // number
const disponible = true; // boolean

console.log(producto + ' disponible'); // Cuaderno disponible
console.log(precio * 2); // 51
console.log(disponible); // true
console.log((2 + 3) * 4); // 20
```

Fuente: [Tipos de datos](https://www.aprendejavascript.dev/clase/introduccion/tipos-de-datos).

### 1.4. Operadores de comparación

#### Comparar valores para obtener verdadero o falso

**Definición breve:** Permiten comprobar relaciones entre valores y producen un booleano. `>` y `<` comparan magnitudes; `>=` y `<=` incluyen la igualdad. `===` comprueba igualdad estricta, sin convertir tipos, y `!==` comprueba desigualdad estricta. También pueden compararse cadenas y booleanos.

**Ejemplo:** comparar números y distinguir un número de una cadena.

```javascript
console.log(9 > 4); // true
console.log(9 < 4); // false
console.log(9 >= 9); // true
console.log(4 <= 9); // true
console.log(9 === '9'); // false
console.log(9 !== '9'); // true
console.log('sol' === 'sol'); // true
```

Fuente: [Operadores de comparación](https://www.aprendejavascript.dev/clase/introduccion/operadores-de-comparacion).

### 1.5. Operadores lógicos

#### Combinar o invertir condiciones

**Definición breve:** Con valores booleanos, `&&` (AND) exige que ambas condiciones sean verdaderas, `||` (OR) exige que al menos una lo sea y `!` (NOT) invierte el resultado. Se pueden combinar con comparaciones y agrupar mediante paréntesis.

**Ejemplo:** comprobar condiciones para acceder a una actividad.

```javascript
const edad = 21;
const tieneEntrada = true;
const estaBloqueado = false;

console.log(edad >= 18 && tieneEntrada); // true
console.log(edad < 18 || tieneEntrada); // true
console.log(!estaBloqueado); // true
```

Fuente: [Operadores lógicos](https://www.aprendejavascript.dev/clase/introduccion/operadores-logicos).

### 1.6. Variables

#### Guardar información con `let` y `const`

**Definición breve:** Una variable asocia un nombre con un valor. `let` permite reasignarlo; `const` exige un valor inicial y evita la reasignación. `var` es la alternativa antigua, con reglas de ámbito diferentes. Conviene usar nombres descriptivos en `camelCase`; las mayúsculas y minúsculas distinguen identificadores.

**Ejemplo:** actualizar un contador y conservar una etiqueta.

```javascript
const nombreCurso = 'JavaScript';
let leccionesCompletadas = 2;

leccionesCompletadas = leccionesCompletadas + 1;
console.log(nombreCurso, leccionesCompletadas); // JavaScript 3
// nombreCurso = 'Otro'; // Si se ejecuta, produce TypeError.
```

Fuente: [Variables](https://www.aprendejavascript.dev/clase/introduccion/variables).

### 1.7. Comentarios

#### Explicar el código sin ejecutar esas explicaciones

**Definición breve:** Los comentarios añaden notas que se ignoran durante la ejecución. `//` inicia un comentario hasta el final de la línea y `/* ... */` delimita uno que puede ocupar varias líneas. Son útiles para explicar decisiones y motivos del código.

**Ejemplo:** documentar el motivo de un descuento.

```javascript
// Aplicamos una promoción para estudiantes.
const precioOriginal = 100;

/* El descuento se expresa como decimal:
   0.15 equivale al 15 %. */
const descuento = 0.15;

console.log(precioOriginal * (1 - descuento)); // 85
```

Fuente: [Comentarios](https://www.aprendejavascript.dev/clase/introduccion/comentarios).

### 1.8. Console.log

#### Mostrar mensajes y valores para revisar el programa

**Definición breve:** `console.log()` muestra información en la consola y ayuda a comprobar qué ocurre durante la ejecución. Acepta varios valores separados por comas. Otros métodos relacionados son `console.info()` para información, `console.warn()` para advertencias y `console.error()` para errores.

**Ejemplo:** consultar una variable y emitir mensajes de distintas categorías.

```javascript
const puntos = 80;
console.log('Puntos:', puntos); // Puntos: 80
console.info('Partida iniciada'); // Partida iniciada
console.warn('Queda una vida'); // Queda una vida
console.error('No se pudo guardar'); // No se pudo guardar
```

Fuente: [Console.log](https://www.aprendejavascript.dev/clase/introduccion/console-log).

### 1.9. Operador typeof

#### Identificar el tipo de un valor

**Definición breve:** `typeof` devuelve una cadena que describe el tipo de un valor o variable. Sirve para realizar comprobaciones antes de operar. Existe una excepción histórica: `typeof null` devuelve `"object"`, aunque `null` es primitivo. Para detectar `null`, usa `=== null`.

**Ejemplo:** consultar tipos y reconocer la excepción de `null`.

```javascript
console.log(typeof 27); // number
console.log(typeof 'Hola'); // string
console.log(typeof false); // boolean
console.log(typeof undefined); // undefined
console.log(typeof null); // object
console.log(null === null); // true
```

Fuente: [Operador typeof](https://www.aprendejavascript.dev/clase/introduccion/operador-typeof).

### 1.10. null y undefined

#### Distinguir la ausencia intencional de un valor sin asignar

**Definición breve:** `undefined` suele indicar que una variable todavía no tiene un valor asignado, aunque también puede asignarse explícitamente. `null` representa una ausencia de valor expresada intencionalmente. Son valores distintos: al compararlos con igualdad estricta, el resultado es `false`.

**Ejemplo:** diferenciar información pendiente de una selección vacía.

```javascript
let telefono;
const usuarioSeleccionado = null;

console.log(telefono); // undefined
console.log(usuarioSeleccionado); // null
console.log(telefono === undefined); // true
console.log(usuarioSeleccionado === null); // true
console.log(null === undefined); // false
```

Fuente: [null y undefined](https://www.aprendejavascript.dev/clase/introduccion/null-y-undefined).

## 2. Estructuras de control

Herramientas para decidir qué instrucciones ejecutar y cuántas veces repetirlas.

### 2.1. Condicional if

#### Elegir un bloque según una condición

**Definición breve:** `if` ejecuta un bloque cuando la condición resulta verdadera. `else if` permite comprobar alternativas y `else` atiende el caso restante. En una cadena se ejecuta el primer bloque cuya condición se cumple. Las condiciones pueden combinarse con operadores lógicos o anidarse.

**Ejemplo:** clasificar una calificación.

```javascript
const calificacion = 8;

if (calificacion >= 9) {
  console.log('Excelente');
} else if (calificacion >= 6) {
  console.log('Aprobado');
} else {
  console.log('Necesitas repasar');
}
// Salida: Aprobado
```

Fuente: [Condicional if](https://www.aprendejavascript.dev/clase/estructuras-de-control/condicional-if).

### 2.2. Bucles con while

#### Repetir instrucciones mientras se cumpla una condición

**Definición breve:** `while` comprueba la condición antes de cada vuelta o iteración, por lo que puede no ejecutarse ninguna vez. El código debe permitir que la condición deje de cumplirse para evitar un bucle infinito. `break` termina el bucle y `continue` omite el resto de la iteración actual.

**Ejemplo:** recorrer números, omitir el 2 y detenerse antes de mostrar el 5.

```javascript
let numero = 0;

while (numero < 6) {
  numero = numero + 1;

  if (numero === 2) {
    continue;
  }
  if (numero === 5) {
    break;
  }

  console.log(numero);
}
// Salida, una línea por número: 1, 3, 4
```

Fuente: [Bucles con while](https://www.aprendejavascript.dev/clase/estructuras-de-control/bucles-con-while).

### 2.3. Bucles con do while

#### Ejecutar primero y comprobar después

**Definición breve:** `do...while` ejecuta el bloque al menos una vez y comprueba la condición al final de cada iteración. Es útil cuando la primera ejecución debe ocurrir siempre. En el navegador puede combinarse con `confirm()`, que devuelve `true` al aceptar y `false` al cancelar.

**Ejemplo:** comprobar que el bloque se ejecuta aunque la condición final sea falsa.

```javascript
let intentos = 0;

do {
  intentos = intentos + 1;
  console.log('Intento:', intentos);
} while (intentos < 0);
// Salida: Intento: 1
```

Fuente: [Bucles con do while](https://www.aprendejavascript.dev/clase/estructuras-de-control/bucles-con-do-while).

### 2.4. Expresiones y Declaraciones

#### Diferenciar lo que produce un valor de lo que declara un elemento

**Definición breve:** Una expresión se evalúa y produce un valor, como `4 * 3` o una comparación. Una declaración introduce elementos como variables o funciones. Una declaración de variable no puede usarse directamente donde se espera una expresión, como dentro de los argumentos de `console.log()`.

**Ejemplo:** usar expresiones dentro de una declaración y una condición.

```javascript
const total = 4 * 3; // Declaración que contiene la expresión 4 * 3.
console.log(total); // 12
console.log(total > 10); // true

if (total > 10) {
  console.log('Total suficiente'); // Total suficiente
}
// console.log(const total = 12); // Sería un error de sintaxis.
```

Fuente: [Expresiones y Declaraciones](https://www.aprendejavascript.dev/clase/estructuras-de-control/expresiones-y-declaraciones).

### 2.5. Bucles con for

#### Reunir inicialización, condición y actualización

**Definición breve:** `for` organiza un bucle en tres partes: inicialización, condición y actualización. La inicialización ocurre una vez, la condición se comprueba antes de cada iteración y la actualización se realiza después de cada vuelta normal. `++` incrementa en uno y `--` decrementa en uno. También admite `break`, `continue` y bucles anidados.

**Ejemplo:** mostrar los primeros tres múltiplos positivos de dos.

```javascript
for (let paso = 1; paso <= 3; paso++) {
  console.log(paso * 2);
}
// Salida, una línea por número: 2, 4, 6
```

Fuente: [Bucles con for](https://www.aprendejavascript.dev/clase/estructuras-de-control/bucles-con-for).

### 2.6. Condiciones con Switch

#### Seleccionar entre varios casos de un valor

**Definición breve:** `switch` compara el valor de una expresión con los valores de sus `case` mediante igualdad estricta. `break` sale del bloque e impide continuar con los casos siguientes. `default` es opcional y cubre la ausencia de coincidencias. Varios casos pueden compartir instrucciones.

**Ejemplo:** agrupar dos opciones de transporte.

```javascript
const transporte = 'bicicleta';

switch (transporte) {
  case 'bicicleta':
  case 'caminar':
    console.log('No necesita combustible');
    break;
  case 'autobus':
    console.log('Transporte colectivo');
    break;
  default:
    console.log('Otra opción');
}
// Salida: No necesita combustible
```

Fuente: [Condiciones con Switch](https://www.aprendejavascript.dev/clase/estructuras-de-control/switch).

## 3. Funciones

Bloques reutilizables que reciben datos, realizan tareas y pueden devolver resultados.

### 3.1. Tu primera función

#### Declarar, llamar y devolver un resultado

**Definición breve:** Una función agrupa instrucciones que se ejecutan al llamarla. La declaración básica usa `function`, un nombre, paréntesis y un cuerpo entre llaves. `return` termina la ejecución y devuelve un valor. Si la función llega al final sin devolver un valor explícito, devuelve `undefined`.

**Ejemplo:** reutilizar una tarea y observar el resultado de una función sin `return`.

```javascript
function obtenerMensaje() {
  return 'Bienvenido al curso';
}

function mostrarMensaje() {
  console.log(obtenerMensaje());
}

const resultado = mostrarMensaje(); // Bienvenido al curso
console.log(resultado); // undefined
```

Fuente: [Tu primera función](https://www.aprendejavascript.dev/clase/funciones/tu-primera-funcion).

### 3.2. Parámetros

#### Recibir datos para adaptar el comportamiento

**Definición breve:** Los parámetros son los nombres que aparecen en la definición de una función; los argumentos son los valores concretos enviados al llamarla. Su orden importa. Como las funciones también son valores, se pueden pasar como argumentos a otras funciones para personalizar una tarea.

**Ejemplo:** recibir dos números y una función que indica qué operación realizar.

```javascript
function multiplicar(a, b) {
  return a * b;
}

function calcular(a, b, operacion) {
  return operacion(a, b);
}

console.log(multiplicar(4, 5)); // 20
console.log(calcular(3, 7, multiplicar)); // 21
// a, b y operacion son parámetros; 3, 7 y multiplicar son argumentos.
```

Fuente: [Parámetros](https://www.aprendejavascript.dev/clase/funciones/parametros).

### 3.3. Function Expression

#### Crear una función como valor de una expresión

**Definición breve:** Una expresión de función crea una función como valor; por ejemplo, para asignarla a una variable. Puede ser anónima o tener nombre. Una declaración de función puede llamarse antes de su declaración gracias al *hoisting*. Una expresión asignada a `const` solo puede usarse después de inicializar esa variable.

**Ejemplo:** guardar una función en una constante y llamarla después.

```javascript
const calcularPerimetro = function (lado) {
  return lado * 4;
};

console.log(calcularPerimetro(6)); // 24
// Llamarla antes de inicializar calcularPerimetro produciría ReferenceError.
```

Fuente: [Function Expression](https://www.aprendejavascript.dev/clase/funciones/function-expression).

### 3.4. Funciones flecha

#### Escribir funciones con la sintaxis `=>`

**Definición breve:** Las funciones flecha son expresiones de función con una sintaxis breve. Si su cuerpo es una expresión sin llaves, devuelven su resultado implícitamente. Si se usa un cuerpo con llaves, hace falta `return` para devolver un valor explícito. Con un único parámetro simple se pueden omitir sus paréntesis.

**Ejemplo:** comparar un retorno implícito con uno explícito.

```javascript
// Declaración de función regular
function sumar(a, b) {
  return a + b
}

// Función flecha
const sumarFlecha = (a, b) => {
  return a + b
}

// Función flecha con return implícito
const sumarFlecha = (a, b) => a + b
```

Fuente: [Funciones flecha](https://www.aprendejavascript.dev/clase/funciones/flecha).

### 3.5. Recursividad

#### Resolver una tarea mediante llamadas a la misma función

**Definición breve:** La recursividad consiste en que una función se llame a sí misma para resolver una versión más pequeña del problema. Necesita un caso base que detenga las llamadas y un avance hacia él. Sin una terminación adecuada, las llamadas pueden agotar la pila de ejecución.

**Ejemplo:** sumar los enteros desde 1 hasta `n`, suponiendo que `n` es un entero no negativo.

```javascript
function sumarHasta(n) {
  if (n === 0) {
    return 0; // Caso base.
  }

  return n + sumarHasta(n - 1);
}

console.log(sumarHasta(4)); // 10
// 4 + 3 + 2 + 1 + 0 = 10
```

Fuente: [Recursividad](https://www.aprendejavascript.dev/clase/funciones/recursividad).

### 3.6. Scope (Ámbito)

#### Determinar desde dónde se puede acceder a una variable

**Definición breve:** El ámbito establece dónde son accesibles variables y funciones. Un ámbito interno puede acceder a los externos que lo contienen; los externos no acceden a sus variables internas. JavaScript busca primero el nombre más cercano. `let` y `const` respetan el ámbito de bloque; `var` tiene ámbito de función o global.

**Ejemplo:** observar cómo una variable local oculta temporalmente un nombre externo.

```javascript
const mensaje = 'Exterior';

function mostrarAmbito() {
  const mensaje = 'Interior';

  if (true) {
    const detalle = 'Solo en este bloque';
    console.log(mensaje, detalle); // Interior Solo en este bloque
  }

  // console.log(detalle); // Si se ejecuta, produce ReferenceError.
}

mostrarAmbito();
console.log(mensaje); // Exterior
```

Fuente: [Scope (Ámbito)](https://www.aprendejavascript.dev/clase/funciones/scope).

### 3.7. Closures (Clausuras)

#### Conservar el acceso a variables del entorno donde se creó una función

**Definición breve:** Una clausura combina una función con el entorno léxico donde fue creada. Así puede conservar acceso a variables externas incluso cuando la función que las creó ya terminó. Permite mantener estado y encapsular datos. Cada llamada a la función creadora puede generar un entorno independiente.

**Ejemplo:** crear acumuladores que conservan su propio total.

```javascript
function crearAcumulador(inicial) {
  let total = inicial;

  return function (cantidad) {
    total = total + cantidad;
    return total;
  };
}

const ahorro = crearAcumulador(10);
const otroAhorro = crearAcumulador(0);

console.log(ahorro(5)); // 15
console.log(ahorro(2)); // 17
console.log(otroAhorro(3)); // 3
```

Fuente: [Closures (Clausuras)](https://www.aprendejavascript.dev/clase/funciones/closures).

## 4. Arrays

Colecciones ordenadas para almacenar, recorrer, buscar y transformar varios valores.

### 4.1. ¿Qué son los Arrays en JavaScript?

#### Agrupar elementos y acceder a ellos mediante índices

**Definición breve:** Un array es una colección ordenada que se escribe entre corchetes `[]`, con sus elementos separados por comas. Sus índices comienzan en `0` y `length` indica su longitud. Puede contener valores de distintos tipos, incluidos otros arrays. Declararlo con `const` impide reasignar la variable, pero permite modificar sus elementos.

**Ejemplo:** consultar y cambiar elementos de una lista.

```javascript
const materiales = ['cuaderno', 'lápiz', 'regla'];

console.log(materiales[0]); // cuaderno
console.log(materiales.length); // 3

materiales[1] = 'pluma';
console.log(materiales); // ['cuaderno', 'pluma', 'regla']
console.log(materiales[5]); // undefined
```

Fuente: [¿Qué son los Arrays en JavaScript?](https://www.aprendejavascript.dev/clase/arrays/arrays-que-son).

### 4.2. Métodos

#### Añadir, quitar y combinar elementos

**Definición breve:** Los arrays ofrecen métodos para trabajar con sus elementos. `push()` añade al final y `unshift()` al inicio; ambos devuelven la nueva longitud. `pop()` elimina y devuelve el último elemento, y `shift()` el primero. Estos cuatro métodos modifican el array original. `concat()` y la propagación `...` permiten combinar arrays en uno nuevo.

La propiedad `length` permite consultar la longitud; reducirla también elimina los elementos que quedan fuera del nuevo límite.

**Ejemplo:** modificar una lista y crear otras a partir de ella.

```javascript
const tareas = ['leer', 'practicar'];

console.log(tareas.push('repasar')); // 3
console.log(tareas.pop()); // repasar
console.log(tareas.unshift('preparar')); // 3
console.log(tareas.shift()); // preparar

const tareasCompletas = tareas.concat(['descansar']);
const otraLista = [...tareas, 'evaluar'];
console.log(tareasCompletas); // ['leer', 'practicar', 'descansar']
console.log(otraLista); // ['leer', 'practicar', 'evaluar']

tareas.length = 1;
console.log(tareas); // ['leer']
```

Fuente: [Métodos](https://www.aprendejavascript.dev/clase/arrays/metodos).

### 4.3. Iteración y Recorrido de Arrays

#### Procesar cada elemento de una colección

**Definición breve:** Recorrer un array consiste en ejecutar instrucciones para sus elementos. `for` y `while` permiten controlar manualmente el índice; `for...of` entrega directamente cada valor. `forEach()` llama a una función con el elemento, su índice y el array. Devuelve `undefined` y no admite `break` para detener el recorrido.

**Ejemplo:** sumar valores con `for...of` y mostrar sus posiciones con `forEach()`.

```javascript
const precios = [10, 25, 15];
let total = 0;

for (const precio of precios) {
  total = total + precio;
}
console.log(total); // 50

precios.forEach((precio, indice) => {
  console.log(indice, precio);
});
// Salida, una línea por elemento: 0 10 / 1 25 / 2 15
```

Fuente: [Iteración y Recorrido de Arrays](https://www.aprendejavascript.dev/clase/arrays/iteracion).

### 4.4. Buscar en Arrays

#### Comprobar condiciones y localizar valores o posiciones

**Definición breve:** Los métodos de búsqueda permiten comprobar si un elemento existe, localizarlo o evaluar condiciones sobre la colección. Algunos reciben un valor concreto y otros una función que comprueba cada elemento.

| Método | Resultado |
| --- | --- |
| `indexOf(valor)` | Índice de la primera coincidencia; `-1` si no existe. |
| `includes(valor)` | Booleano que indica si contiene el valor. |
| `some(condicion)` | `true` si al menos un elemento cumple la condición. |
| `every(condicion)` | `true` si todos cumplen la condición. |
| `find(condicion)` | Primer elemento que la cumple; `undefined` si no lo encuentra. |
| `findIndex(condicion)` | Índice del primer elemento que la cumple; `-1` si no lo encuentra. |

**Ejemplo:** buscar dentro de una lista de calificaciones.

```javascript
const calificaciones = [7, 9, 5, 10];

console.log(calificaciones.indexOf(9)); // 1
console.log(calificaciones.includes(8)); // false
console.log(calificaciones.some(nota => nota < 6)); // true
console.log(calificaciones.every(nota => nota >= 6)); // false
console.log(calificaciones.find(nota => nota < 6)); // 5
console.log(calificaciones.findIndex(nota => nota < 6)); // 2
console.log(calificaciones.indexOf(8)); // -1
console.log(calificaciones.find(nota => nota > 10)); // undefined
```

Fuente: [Buscar en Arrays](https://www.aprendejavascript.dev/clase/arrays/buscar).

### 4.5. Ordenar Arrays

#### Definir el criterio de ordenación y decidir si modificar el original

**Definición breve:** `sort()` ordena y modifica el array original. Sin comparador, ordena según la representación textual de los elementos. Para números, `(a, b) => a - b` ordena de menor a mayor y `(a, b) => b - a` de mayor a menor. `toSorted()` devuelve un array nuevo; también puedes copiar con `...` antes de usar `sort()`.

**Ejemplo:** ordenar una copia numéricamente y conservar el orden inicial de la lista.

```javascript
const numeros = [30, 4, 12];
const ascendentes = [...numeros].sort((a, b) => a - b);
const descendentes = numeros.toSorted((a, b) => b - a);

console.log(ascendentes); // [4, 12, 30]
console.log(descendentes); // [30, 12, 4]
console.log(numeros); // [30, 4, 12]
```

Fuente: [Ordenar Arrays](https://www.aprendejavascript.dev/clase/arrays/ordenar).

### 4.6. Transformar Arrays

#### Filtrar, transformar y acumular resultados

**Definición breve:** `filter()` crea un array con los elementos que cumplen una condición; `map()` crea otro con los valores transformados. `reduce()` acumula los elementos en un resultado, que puede ser un número, un array u otro valor. Estos métodos pueden encadenarse. Proporcionar un valor inicial a `reduce()` permite definir el acumulador, incluso para un array vacío.

**Ejemplo:** seleccionar los números pares, multiplicarlos por tres y sumarlos.

```javascript
const numeros = [1, 2, 3, 4, 5];
const pares = numeros.filter(numero => numero % 2 === 0);
const triples = pares.map(numero => numero * 3);
const total = triples.reduce((acumulado, numero) => acumulado + numero, 0);

console.log(pares); // [2, 4]
console.log(triples); // [6, 12]
console.log(total); // 18
console.log(numeros); // [1, 2, 3, 4, 5]
```

Fuente: [Transformar Arrays](https://www.aprendejavascript.dev/clase/arrays/transformacion).

### 4.7. Matrices con Arrays

#### Representar filas y columnas con arrays anidados

**Definición breve:** Una matriz puede representarse como un array cuyos elementos son otros arrays. Se accede a cada celda mediante dos índices: `matriz[fila][columna]`, ambos desde cero. Para recorrer todas sus celdas se utilizan bucles anidados. Esta estructura sirve para tableros, tablas y datos organizados en dos dimensiones.

**Ejemplo:** consultar una celda y sumar los valores de una matriz de dos filas y tres columnas.

```javascript
const matriz = [
  [2, 4, 6],
  [1, 3, 5]
];

console.log(matriz[1][2]); // 5

let suma = 0;
for (const fila of matriz) {
  for (const valor of fila) {
    suma = suma + valor;
  }
}
console.log(suma); // 21
```

Fuente: [Matrices con Arrays](https://www.aprendejavascript.dev/clase/arrays/matrices).

### 4.8. Algoritmos con Arrays

#### Resolver problemas y estimar cómo crece el trabajo

**Definición breve:** Un algoritmo es una secuencia de pasos para resolver un problema. Encontrar el máximo mediante un recorrido tiene complejidad `O(n)`: el trabajo crece proporcionalmente al tamaño del array. La búsqueda binaria necesita un array ordenado y descarta aproximadamente la mitad de los candidatos en cada paso; su complejidad es `O(log n)`.

**Ejemplo:** encontrar el máximo y buscar una posición mediante búsqueda binaria.

```javascript
function encontrarMayor(numeros) {
  if (numeros.length === 0) return undefined;

  let mayor = numeros[0];
  for (let i = 1; i < numeros.length; i++) {
    if (numeros[i] > mayor) mayor = numeros[i];
  }
  return mayor;
}

function buscarBinario(ordenados, objetivo) {
  let inicio = 0;
  let fin = ordenados.length - 1;

  while (inicio <= fin) {
    const medio = Math.floor((inicio + fin) / 2);

    if (ordenados[medio] === objetivo) return medio;

    if (ordenados[medio] < objetivo) {
      inicio = medio + 1;
    } else {
      fin = medio - 1;
    }
  }
  return -1;
}

console.log(encontrarMayor([-8, -2, -5])); // -2
console.log(buscarBinario([3, 8, 12, 20, 31], 20)); // 3
console.log(buscarBinario([3, 8, 12, 20, 31], 9)); // -1
```

Fuente: [Algoritmos con Arrays](https://www.aprendejavascript.dev/clase/arrays/algoritmos).

## 5. Objetos

Estructuras para agrupar datos y comportamientos mediante propiedades con nombre.

### 5.1. Objetos

#### Modelar información con propiedades y métodos

**Definición breve:** Un objeto reúne propiedades formadas por una clave y un valor. Se crea con `{}` y admite valores de cualquier tipo, incluidas funciones llamadas métodos. Las propiedades se consultan con punto o corchetes, se añaden o modifican mediante asignación y se eliminan con `delete`. `const` no impide modificar sus propiedades.

**Ejemplo:** consultar y modificar la información de un producto.

```javascript
const producto = {
  nombre: 'Mochila',
  precio: 350,
  describir() {
    return 'Producto disponible';
  }
};

const clave = 'precio';
console.log(producto.nombre); // Mochila
console.log(producto[clave]); // 350
console.log(producto.describir()); // Producto disponible

producto.precio = 300;
producto.disponible = true;
console.log(producto.precio, producto.disponible); // 300 true

delete producto.disponible;
console.log(producto.disponible); // undefined
```

Fuente: [Objetos](https://www.aprendejavascript.dev/clase/objetos/introduccion).

### 5.2. Atajos y propiedades computadas

#### Simplificar la creación y extracción de propiedades

**Definición breve:** Si una propiedad y una variable tienen el mismo nombre, puedes escribir `{ nombre }` en lugar de `{ nombre: nombre }`. Una clave computada usa `[expresion]` para calcular su nombre. La desestructuración extrae propiedades a variables y permite renombrarlas, asignar valores por defecto cuando su valor es `undefined` y acceder a objetos anidados.

**Ejemplo:** combinar una propiedad abreviada, una clave dinámica y la desestructuración.

```javascript
const nombre = 'Luna';
const clave = 'puntos';

const perfil = {
  nombre,
  [clave]: 12,
  contacto: { ciudad: 'Puebla' }
};

const {
  nombre: alias,
  nivel = 1,
  contacto: { ciudad }
} = perfil;

console.log(alias, nivel); // Luna 1
console.log(perfil.puntos); // 12
console.log(ciudad); // Puebla
```

Fuente: [Atajos y propiedades computadas](https://www.aprendejavascript.dev/clase/objetos/atajos).

### 5.3. Transformación a Array e iteración

#### Obtener claves, valores o pares para recorrer un objeto

**Definición breve:** `Object.keys()` devuelve un array de claves, `Object.values()` uno de valores y `Object.entries()` uno de pares `[clave, valor]`. Estos métodos incluyen propiedades propias, enumerables y con clave de texto. `for...in` también recorre propiedades enumerables con clave de texto, pero puede incluir las heredadas. Los arrays resultantes permiten usar `forEach()`, `for...of` y otros métodos.

**Ejemplo:** obtener distintas vistas de un inventario y recorrer sus entradas.

```javascript
const inventario = { lapices: 8, libretas: 3 };

console.log(Object.keys(inventario)); // ['lapices', 'libretas']
console.log(Object.values(inventario)); // [8, 3]
console.log(Object.entries(inventario)); // [['lapices', 8], ['libretas', 3]]

for (const [articulo, cantidad] of Object.entries(inventario)) {
  console.log(articulo + ': ' + cantidad);
}
// Salida, una línea por entrada: lapices: 8 / libretas: 3
```

Fuente: [Transformación a Array e iteración](https://www.aprendejavascript.dev/clase/objetos/iterar).

### 5.4. Operador de encadenamiento opcional

#### Consultar propiedades anidadas cuando puede faltar información

**Definición breve:** El operador `?.` detiene el acceso y devuelve `undefined` cuando la referencia que comprueba es `null` o `undefined`. Permite consultar estructuras anidadas sin intentar leer propiedades de un valor ausente. Debe colocarse en cada nivel que pueda faltar. La variable raíz debe estar declarada; el operador no evita un `ReferenceError` por un identificador inexistente.

**Ejemplo:** consultar datos presentes, ausentes y un objeto con valor `null`.

```javascript
const usuario = {
  nombre: 'Ana',
  preferencias: { tema: 'oscuro' }
};

console.log(usuario.preferencias?.tema); // oscuro
console.log(usuario.direccion?.ciudad); // undefined
console.log(usuario.contacto?.telefono?.numero); // undefined

const visitante = null;
console.log(visitante?.nombre); // undefined
```

Fuente: [Operador de encadenamiento opcional](https://www.aprendejavascript.dev/clase/objetos/optional-chaining).

## 6. Tipos de datos primitivos

Valores básicos del lenguaje, sus métodos y sus particularidades al trabajar con texto, números e identificadores.

### 6.1. Métodos en tipos primitivos

#### Usar métodos sin convertir permanentemente un valor en objeto

**Definición breve:** Los primitivos son valores inmutables. Al consultar propiedades o métodos de un `string`, `number`, `boolean`, `bigint` o `symbol`, JavaScript ofrece el comportamiento de un objeto envolvente temporal. El valor sigue siendo primitivo. `null` y `undefined` no admiten este acceso. Para crear primitivos, usa literales o conversiones sin `new`.

**Ejemplo:** llamar métodos y comprobar que el valor original mantiene su tipo y contenido.

```javascript
const texto = 'prueba';
const mayusculas = texto.toUpperCase();
const numero = 42;

console.log(mayusculas); // PRUEBA
console.log(texto); // prueba
console.log(typeof texto); // string
console.log(numero.toString()); // 42
console.log(typeof numero.toString()); // string
// null.toString() produciría TypeError.
```

Fuente: [Métodos en tipos primitivos](https://www.aprendejavascript.dev/clase/tipos-de-datos-primitivos/metodos-en-tipos-primitivos).

### 6.2. String

#### Crear, buscar y transformar texto inmutable

**Definición breve:** `string` representa texto entre comillas simples, dobles o acentos graves. Las plantillas con acentos graves permiten interpolar expresiones mediante `${expresion}` y escribir varias líneas. Las transformaciones generan nuevos textos. `length` mide unidades UTF-16, que no siempre equivalen a caracteres visibles. Secuencias como `\n` representan saltos de línea.

| Operación | Herramientas habituales |
| --- | --- |
| Buscar o comprobar contenido | `indexOf()`, `includes()`, `startsWith()`, `endsWith()` |
| Extraer una parte | `slice()`, `substring()` |
| Cambiar mayúsculas o espacios | `toUpperCase()`, `toLowerCase()`, `trim()` |
| Reemplazar texto | `replace()`, `replaceAll()` |
| Dividir, repetir o rellenar | `split()`, `repeat()`, `padStart()`, `padEnd()` |
| Convertir otros valores a texto | `String(valor)` |

**Ejemplo:** limpiar una entrada y obtener distintas versiones del texto.

```javascript
const entrada = '  ana,LUIS  ';
const limpia = entrada.trim();

console.log(limpia.length); // 8
console.log(limpia.toUpperCase()); // ANA,LUIS
console.log(limpia.includes('LUIS')); // true
console.log(limpia.slice(0, 3)); // ana
console.log(limpia.replace('LUIS', 'Eva')); // ana,Eva
console.log(limpia.split(',')); // ['ana', 'LUIS']
console.log(`Hola, ${limpia.slice(0, 3)}`); // Hola, ana
console.log(entrada.length); // 12 (la entrada original conserva sus espacios)
```

Fuente: [String](https://www.aprendejavascript.dev/clase/tipos-de-datos-primitivos/string).

### 6.3. Number

#### Trabajar con números y reconocer sus límites de precisión

**Definición breve:** `number` representa enteros y decimales mediante punto flotante de 64 bits. Incluye `Infinity`, `-Infinity` y `NaN`. Los enteros seguros están entre `Number.MIN_SAFE_INTEGER` y `Number.MAX_SAFE_INTEGER`. `Number()` convierte valores; `parseInt()` y `parseFloat()` interpretan texto numérico. Los métodos `Number.isNaN()`, `Number.isFinite()` y `Number.isSafeInteger()` permiten comprobar resultados. `toFixed()` formatea decimales y devuelve texto.

**Ejemplo:** convertir, formatear y comprobar números.

```javascript
const precio = Number('18.75');

console.log(precio.toFixed(1)); // 18.8
console.log(typeof precio.toFixed(1)); // string
console.log(Number.parseInt('24px', 10)); // 24
console.log(Number.parseFloat('3.5kg')); // 3.5
console.log(Number.isNaN(Number('hola'))); // true
console.log(1 / 0); // Infinity
console.log(Number.isFinite(Infinity)); // false
console.log(Number.isSafeInteger(2 ** 53)); // false
console.log(0.1 + 0.2); // 0.30000000000000004 (aproximación binaria)
```

Fuente: [Number](https://www.aprendejavascript.dev/clase/tipos-de-datos-primitivos/number).

### 6.4. BigInt

#### Representar enteros grandes sin perder precisión

**Definición breve:** `bigint` representa enteros de tamaño arbitrario, limitado por los recursos disponibles. Se crea con el sufijo `n` o con `BigInt()`. Para un entero grande, partir de texto evita el redondeo previo de un `number`. La división descarta la parte fraccionaria. Las operaciones aritméticas con `number` exigen conversión explícita. `Math` y `JSON.stringify()` no admiten directamente estos valores.

**Ejemplo:** realizar operaciones exactas y convertir un entero grande a texto.

```javascript
const grande = 9007199254740993n;
const desdeTexto = BigInt('12345678901234567890');

console.log(grande + 2n); // 9007199254740995n
console.log(desdeTexto); // 12345678901234567890n
console.log(9n / 2n); // 4n
console.log(typeof grande); // bigint
console.log(grande.toString()); // 9007199254740993
// grande + 1 produciría TypeError; grande + 1n sí es válido.
```

Fuente: [BigInt](https://www.aprendejavascript.dev/clase/tipos-de-datos-primitivos/bigint).

### 6.5. Symbol

#### Crear identificadores únicos y claves sin colisiones

**Definición breve:** Cada llamada a `Symbol(descripcion)` crea un identificador único, aunque se repita la descripción. `Symbol.for(clave)` obtiene o crea uno en un registro global y `Symbol.keyFor()` consulta su clave. Los símbolos pueden usarse como claves de objetos. Estas propiedades no aparecen en `Object.keys()`, pero pueden recuperarse con `Object.getOwnPropertySymbols()`.

**Ejemplo:** distinguir símbolos con igual descripción y acceder a una propiedad simbólica.

```javascript
const id = Symbol('id');
const otroId = Symbol('id');
const usuario = { nombre: 'Mara', [id]: 123 };

console.log(id === otroId); // false
console.log(usuario[id]); // 123
console.log(Object.keys(usuario)); // ['nombre']
console.log(Object.getOwnPropertySymbols(usuario).length); // 1
console.log(Symbol.for('sesion') === Symbol.for('sesion')); // true
console.log(Symbol.keyFor(Symbol.for('sesion'))); // sesion
```

Fuente: [Symbol](https://www.aprendejavascript.dev/clase/tipos-de-datos-primitivos/symbol).

## 7. Referencias y Prototipos

Cómo se comparten los objetos, cómo se buscan sus propiedades y cómo crear instancias con comportamiento reutilizable.

### 7.1. Valor y Referencia

#### Distinguir la copia de un valor de la copia de un objeto

**Definición breve:** JavaScript copia valores al asignar variables o pasar argumentos. En el caso de un objeto, el valor copiado es una referencia al mismo objeto: sus modificaciones se comparten. Reasignar un parámetro no reemplaza la variable externa. Una copia con `{ ...objeto }` es superficial: los objetos anidados siguen compartiéndose.

**Ejemplo:** comparar reasignaciones, referencias compartidas y una copia superficial.

```javascript
let puntos = 10;
let copiaPuntos = puntos;
copiaPuntos = 20;
console.log(puntos, copiaPuntos); // 10 20

const original = { nivel: 1, equipo: { color: 'azul' } };
const alias = original;
alias.nivel = 2;

const copia = { ...original };
copia.nivel = 3;
copia.equipo.color = 'rojo';

function reemplazar(jugador) {
  jugador = { nivel: 99 }; // Solo reasigna el parámetro local.
}
reemplazar(original);

console.log(original.nivel, copia.nivel); // 2 3
console.log(original.equipo.color); // rojo
console.log(original === alias); // true
console.log(original === copia); // false
```

Fuente: [Valor y Referencia](https://www.aprendejavascript.dev/clase/referencia-prototipo/objetos-referencia).

### 7.2. Qué son los prototipos

#### Compartir propiedades mediante una cadena de objetos

**Definición breve:** Un objeto tiene como prototipo otro objeto o `null`. Al consultar una propiedad, JavaScript busca primero en el objeto y luego en su cadena de prototipos, hasta encontrarla o llegar a `null`. `Object.create()` establece el prototipo al crear un objeto; `Object.getPrototypeOf()` lo consulta y `Object.setPrototypeOf()` permite cambiarlo. Conviene evitar el acceso histórico mediante `__proto__`.

**Ejemplo:** usar un método heredado y distinguir propiedades propias de heredadas.

```javascript
const dispositivo = {
  categoria: 'Electrónico',
  iniciar() {
    return this.nombre + ' listo';
  }
};

const radio = Object.create(dispositivo);
radio.nombre = 'Radio';

console.log(radio.iniciar()); // Radio listo
console.log(radio.categoria); // Electrónico
console.log(Object.hasOwn(radio, 'categoria')); // false
console.log(Object.getPrototypeOf(radio) === dispositivo); // true
console.log(radio.inexistente); // undefined
```

Fuente: [Qué son los prototipos](https://www.aprendejavascript.dev/clase/referencia-prototipo/prototipos).

### 7.3. Funciones constructoras e instancias

#### Crear objetos con datos propios y métodos compartidos

**Definición breve:** Una función constructora se invoca con `new` para crear instancias. `new` crea un objeto, lo enlaza con el `prototype` del constructor y ejecuta la función usando ese objeto como `this`. Las propiedades particulares se asignan en el constructor; los métodos reutilizables pueden definirse en su `prototype`. `instanceof` comprueba la presencia de ese prototipo en la cadena de una instancia.

**Ejemplo:** crear dos libros distintos que comparten el mismo método.

```javascript
function Libro(titulo) {
  this.titulo = titulo;
}

Libro.prototype.describir = function () {
  return 'Libro: ' + this.titulo;
};

const primero = new Libro('El faro');
const segundo = new Libro('La isla');

console.log(primero.describir()); // Libro: El faro
console.log(primero !== segundo); // true
console.log(primero.describir === segundo.describir); // true
console.log(Object.getPrototypeOf(primero) === Libro.prototype); // true
console.log(primero instanceof Libro); // true
```

Fuente: [Funciones constructoras e instancias](https://www.aprendejavascript.dev/clase/referencia-prototipo/funciones-constructoras-instancias).

### 7.4. Clases

#### Agrupar la construcción de instancias y sus comportamientos

**Definición breve:** `class` ofrece una sintaxis para organizar objetos sobre el sistema de prototipos. `constructor` inicializa cada instancia y los métodos habituales se comparten mediante el prototipo. `static` define miembros de la clase; `get` y `set` controlan el acceso como propiedades, y `#` declara campos privados. Las clases se instancian con `new` y deben estar inicializadas antes de usarse.

**Ejemplo:** combinar un campo privado, un método, un acceso por propiedad y una fábrica estática.

```javascript
class Marcador {
  #puntos;

  constructor(inicial = 0) {
    this.#puntos = inicial;
  }

  get puntos() {
    return this.#puntos;
  }

  set puntos(valor) {
    this.#puntos = valor;
  }

  sumar() {
    this.#puntos++;
  }

  static crear() {
    return new Marcador();
  }
}

const marcador = Marcador.crear();
marcador.puntos = 4;
marcador.sumar();
console.log(marcador.puntos); // 5
console.log(marcador instanceof Marcador); // true
```

Fuente: [Clases](https://www.aprendejavascript.dev/clase/referencia-prototipo/clases).

### 7.5. Herencia en Clases

#### Especializar una clase y reutilizar el comportamiento de su clase base

**Definición breve:** `extends` crea una clase derivada que hereda métodos mediante la cadena de prototipos. En su constructor, `super()` llama al constructor de la clase base y debe ejecutarse antes de usar `this`. La clase derivada puede añadir métodos o sobrescribirlos. `super.metodo()` permite reutilizar el comportamiento de la base dentro de una sobrescritura.

**Ejemplo:** heredar un saludo y ampliar un método de presentación.

```javascript
class Usuario {
  constructor(nombre) {
    this.nombre = nombre;
  }

  saludar() {
    return 'Hola, ' + this.nombre;
  }

  presentarse() {
    return this.nombre;
  }
}

class Estudiante extends Usuario {
  constructor(nombre, curso) {
    super(nombre);
    this.curso = curso;
  }

  presentarse() {
    return super.presentarse() + ' estudia ' + this.curso;
  }
}

const estudiante = new Estudiante('Eva', 'JavaScript');
console.log(estudiante.saludar()); // Hola, Eva
console.log(estudiante.presentarse()); // Eva estudia JavaScript
console.log(estudiante instanceof Estudiante); // true
console.log(estudiante instanceof Usuario); // true
```

Fuente: [Herencia en Clases](https://www.aprendejavascript.dev/clase/referencia-prototipo/herencia-en-clases).

## 8. Manejo de errores

Herramientas para capturar excepciones, ejecutar tareas de limpieza y comunicar fallos con información útil.

### 8.1. Try/Catch

#### Capturar una excepción y decidir cómo continuar

**Definición breve:** `try` contiene código que puede lanzar una excepción durante su ejecución síncrona. Si ocurre, se omiten las instrucciones restantes del bloque y se ejecuta `catch`; si no, `catch` se omite. Un objeto `Error` permite consultar `name`, `message` y, habitualmente, `stack` para diagnosticar el problema. Entre los errores comunes están `ReferenceError`, `TypeError` y `SyntaxError`.

Para validaciones simples puedes usar `if` o `?.`; `try/catch` resulta útil ante operaciones como interpretar JSON que podría ser inválido.

**Ejemplo:** capturar el error de un JSON con una coma final no permitida.

```javascript
const texto = '{"nombre": "Ana",}';

try {
  const usuario = JSON.parse(texto);
  console.log(usuario.nombre); // No se ejecuta porque JSON.parse() falla.
} catch (error) {
  console.log('Error capturado:', error.name); // Error capturado: SyntaxError
  console.log(typeof error.message); // string
}

console.log('El programa continúa'); // El programa continúa
```

Fuente: [Try/Catch](https://www.aprendejavascript.dev/clase/manejo-de-errores/try-catch).

### 8.2. Finally

#### Ejecutar la limpieza antes de completar una salida del bloque

**Definición breve:** `finally` se ejecuta al abandonar `try` y su posible `catch`, tanto si la operación termina correctamente como si falla, e incluso antes de completar un `return`. Sirve para liberar recursos o restablecer estados. Puede usarse en `try/finally` sin `catch`; en ese caso, una excepción sigue propagándose después de la limpieza. Un `return` o `throw` dentro de `finally` reemplaza la salida pendiente.

**Ejemplo:** comprobar que la limpieza ocurre antes del retorno, con y sin error.

```javascript
function procesar(simularFallo) {
  try {
    if (simularFallo) {
      throw new Error('Dato inválido');
    }
    console.log('Procesando');
    return 'Correcto';
  } catch (error) {
    console.log(error.message);
    return 'Fallido';
  } finally {
    console.log('Limpieza completada');
  }
}

console.log(procesar(false));
// Salida: Procesando / Limpieza completada / Correcto

console.log(procesar(true));
// Salida: Dato inválido / Limpieza completada / Fallido
```

Fuente: [Finally](https://www.aprendejavascript.dev/clase/manejo-de-errores/finally).

### 8.3. Errores Personalizados

#### Lanzar errores descriptivos y distinguirlos por su tipo

**Definición breve:** `throw` lanza una excepción e interrumpe el flujo actual hasta que un `catch` la gestione o quede sin capturar. `new Error(mensaje)` crea un error, pero no lo lanza por sí solo. Puedes usar tipos como `TypeError` o `RangeError`, o extender `Error` para añadir contexto y reconocer tus errores mediante `instanceof`. Los mensajes deben explicar el problema concreto.

**Ejemplo:** definir un error con la cantidad inválida y capturarlo de forma específica.

```javascript
class ErrorCantidad extends Error {
  constructor(cantidad) {
    super('La cantidad debe ser un entero positivo');
    this.name = 'ErrorCantidad';
    this.cantidad = cantidad;
  }
}

function validarCantidad(cantidad) {
  if (!Number.isInteger(cantidad) || cantidad <= 0) {
    throw new ErrorCantidad(cantidad);
  }
  return cantidad;
}

try {
  console.log(validarCantidad(3)); // 3
  validarCantidad(0);
} catch (error) {
  if (error instanceof ErrorCantidad) {
    console.log(error.name + ': ' + error.message);
    // ErrorCantidad: La cantidad debe ser un entero positivo
    console.log('Valor recibido:', error.cantidad); // Valor recibido: 0
  } else {
    throw error; // Los errores de otro tipo se vuelven a lanzar.
  }
}
```

Fuente: [Errores Personalizados](https://www.aprendejavascript.dev/clase/manejo-de-errores/custom-errors).
## 9. Programación asíncrona

Coordinación de tareas que terminan más tarde y permiten que el resto del programa continúe mientras esperan.

### 9.1. Callbacks

#### Pasar una función para ejecutarla en el momento adecuado

**Definición breve:** Un callback es una función que se pasa a otra para que esta la invoque. Puede ejecutarse de forma síncrona o asíncrona, según la operación. `setTimeout()` programa una ejecución tras un retraso mínimo; `setInterval()` programa repeticiones que se detienen con `clearInterval()`. Muchas dependencias anidadas pueden producir código difícil de seguir, conocido como *callback hell*.

**Ejemplo:** recibir un saludo después de que el código principal haya continuado.

```javascript
function prepararSaludo(nombre, callback) {
  setTimeout(() => {
    callback('Hola, ' + nombre);
  }, 100);
}

console.log('Inicio');
prepararSaludo('Nora', mensaje => {
  console.log(mensaje);
});
console.log('El programa continúa');
// Orden: Inicio / El programa continúa / Hola, Nora
// El saludo aparece después del temporizador, no antes del último console.log().
```

Fuente: [Callbacks](https://www.aprendejavascript.dev/clase/programacion-asincrona/callbacks).

### 9.2. Promises (Promesas) - Básico

#### Representar un resultado futuro y encadenar operaciones

**Definición breve:** Una promesa representa un resultado que puede estar pendiente (`pending`), cumplido (`fulfilled`) o rechazado (`rejected`). Una vez cumplida o rechazada, su estado no cambia. `new Promise()` recibe un ejecutor con `resolve` y `reject`. `.then()` transforma resultados y devuelve otra promesa; `.catch()` gestiona rechazos anteriores de la cadena. Devuelve el valor o la promesa del siguiente paso para encadenarlos correctamente.

**Ejemplo:** duplicar un número de forma diferida y transformar el resultado.

```javascript
function duplicarDespues(numero) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!Number.isFinite(numero)) {
        reject(new TypeError('Se esperaba un número finito'));
        return;
      }
      resolve(numero * 2);
    }, 100);
  });
}

duplicarDespues(6)
  .then(resultado => resultado + 1)
  .then(resultado => console.log(resultado)) // 13
  .catch(error => console.log(error.message));
```

Fuente: [Promises (Promesas) - Básico](https://www.aprendejavascript.dev/clase/programacion-asincrona/promises-basico).

### 9.3. Promises (Promesas) - Avanzado

#### Coordinar varias promesas y conservar información sobre sus resultados

**Definición breve:** Las promesas pueden combinarse para coordinar tareas. `Promise.resolve()` adopta un valor o promesa; `Promise.reject()` crea un rechazo. `.finally()` permite limpiar al finalizar y conserva el resultado, salvo que su callback lance un error o devuelva una promesa rechazada. Los combinadores no cancelan automáticamente las demás tareas.

| Método | Comportamiento |
| --- | --- |
| `Promise.all()` | Espera todas y devuelve valores en el orden de entrada; rechaza si alguna falla. |
| `Promise.race()` | Adopta la primera en completarse, con éxito o error. |
| `Promise.allSettled()` | Espera todas y devuelve su estado y valor o motivo de rechazo. |

**Ejemplo:** consultar todos los resultados aunque una operación falle.

```javascript
const tareas = [
  Promise.resolve('Archivo listo'),
  Promise.reject(new Error('Sin conexión'))
];

Promise.allSettled(tareas)
  .then(resultados => {
    for (const resultado of resultados) {
      if (resultado.status === 'fulfilled') {
        console.log('Éxito:', resultado.value);
      } else {
        console.log('Error:', resultado.reason.message);
      }
    }
  })
  .finally(() => console.log('Revisión terminada'));
// Orden: Éxito: Archivo listo / Error: Sin conexión / Revisión terminada
```

Fuente: [Promises (Promesas) - Avanzado](https://www.aprendejavascript.dev/clase/programacion-asincrona/promises-avanzado).

### 9.4. Fetch API

#### Consultar servidores y procesar respuestas HTTP

**Definición breve:** `fetch(url, opciones)` realiza una petición y devuelve una promesa con un objeto `Response`. `ok` indica un estado HTTP entre 200 y 299; `json()` lee e interpreta el cuerpo y devuelve otra promesa. Un estado 404 o 500 no rechaza por sí solo la promesa de `fetch`: comprueba `ok`. Las opciones permiten configurar `method`, `headers` y `body`, por ejemplo para enviar JSON.

**Ejemplo:** consultar una publicación de la API pública de práctica usada por el curso. Requiere conexión y acceso al servicio.

```javascript
fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then(respuesta => {
    if (!respuesta.ok) {
      throw new Error('HTTP ' + respuesta.status);
    }
    return respuesta.json();
  })
  .then(publicacion => {
    console.log('Publicación:', publicacion.id);
  })
  .catch(error => {
    console.log('No se pudo consultar:', error.message);
  });
// Si el servicio responde correctamente: Publicación: 1
// Si hay un fallo HTTP, de conexión o de lectura, se ejecuta catch.
```

Fuente: [Fetch API](https://www.aprendejavascript.dev/clase/programacion-asincrona/fetch).

### 9.5. async/await

#### Escribir el consumo de promesas como una secuencia de pasos

**Definición breve:** Una función `async` siempre devuelve una promesa. `await` permite esperar un resultado dentro de ella sin bloquear el resto del programa; si la promesa se rechaza, lanza una excepción en ese punto, que puede gestionarse con `try/catch`. Para tareas independientes, inicia sus operaciones y usa `Promise.all()` para esperar sus resultados juntos, evitando esperas secuenciales innecesarias.

**Ejemplo:** esperar dos resultados y comprobar que el programa continúa antes de obtener el total.

```javascript
async function mostrarTotal() {
  try {
    const [primero, segundo] = await Promise.all([
      Promise.resolve(12),
      Promise.resolve(18)
    ]);
    console.log('Total:', primero + segundo);
  } catch (error) {
    console.log('Error:', error.message);
  }
}

console.log('Inicio');
const tarea = mostrarTotal();
console.log('El programa continúa');
tarea.then(() => console.log('Proceso terminado'));
// Orden: Inicio / El programa continúa / Total: 30 / Proceso terminado
```

Fuente: [async/await](https://www.aprendejavascript.dev/clase/programacion-asincrona/async-await).

## 10. Módulos

Organización del código en archivos que comparten únicamente las funciones, variables y clases que deciden exportar.

Para probar cada tema, guarda sus archivos en una carpeta independiente y añade este `index.html`. Abre la carpeta mediante un servidor HTTP local y consulta la consola del navegador.

```html
<!doctype html>
<meta charset="utf-8">
<script type="module" src="./main.js"></script>
```

### 10.1. ¿Qué son los Módulos?

#### Separar responsabilidades y mantener un ámbito propio

**Definición breve:** Los módulos dividen el código en archivos con dependencias explícitas y un ámbito propio, evitando colisiones de nombres globales. ES Modules usa `export` e `import` y ejecuta su código en modo estricto. En el navegador se activa con `type="module"`; en Node.js puede utilizarse `.mjs` o la configuración `"type": "module"`. CommonJS es otro sistema, basado en `require()` y `module.exports`.

**Ejemplo:** mantener un prefijo interno y compartir una función.

```javascript
// mensaje.js
const prefijo = 'Curso';

export function crearMensaje(tema) {
  return prefijo + ': ' + tema;
}
```

```javascript
// main.js
import { crearMensaje } from './mensaje.js';

console.log(crearMensaje('JavaScript')); // Curso: JavaScript
```

Fuente: [¿Qué son los Módulos?](https://www.aprendejavascript.dev/clase/modulos/que-son-los-modulos).

### 10.2. Export e Import

#### Compartir elementos por nombre o mediante una exportación predeterminada

**Definición breve:** `export` hace accesible un elemento desde otros módulos. Las exportaciones nombradas se importan entre llaves; cada módulo admite como máximo una exportación `default`, que se importa sin llaves y puede recibir otro nombre. `as` permite crear alias y `import * as nombre` agrupa las exportaciones en un espacio de nombres. También es posible reexportar elementos de otro archivo.

**Ejemplo:** combinar una función predeterminada con una constante nombrada y un alias.

```javascript
// texto.js
export default function limpiar(texto) {
  return texto.trim();
}

export const SEPARADOR = ' | ';
```

```javascript
// main.js
import limpiar, { SEPARADOR as separador } from './texto.js';

console.log(limpiar('  hola  ') + separador + 'listo'); // hola | listo
```

Fuente: [Export e Import](https://www.aprendejavascript.dev/clase/modulos/export-e-import).

### 10.3. Importaciones Dinámicas

#### Cargar un módulo cuando se necesita

**Definición breve:** `import(ruta)` carga un módulo bajo demanda y devuelve una promesa con su espacio de nombres. Puede usarse dentro de funciones o condicionales y consumirse con `.then()` o `await`. Sirve para cargar funcionalidades opcionales y reducir el código necesario al inicio. Si existe una exportación predeterminada, aparece en la propiedad `default` del módulo importado.

**Ejemplo:** esperar la carga de una función de formato. Este `main.js` se ejecuta como módulo y admite `await` en el nivel superior.

```javascript
// formato.js
export function destacar(texto) {
  return texto.toUpperCase();
}
```

```javascript
// main.js
try {
  const { destacar } = await import('./formato.js');
  console.log(destacar('carga diferida')); // CARGA DIFERIDA
} catch (error) {
  console.log('No se pudo cargar:', error.message);
}
```

Fuente: [Importaciones Dinámicas](https://www.aprendejavascript.dev/clase/modulos/importaciones-dinamicas).

### 10.4. Patrones y Buenas Prácticas

#### Organizar dependencias y definir una interfaz pública clara

**Definición breve:** Cada módulo debe tener una responsabilidad clara. Centraliza la configuración, importa solo lo necesario y evita dependencias circulares. Un archivo barril reexporta elementos para ofrecer un punto de entrada; conviene limitarlo para no introducir cadenas de dependencias innecesarias. Una fachada simplifica el acceso a una API. Los nombres descriptivos y las rutas explícitas facilitan encontrar el código.

**Ejemplo:** separar configuración, formato y punto de entrada público.

```javascript
// config.js
export const MONEDA = 'MXN';
```

```javascript
// formato.js
import { MONEDA } from './config.js';

export function formatearMonto(cantidad) {
  return cantidad.toFixed(2) + ' ' + MONEDA;
}
```

```javascript
// index.js
export { formatearMonto } from './formato.js';
```

```javascript
// main.js
import { formatearMonto } from './index.js';

console.log(formatearMonto(35)); // 35.00 MXN
```

Fuente: [Patrones y Buenas Prácticas](https://www.aprendejavascript.dev/clase/modulos/patrones-y-buenas-practicas).

## 11. DOM y Eventos

Selección y modificación de elementos HTML, y respuesta a acciones del usuario o del navegador.

Guarda cada ejemplo como un archivo `.html` independiente y ábrelo en el navegador. Los scripts están después de los elementos que utilizan, para que estos ya existan al ejecutarse.

### 11.1. Selección de Elementos

#### Encontrar nodos de la página desde JavaScript

**Definición breve:** El DOM representa el documento como un árbol de nodos y `document` es su punto de acceso. `querySelector()` usa selectores CSS y devuelve el primer elemento coincidente o `null`; `querySelectorAll()` devuelve una `NodeList` estática. `getElementById()` busca un identificador sin `#`. `getElementsByClassName()` y `getElementsByTagName()` devuelven colecciones vivas. Comprueba la existencia del elemento antes de utilizarlo.

**Ejemplo:** consultar un título, contar elementos y buscar un identificador ausente.

```html
<!doctype html>
<meta charset="utf-8">
<h1 id="titulo">Práctica DOM</h1>
<ul id="temas">
  <li class="tema">HTML</li>
  <li class="tema">JavaScript</li>
</ul>
<script>
  const titulo = document.getElementById('titulo');
  const temas = document.querySelectorAll('#temas .tema');

  console.log(titulo?.textContent); // Práctica DOM
  console.log(temas.length); // 2
  console.log(document.querySelector('#ausente')); // null
</script>
```

Fuente: [Selección de Elementos](https://www.aprendejavascript.dev/clase/dom-y-eventos/seleccion-elementos).

### 11.2. Manipulación del DOM

#### Cambiar contenido, atributos y estructura de la página

**Definición breve:** `textContent` trabaja con texto; `innerHTML` interpreta marcado HTML. Para mostrar datos introducidos por usuarios, usa texto en lugar de interpretarlos como HTML. `setAttribute()` modifica atributos, `classList` administra clases y `style` permite cambiar estilos en línea. `createElement()` crea nodos; `append()` o `appendChild()` los insertan y `remove()` los retira del documento.

**Ejemplo:** crear un elemento, configurarlo, insertarlo y retirarlo.

```html
<!doctype html>
<meta charset="utf-8">
<ul id="lista"></ul>
<script>
  const lista = document.querySelector('#lista');
  const elemento = document.createElement('li');
  elemento.textContent = 'Tema añadido';
  elemento.classList.add('activo');
  elemento.setAttribute('data-tema', 'dom');
  lista.append(elemento);

  console.log(lista.children.length); // 1
  console.log(elemento.textContent); // Tema añadido
  console.log(elemento.classList.contains('activo')); // true

  elemento.remove();
  console.log(lista.children.length); // 0
</script>
```

Fuente: [Manipulación del DOM](https://www.aprendejavascript.dev/clase/dom-y-eventos/manipulacion-dom).

### 11.3. Eventos y Event Listeners

#### Responder a acciones y gestionar sus manejadores

**Definición breve:** Eventos como `click`, `input`, `keydown` o `submit` permiten reaccionar a acciones. `addEventListener()` registra un manejador; `removeEventListener()` lo retira usando el mismo tipo, función y valor de captura. El evento informa de su origen con `target` y del elemento que lo atiende con `currentTarget`. `preventDefault()` cancela una acción predeterminada cancelable. La delegación aprovecha la propagación para atender eventos de hijos desde un contenedor.

**Ejemplo:** activar un enlace sin navegar y retirar después el manejador.

```html
<!doctype html>
<meta charset="utf-8">
<a id="accion" href="#destino">Activar</a>
<output id="estado">Esperando</output>
<script>
  const accion = document.querySelector('#accion');
  const estado = document.querySelector('#estado');

  function activar(evento) {
    evento.preventDefault();
    estado.textContent = 'Activado';
    console.log(evento.type); // click
    console.log(evento.currentTarget.id); // accion
  }

  accion.addEventListener('click', activar);
  accion.click(); // Simula la activación para comprobar el ejemplo.
  accion.removeEventListener('click', activar);
  console.log(estado.textContent); // Activado
</script>
```

Fuente: [Eventos y Event Listeners](https://www.aprendejavascript.dev/clase/dom-y-eventos/eventos).


## 12. Sets y Maps

Colecciones para mantener valores únicos, asociar claves de distintos tipos y gestionar referencias débiles.

### 12.1. ¿Qué son Set y Map?

#### Elegir entre valores únicos y asociaciones de clave y valor

**Definición breve:** `Set` almacena valores sin duplicados; `Map` asocia claves con valores y admite claves de cualquier tipo. Ambos conservan el orden de inserción. Son alternativas útiles a un array cuando importa la unicidad, o a un objeto cuando las claves son dinámicas o no son cadenas ni símbolos. Los arrays siguen siendo adecuados para acceso por índice y los objetos para entidades con propiedades conocidas.

**Ejemplo:** eliminar repeticiones y distinguir claves numéricas de claves de texto.

```javascript
const temas = new Set(['DOM', 'DOM', 'Módulos']);
const etiquetas = new Map([
  [1, 'número'],
  ['1', 'texto']
]);

console.log([...temas]); // ['DOM', 'Módulos']
console.log(etiquetas.get(1)); // número
console.log(etiquetas.get('1')); // texto
```

Fuente: [¿Qué son Set y Map?](https://www.aprendejavascript.dev/clase/sets-y-maps/introduccion).

### 12.2. Set

#### Añadir, comprobar y eliminar valores únicos

**Definición breve:** `new Set(iterable)` crea un conjunto sin duplicados. `add()` añade y devuelve el propio conjunto; `has()` comprueba un valor y `delete()` indica si lo eliminó. `size` informa del tamaño y `clear()` vacía la colección. Puede recorrerse con `for...of` o `forEach()`. Compara objetos por identidad; para los primitivos usa `SameValueZero`, que considera iguales dos valores `NaN` y también `0` y `-0`.

**Ejemplo:** gestionar nombres únicos y comprobar el comportamiento de `NaN`.

```javascript
const visitas = new Set(['Ana', 'Leo', 'Ana']);
visitas.add('Eva').add('Leo');

console.log(visitas.size); // 3
console.log(visitas.has('Leo')); // true
console.log(visitas.delete('Ana')); // true
console.log([...visitas]); // ['Leo', 'Eva']
console.log(new Set([NaN, NaN]).size); // 1

visitas.clear();
console.log(visitas.size); // 0
```

Fuente: [Set](https://www.aprendejavascript.dev/clase/sets-y-maps/set).

Referencia complementaria: [Igualdad de valores en Set y Map (MDN)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Keyed_collections).

### 12.3. Operaciones con Sets

#### Combinar conjuntos y comprobar relaciones entre ellos

**Definición breve:** Los métodos de conjuntos permiten combinar valores y comparar pertenencias. Las operaciones que producen un conjunto devuelven uno nuevo, sin modificar los originales; las comprobaciones devuelven booleanos. Estos métodos requieren un entorno que los implemente, como navegadores modernos o Node.js 22 y posteriores.

| Método | Resultado |
| --- | --- |
| `union()` | Valores de ambos conjuntos. |
| `intersection()` | Valores compartidos. |
| `difference()` | Valores del primero ausentes en el segundo. |
| `symmetricDifference()` | Valores presentes en uno solo de los conjuntos. |
| `isSubsetOf()` | Si el primero está contenido en el segundo. |
| `isSupersetOf()` | Si el primero contiene al segundo. |
| `isDisjointFrom()` | Si no comparten valores. |

**Ejemplo:** calcular combinaciones y relaciones.

```javascript
const a = new Set([1, 2, 3]);
const b = new Set([3, 4]);

console.log([...a.union(b)]); // [1, 2, 3, 4]
console.log([...a.intersection(b)]); // [3]
console.log([...a.difference(b)]); // [1, 2]
console.log([...a.symmetricDifference(b)]); // [1, 2, 4]
console.log(new Set([1, 2]).isSubsetOf(a)); // true
console.log(a.isSupersetOf(new Set([3]))); // true
console.log(a.isDisjointFrom(b)); // false
```

Fuente: [Operaciones con Sets](https://www.aprendejavascript.dev/clase/sets-y-maps/operaciones).

### 12.4. Map

#### Asociar datos con claves de cualquier tipo

**Definición breve:** `new Map()` crea una colección de pares `[clave, valor]`. `set()` añade o actualiza, `get()` consulta y `has()` comprueba una clave. `delete()` elimina una entrada, `clear()` vacía el mapa y `size` cuenta las entradas. Las claves de tipo objeto se comparan por identidad. `for...of`, `keys()`, `values()` y `entries()` permiten recorrer la colección en orden de inserción.

**Ejemplo:** usar un objeto como clave y actualizar sus puntos.

```javascript
const ana = { nombre: 'Ana' };
const puntos = new Map();
puntos.set(ana, 10).set('equipo', 25);
puntos.set(ana, 15);

console.log(puntos.get(ana)); // 15
console.log(puntos.get({ nombre: 'Ana' })); // undefined
console.log(puntos.has('equipo')); // true
console.log(puntos.size); // 2
console.log([...puntos.values()]); // [15, 25]

puntos.delete('equipo');
console.log(puntos.size); // 1
puntos.clear();
console.log(puntos.size); // 0
```

Fuente: [Map](https://www.aprendejavascript.dev/clase/sets-y-maps/map).

### 12.5. WeakSet y WeakMap

#### Asociar información sin impedir la recolección de objetos

**Definición breve:** `WeakMap` mantiene referencias débiles a sus claves; `WeakSet`, a sus valores. Permiten asociar metadatos o marcar objetos sin impedir su recolección cuando dejan de ser alcanzables por otras referencias. Admiten objetos y símbolos no registrados, y no son iterables ni tienen `size`. El momento de la recolección no es determinista: asignar `null` no garantiza una eliminación inmediata.

**Ejemplo:** guardar metadatos y registrar un objeto visitado.

```javascript
let usuario = { nombre: 'Ana' };
const metadatos = new WeakMap();
const visitados = new WeakSet();

metadatos.set(usuario, { activo: true });
visitados.add(usuario);
console.log(metadatos.get(usuario).activo); // true
console.log(visitados.has(usuario)); // true
console.log(metadatos.has({ nombre: 'Ana' })); // false

visitados.delete(usuario);
console.log(visitados.has(usuario)); // false
usuario = null; // El objeto queda disponible para su eventual recolección.
```

Fuente: [WeakSet y WeakMap](https://www.aprendejavascript.dev/clase/sets-y-maps/weak).

Referencia complementaria: [Colecciones débiles y claves permitidas (MDN)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Keyed_collections).

## 13. Proyecto: calculadora interactiva con DOM y Eventos

*De una interfaz con botones a una calculadora con teclado e historial.*

El proyecto del curso consiste en desarrollar una calculadora web para practicar cómo JavaScript conecta las acciones del usuario con cambios visibles en una página. Su construcción se reparte en tres lecciones, aquí reunidas como un único proceso. El DOM es la representación de los elementos HTML que JavaScript puede consultar y modificar; los eventos son avisos de acciones, como un clic o una pulsación.

![Interfaz inicial de la calculadora con pantalla, botones e historial vacío](</img/calculadora-interfaz.jpg>)

*Captura 1. Calculadora abierta en el servidor local: los botones permiten introducir datos y el panel inferior reúne las operaciones realizadas.*

Los siguientes bloques son fragmentos didácticos simplificados para explicar el funcionamiento, no una copia completa del código de la aplicación. Comparten el estado y las funciones del proyecto; deben leerse en ese contexto.

Se comenzó separando el trabajo en tres archivos: `index.html` para la estructura, `calculadora.css` para la apariencia y `calculadora.js` para el comportamiento. El HTML incluyó una pantalla y botones. JavaScript localizó esos elementos con `getElementById()` y `querySelectorAll()`, y registró sus clics mediante `addEventListener()`. Los atributos `data-numero` permitieron identificar cada dígito. La entrada se guardó como texto para formar números de varias cifras, impedir puntos decimales repetidos y actualizar la pantalla con `textContent`. También se incorporaron los botones de limpiar y borrar el último carácter. [Fuente: estructura y primeros clics](https://www.aprendejavascript.dev/clase/dom-y-eventos/proyecto-estructura).

**La estructura y los primeros clics.** Esta muestra de HTML relaciona una pantalla con un botón. El atributo `data-numero` guarda el valor que JavaScript leerá al pulsarlo.

```html
<!-- Fragmento de index.html: la aplicación contiene más botones. -->
<div id="operacion-anterior"></div>
<div id="operacion-actual">0</div>
<button class="btn-numero" data-numero="5">5</button>
```

```javascript
const displayActual = document.getElementById('operacion-actual');
let numeroActual = '0';

document.querySelectorAll('.btn-numero').forEach(boton => {
  boton.addEventListener('click', () => {
    const digito = boton.dataset.numero;
    if (digito === '.' && numeroActual.includes('.')) return;
    numeroActual = numeroActual === '0' && digito !== '.'
      ? digito
      : numeroActual + digito;
    displayActual.textContent = numeroActual;
  });
});
```

Aquí se construye texto: pulsar `5` y después `3` forma `53`, no realiza todavía una suma. La lógica de cálculo se añade a continuación.

Después se añadió el cálculo. Para recordar la operación pendiente se mantuvo un estado: el número actual, el anterior, el operador elegido y una bandera que indica cuándo comenzar una entrada nueva. Las funciones de introducir cifras, seleccionar operadores y actualizar la pantalla separaron responsabilidades. Al pulsar igual, `parseFloat()` convirtió el texto a números y un `switch` eligió entre suma, resta, multiplicación y división. Se incorporaron el encadenamiento de operaciones, el redondeo a ocho decimales para reducir artefactos de representación y un error explícito al dividir entre cero, capturado con `try/catch` y mostrado temporalmente. Así, al introducir `5`, `+`, `3` e `=`, se muestra `8`; el siguiente dígito comienza otro número. [Fuente: operaciones de la calculadora](https://www.aprendejavascript.dev/clase/dom-y-eventos/proyecto-operaciones).

![Calculadora con la operación cinco más tres preparada antes de pulsar igual](</img/calculadora-operacion.jpg>)

*Captura 2. La línea superior recuerda `5 +` y la principal muestra el segundo número, `3`: la operación está preparada, pero todavía no se ha resuelto.*

**El cálculo y sus errores.** Esta función resume la elección de la operación. Recibe números ya convertidos; la aplicación completa se encarga además de actualizar el estado y redondear el resultado.

```javascript
function resolver(primero, signo, segundo) {
  switch (signo) {
    case '+': return primero + segundo;
    case '-': return primero - segundo;
    case '×': return primero * segundo;
    case '÷':
      if (segundo === 0) throw new Error('División por cero');
      return primero / segundo;
    default: throw new Error('Operación no reconocida');
  }
}

try {
  console.log(resolver(5, '+', 3)); // 8
} catch (error) {
  displayActual.textContent = error.message;
}
```

La última ampliación permitió usar el teclado sin duplicar los cálculos: el evento `keydown` llamó a las mismas funciones que los botones. Se tradujeron `*` y `/` a multiplicación y división; `Enter` resolvió, `Escape` limpió y `Backspace` borró. Cuando correspondía, `preventDefault()` evitó acciones del navegador.

**El teclado reutiliza la lógica existente.** Este fragmento muestra números, operadores e igual; las funciones llamadas pertenecen a la calculadora completa. Limpiar y borrar se conectan de la misma manera.

```javascript
document.addEventListener('keydown', evento => {
  const tecla = evento.key;
  const signos = { '+': '+', '-': '-', '*': '×', '/': '÷' };
  if (/^[0-9.]$/.test(tecla)) {
    evento.preventDefault();
    agregarNumero(tecla);
  } else if (Object.hasOwn(signos, tecla)) {
    evento.preventDefault();
    seleccionarOperador(signos[tecla]);
  } else if (tecla === 'Enter' || tecla === '=') {
    evento.preventDefault();
    calcular();
  }
});
```

También se creó un historial con las diez operaciones más recientes, almacenadas en un array. Cada registro se convirtió en un elemento visible con `createElement()`, `textContent` y `appendChild()`. Al pulsarlo, su resultado volvió a la pantalla para reutilizarlo. Para conservar los registros entre sesiones se utilizó `localStorage`: `JSON.stringify()` preparó los datos para guardarlos y `JSON.parse()` los recuperó. Un botón permitió vaciar el historial. [Fuente: teclado e historial](https://www.aprendejavascript.dev/clase/dom-y-eventos/proyecto-teclado-historial).

**Guardar y representar una operación.** La muestra conserva hasta diez registros y crea su representación visual. En el proyecto completo se añaden la recuperación inicial con `JSON.parse()`, el clic para reutilizar resultados y el botón de vaciado.

```javascript
let historial = [];
const listaHistorial = document.getElementById('lista-historial');

function registrarOperacion(texto) {
  historial = [texto, ...historial].slice(0, 10);
  localStorage.setItem('calculadora-historial', JSON.stringify(historial));

  listaHistorial.replaceChildren();
  historial.forEach(registro => {
    const fila = document.createElement('div');
    fila.className = 'operacion-historial';
    fila.textContent = registro;
    listaHistorial.appendChild(fila);
  });
}

// Se llama tras resolver correctamente el cálculo:
// registrarOperacion('5 + 3 = 8');
```

![Resultado ocho en la calculadora y registro cinco más tres igual a ocho en el historial](</img/calculadora-historial.jpg>)

*Captura 3. Al pulsar igual, la pantalla muestra `8` y el historial incorpora `5 + 3 = 8`. Esta secuencia se realizó en la calculadora local para obtener las capturas.*

En conjunto, se trabajó la selección y modificación del DOM, los eventos, las funciones reutilizables, el estado, los arrays, los errores y el almacenamiento local. Para comprobar el resultado, el curso propone realizar operaciones, probar el teclado, recuperar resultados del historial y volver a abrir la aplicación para revisar su conservación.
