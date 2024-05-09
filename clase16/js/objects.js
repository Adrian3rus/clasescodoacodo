// object (objecto)

let lenguaje = {
    nombre: 'Python', //clave: valor,
    interpretado: true, 
    // {prop1: false} , // claves: obj: NOO!!!
    3.14: false,
    "otra clave":[],
    }

console.log(lenguaje)


// orden: no son ordenados

console.log(lenguaje.nombre); // notacion de punto
console.log(lenguaje["nombre"]); // python dict

// tipo de datos - sobre los valores no hay restricciones => heterógeneos
//               - las claves: number, strin o cadenas de varias palabras en comillas dobles.



console.log(lenguaje["3.14"]);
console.log(lenguaje["otra clave"]);


// mutabilidad:

lenguaje["3.14"] = "constante Pi";
console.log(lenguaje);
lenguaje.tipado = "fuertemente y dinamico";
console.log(lenguaje);

// LAS CLAVES SON UNICAS!!!

let lenguajesVarios = [
    {
        nombre: 'python',
        interpretado: true,
        versiones: [1,2,3]
    },
    {
        nombre: 'java',
        interpretado: false,
        versiones: [15,16,17]
    },
    {
        nombre: 'javascript',
        interpretado: true
    }
];
