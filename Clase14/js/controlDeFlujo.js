// CONTROL DE FLUJO
// Estructuras condicionales (if - if...else - if...else if...else - switch...case)
// Estructuras repetitivas indeterminadas (while - do...while)
// Estructuras repetitivas determinadas (for (desde,hasta,paso) - for...of - for...in)
console.log("comienzo")


let limite = 5;
let contador =0;
let listaVacia = document.querySelector('#lista');


/* let listaConDatos = document.querySelector('#listaConDatos')
console.log(listaConDatos) */

while (contador < limite){
    //creo la etiqueta <li>
    let item = document.createElement('li');
    // cadena dinamica y la agrego como contenido a la etiqueta
    item.innerHTML = `Item dinamico N° ${contador}`;
    listaVacia.appendChild(item);
    contador++ //contador = contador +1
}




console.log("final")