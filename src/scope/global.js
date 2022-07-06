//variables

var a; //declarando
var b = "b"; //decalaración y asignación
b = 'bb'; //reasignación de valor
var a = 'aa'; //redeclaración de la variable

//Global scope
var fruit = 'Apple'; //Variable global
console.log(fruit);

function bestFruit(){
    console.log(fruit);
}

bestFruit();

function countries(){
    country = 'Colombia'; //
    console.log(country);
}

countries();
console.log(country);