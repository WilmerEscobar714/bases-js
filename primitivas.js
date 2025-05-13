
//Variables primitivos son los datos que no se pueden dividir en partes más pequeñas
// String, Number, Boolean, Null, Undefined, Symbol y bigint

//Variables  no primitivos son los datos que se pueden dividir en partes más pequeñas
// Array, Object, Function, Date, RegExp, Map, Set, WeakMap, WeakSet

let nombre = "Juan";
console.log(nombre);

nombre = "Pedro";
console.log(nombre);

nombre = "Maria";
console.log(nombre);

console.log(typeof nombre); // String

nombre[0] = "J"; // No se puede cambiar un caracter de una cadena
console.log(nombre); // Maria
//Los primitivos son inmutables, no se pueden cambiar

let edad = 25;
console.log(edad);
edad = 30;
console.log(edad);  
console.log(typeof edad); // Number
//Los primitivos son inmutables, no se pueden cambiar
edad[0] = 2; // No se puede cambiar un caracter de un número
console.log(edad); // 30

let personaje = {
    nombre: "Juan",
    edad: 25,
    ciudad: "Madrid",
    habilidades: ["JavaScript", "HTML", "CSS"],
    direccion: {
        ciudad: "Madrid",
        pais: "España"
    },
    saludar: function() {
        console.log("Hola, soy " + this.nombre);
    }
};

personaje.nombre = "Pedro"; // Se puede cambiar el valor de una propiedad de un objeto
console.log('nombre',personaje.nombre); // Pedro
console.log('edad',personaje.edad); // 25

console.log('********')
console.log('personaje',personaje); // { nombre: 'Pedro', edad: 25, ciudad: 'Madrid', habilidades: [ 'JavaScript', 'HTML', 'CSS' ], direccion: { ciudad: 'Madrid', pais: 'España' }, saludar: [Function: saludar] }
console.log('********')


