var firstName; //undefined
firstName = 'Oscar';
console.log(firstName);

var lastName = 'David';// declarar y asignar
lastName = 'Ana'; //reasignar
console.log(lastName);

var secondName = 'David';//declarando y asignando
var secondName = 'Ana'; //redeclarando y reasignando
console.log(secondName);



//let
let fruit = 'Apple';//declara y asigna
fruit = 'kiwi'; //reasignar
console.log(fruit)

let fruit = 'Banana';//No es posible redeclarar

//const
const animal = 'Dog'; //Declaración y asignación
animal = 'Cat'; //No se puede reasignar
console.log(animal);

//Cuando trabajamos con arrays se pueden usar los métodos del array
const vehicles =[]; //Se asigna un array vacío
vehicles.push('🚓🚓'); //Se agrega información al array
console.log(vehicles);

vehicles.pop();
console.log(vehicles);