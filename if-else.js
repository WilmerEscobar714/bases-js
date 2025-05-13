
//Condicionales if-else 
//Ejemplo 1

//Forma tradicional
let a=  5;

if (a > 10) {
    console.log("a es mayor que 10");
}else if (a < 10) {
    console.log("a es menor que 10"); 
}     

//Funcion Ternaria

let resultado = (a > 10) ? "a es mayor que 10" : "a es menor que 10";
console.log(resultado); // a es menor que 10

//switch
let dia = 3;

switch (dia) {
    case 1:
        console.log("Lunes");
        break;
    case 2:
        console.log("Martes");
        break;
    case 3:
        console.log("Miércoles");
        break;
    case 4:
        console.log("Jueves");
        break;
    case 5:
        console.log("Viernes");
        break;
    case 6:
        console.log("Sábado");
        break;
    case 7:
        console.log("Domingo");
        break;
    default:
        console.log("Día inválido");
}


