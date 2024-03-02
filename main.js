// Funciones
// ¿qué son las funciones y para que sirven?
// Es un conjunto de instrucciones que se agrupan
// para una TAREA CONCRETA

//¿CÓMO vamos a trabajar con estas funciones?

//1) Declarar función:


//Función declarativa
//Ejemplo: quiero hacer una función que se llame "Hola Mundo" 
//y que su tarea concreta sea la de:
// generar un console.log que me diga "Hola Mundo"

// function saludar(){
//     //acá colocamos las líneas de código que quiero que se ejecuten cada vez que yo llame a esta función
//     console.log("Hola Mundo");
// }
// saludar();
//2) Llamar a la función (Invocar) ¿cómo?:  la voy a llamar por su nombre

//Tenemos funciones que ejecutan una acción
//Tenemos otras funciones que además retornan un dato (RETURN)

//Tarea: retornar un número

// function retornarNum(){
//     return 3;
// }

// //en un caso de return, para invocar la función
// //tengo que guardarla adentro de una variable
// let numeroTres = retornarNum();
// console.log(numeroTres);

//Función que sume: 
//parámetros: son variables/datos 
//que se declaran entre los parentesis. 
// Son los datos que necesito para poder 
//ejecutar la función

//Ejemplo A
// function sumar(valorA, ValorB){
//     let resultado = valorA + ValorB;
//     return resultado;
// }

// let numeroUno= 200;
// let numeroDos= 300;

// let resultadoSuma = sumar(numeroUno, numeroDos);
// console.log(resultadoSuma);

//Ejemplo B
// function sumar (valorA, valorB){
//     return valorA - valorB
// }

// let resultadoSumaB = sumar (300, 200);
// console.log(resultadoSumaB)

//Ejemplo C

// function sumar (valorA, valorB){
//     return valorA + valorB;
// }
// console.log(sumar(10, 50));

/// SCOPE o Alcances de las variables ///

///el scope o ámbito de una variable es la zona del programa
// en la cual se define el CONTEXTO al que pertenece (la variable) 
//dentro del algoritmo.
//JS tiene dos ámbitos para las variables: locales y globales. 

//Ejemplo de variable global

// let global = 10;

// function ejemploA (){
//     console.log(global)
// }

// ejemploA();

//Ejemplo de la variable local

// function ejemploB(){
//     let resultadoEjemploB= 10 + 10;
//     console.log(resultadoEjemploB);
    
// }
// // console.log(resultadoEjemploB);
// ejemploB()

//Funciones ANÓNIMAS
// ES UNA FUNCIÓN QUE SE DEFINE SIN NOMBRE
//Y QUE SE UTILIZA PARA SER PASADA POR PARÁMETRO O ASIGNADA A UNA VARIABLE
//CREAR UNA FUNCIÓN ANÓNIMA QUE ME SUME DOS N° 
//Y ASOCIARLOS A UNA VARIABLE QUE:
// VA A ALMANACENAR UN DATO: 
//EN ESTE CASO EN RESULTADO DE LA SUMA.

// let sumaAnonima = function (a, b) {return a - b};
// console.log(sumaAnonima(1000, 3525));

//Función flecha
////Identificamos a las funciones flechas 
//como anónimas de sintaxis mas simplificada.

// let division = (a, b) => {return a/b}
// console.log(division (100, 5));

//Return implícito

// let multiplicar = (a, b) => a * b;
// console.log(multiplicar(50, 50));

// //función con un ÚNICO parámetro

// let nombre = a => console.log("Hola " + a);
// nombre("Luli")
// nombre("Lautaro")
// nombre ("Rubi");



//OBJETOS

//hasta la clase 4 podíamos agrupar los datos de esta forma:

// let nombreAlumno = "Luciana";
// let apellidoAlumno = "Garro";
// let edad = 30;

//con los objetos vamos agrupar estos datos de manera diferentes, 
//y muchos más práctica: en una única entidad.

//OBJETO
//Sintaxis: 

// let alumnoLuciana = {
//     nombre: "Luciana",
//     apellido: "Garro",
//     edad:31
// }

//Características: 
//** un objeto es una colección de datos relacioandos como una entidad */
// poseen PROPIEDADES Y MÉTODOS
//Propiedades: son datos que describen al objeto: nombre, apellido, edad, etc.
//propiedad: ¿Cómo se definen? como pares de nombre y valor 
//MÉTODOS: los métodos son funciones que se ejecutan en el objeto. 

