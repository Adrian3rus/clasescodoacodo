// OPERADORES
// **************************************************
// Aritméticos: + , - , * , / , ** , %
// **************************************************
// Precedencia es igual que en las matemáticas que conocemos
let operacionMatematica = 5 ** 3 * 2 - 100 + 5 % 2 - 4
//                         125 * 2   - 100 +   1  -  4
//                          250   - 100  + 1  - 4  = 147
console.log(operacionMatematica);

// **************************************************
// De comparación: < , > , <= , >= , == , != (devuelven booleanos)
// **************************************************
let mayorEdad = 43 > 18; // true
let combinacionOperadores = 4 * 2 > 15 / 3; //  1ro se resuelven los aritméticos, luego la comparación
console.log(combinacionOperadores);

// Identidad === , !==
let esIgual = "4" == 4; // true
esIgual = "4" === 4; // false

// **************************************************
// Lógicos: && (conjunción ó «y»), || (disyunción u «ó») y ! (negación -unario-) también devuelven booleanos.
// **************************************************
// Conjunción

console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);

// Disyunción

console.log(true || false)
console.log(false || false)
console.log(true || true)
console.log(false || true)

// Negación


console.log(!true)
console.log(!false)


let operadoresCombinados = 5 ** 3 > 301 % 3 && !true || "hola" != "HOLA";

console.log(operadoresCombinados)

// CUADROS DE DIÁLOGO (alert, prompt, confirm)
// No son de uso habitual, pero en éste punto nos sirven para interactuar con nuestra página, sitio o aplicación.
// Estos mensajes automatizados tienen dos inconvenientes:
// No hay una forma estándar de cambiar su aspecto con CSS.
// Dependen de la configuración regional del navegador, lo que significa que puedes tener una página en un idioma pero un mensaje de error en otro idioma.


let edad = "cincuenta"
let validadEdad = Number(edad)

if (edad > 0 && edad < 120 && validadEdad != NaN){
     if (validadEdad < 16){
          console.log("Aun no podes votar. ");
     } else if (validadEdad)
}
