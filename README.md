# Resumen de JavaScript: Introducción, Estructuras de control, Funciones, Arrays, Objetos, Tipos de datos primitivos y Referencias y Prototipos

Síntesis de los 45 temas de estas siete secciones de [Aprende JavaScript](https://www.aprendejavascript.dev/), curso de midudev. Cada tema incluye título, subtítulo, definición breve y un ejemplo propio para practicar.

Los ejemplos son independientes: ejecuta cada bloque por separado en la consola del navegador. Los comentarios junto a `console.log()` indican la salida esperada.

## Índice

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
const duplicar = numero => numero * 2;

const sumar = (a, b) => {
  return a + b;
};

console.log(duplicar(9)); // 18
console.log(sumar(6, 4)); // 10
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