//Ejemplo de objeto: 

// let perro = {
//     nombre: "coderdog",
//     edad: 5,
//     color: "negro"
// };

// console.log(perro)

// let auto = {
//     marca: "Ford",
//     modelo: "Mondeo",
//     fabricación: 2020,
//     precio: 7770000,
//     km: 150000
// };
// console.log(auto);
// console.log(typeof auto);

//Propiedades
//¿Cómo puedo ver las propiedades del objeto sin 
//verlo completo por consola?
// Hay dos maneras de acceder a las 
//propiedades almacenadas dentro del objeto 

//1) utilizo el nombre el objeto, luego un . (punto)

// console.log(auto.fabricación)

//2 otra forma: con corchetes
// console.log(auto ["precio"]);

//¿Puedo asignar nuevos valores a estas propiedad?
// auto.modelo = "Polo";
// console.log(auto.modelo);
// console.log(auto)

//¿Qué pasa si trabajo con const? 

// const yerba = {
//     nombre: "Playita",
//     precio: 1500,
//     cantidad: 100
// }
// console.log(yerba);
// yerba.precio = 450;
// console.log(yerba);

//cuando nosotros trabajamos con valores como number, string, un booleano: 
//estos se denominan valores PRIMARIOS
//y cuando nosotros queremos acceder a ellos vamos directo al valor de una variable.
//En el caso de const no se podía reacciones

//Cuando trabajo un objeto, este comportamiento cambia. ¿Por qué?
//porque accedemos a un valor de referencia, por eso lo puedo modificar, 
//a pesar de estar declarado el objeto como una constante. 

//FUCIONES CONSTRUCTORAS: en JS, el contructor de un objeto es una función que 
//usamos para crear un nuevo objeto cada vez que sea necesario. 
//Sintaxis:

// function Persona (nombre, apellido, edad){
//     this.nombre = nombre;
//     this.apellido = apellido;
//     this.edad = edad;

//     //**metodo saludar */
//     this.saludar = function (){
//         console.log("Hola, vos sos " + this.nombre);
//     }
// }

// let nombre = prompt ("Ingrese su nombre: ");
// let apellido = prompt ("Ingrese su apeliido  ");
// let edad= parseFloat(prompt(("Ingrese su edad")));

// const persona3 = new Persona (nombre, apellido, edad);
// console.log(persona3);
// persona3.saludar();



//voy a crear un objeto a partir de la función constructora

// const persona1 = new Persona ("Carlos", "Suarez", 30);
// console.log(persona1);
// const persona2= new Persona ("Lautaro", "Pereyra", 31);
// console.log(persona2);

// persona2.saludar()

//Clases
//*clases**//
//las clases en JS tienen una sintaxis más clara y simple para 
//poder crear objetos. 
//Son un equivalente al empleo de la función contrsuctora y permite definir también diferentes tipo de métodos. 

// class Producto {
//     constructor (nombre, precio){
//         this.nombre = nombre,
//         this.precio = precio
//     }
//     sumaIva(){ return this.precio *1.21; }
// }

// const fideos = new Producto ("fideos", 750);
// console.log ("El precio de los fideos es de: " + fideos.precio + "con el iva incluído el precio final sería " + fideos.sumaIva())

//Métodos toLowerCase() y toUpperCase()

//toUpperCase(): //voy de minúsculas a mayúsculas

let frase = "Hola, soy un string";
console.log(frase.toUpperCase())

//voy de minúsculas a mayúsculas
let fraseDos = "HOLA SOY UN STRING";
console.log(fraseDos.toLowerCase());

//Length es una propiedad que devuelve la cantidad de caracteres de un string.
console.log(frase.length);

//Operador IN:
//nos permite saber si un objeto tiene una propiedad o no (booleanos).

let Homero ={
    nombre:"Homero",
    apellido: "Simpson",
    profesion:"inspector de seguridad nuclear en el sector 7g",
    edad: 39
};

console.log("nombre" in Homero);
console.log("estado civil" in Homero);

//FOR... IN//
//NOS PERMITE RECORRER LAS PROPIEDADES DE UN OBJETO.
//let propiedad es como una var auxialiar 
// que va a recorrer las propiedades del objeto, 
// mostrandolas por consola. 

for (let propiedad in Homero){
    console.log(propiedad);
}

//si quiero mostrar por consola cada propiedad con su valor:
for (let propiedad in Homero){
    console.log(propiedad + " : " + Homero[propiedad]);
}