/* let nombre ="Alejadnro"; */

let lenguajes = ['Python','Javascript','Java', 'PHP', 'Cobol'];

console.log(lenguajes[2]);
console.log(lenguajes);
console.log(typeof lenguajes);
console.log(lenguajes instanceof Array);
console.log(lenguajes instanceof Object);

// propiedades
//  - Orden: Son ordenados, tienen indices de 0 ... n
// - tipos de datos: cualquier tipo de dato (primitivos o complejos)

let variosTipos = [true, 3.14, "soy una cadena", [1,2]];

console.log(variosTipos);

// Mutabilidad:

variosTipos.pop();
console.log(variosTipos)
variosTipos[2] = 'Codo a codo';
console.log(variosTipos);
variosTipos[0] = 5;
console.log(variosTipos);
variosTipos.push(false);
console.log(variosTipos)

// recorrido 
console.log('cant. de lenguajes: ${lenguajes.length}');

let listaArray = document.querySelector('#listaArray')

// recorrido bucle for ...
// for (let i = 0; i < lenguajes.length; i++) {
//  let item = document.createElement('li');
//  item.className = 'itemLista';
//  item.innerHTML = lenguajes[i];
//  listaArray.appendChild(item);
// };

// ... utilizando for... of - exclusivo de los array´s
for (let elemento of lenguajes) {
    console.log(elemento);
    let item = document.createElement('li');
    item.className = 'itemLista';
    item.innerHTML = elemento;
    listaArray.appendChild(item);
}



// referencia POO // en JS es "Sintatic Sugar"... porque siempre son prototipos!!

// class personas {};
// class usuario extends personas {};
// class admin extends personas {};

// let user = new usuario();
