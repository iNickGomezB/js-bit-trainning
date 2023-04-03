console.log("Hello Nick")
//Funciones
//En x -> pa el nomrbre de la funcions y dentro de los parentesis los (parametros)
// function x(){}
// let x = () => {}
// const x = (){}
//Para llamar una funcion
//Nombre-de-la-funcion()

// function suma (num1, num2){
//     console.log(num1 + num2)
// }
// suma(2,3)

//EJERCICIO 1.'
// let primo = "";
// for(let i = 2; i <= 100; i++){
//     if( i % 2 !== 0 && i%3 !== 0 && i%5 !== 0) primo += `${i},`;   
// }
// console.log(primo)



let num = parseInt(prompt("Ingresa un numero"));
let num_1 = "";
let primo = 0;
let multiplo_1 = 0;
for(let i = num; i <= num*2; i++){
    let multiplo_2 = 0;
    for(let j = 1; j <= num*2; j++){
        if(i === num && i % j == 0) multiplo_1 += 1;
        else if ( i !== num && i % j == 0) multiplo_2 += 1;
    }
    if(multiplo_1 === 2 ? num_1 = " es primo" : num_1 = " no es primo"); 
    if(multiplo_2 === 2) {
        primo = i; break;
    }
}
alert(`${num} ${num_1} y el siguiente primo es: ${primo}`)