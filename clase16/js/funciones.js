const saludar = function (nombre, comision) {
    return `hola, soy ${nombre}! estoy en la ${comision}`

}

let frase = saludar ('Christian', 24265) + ' CAC Python FS';

console.log(frase)

// IIFE expresion de funcion inmediatamente invocada
// (function () {
//     let frase = `soy una funcion anonima, me ejecturo luego de definir`
//     console.log(frase);
// })();

// callback 
// funcion que recibe como parametro otra funcion.

let recorrer = function(elemento, indice) {
    console.log (`indice: ${indice} - elemento: ${elemento}`);
}

let lenguajes = ['python', 'javascript', 'SQL'];

lenguajes.forEach(recorrer);

lenguajes.forEach((elemento, indice)=>{
    console.log(`indice: ${indice} - elemento: ${elemento}`);
});

