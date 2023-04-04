
//Funciones
//En x -> para el nomrbre de la funcions y dentro de los parentesis los (parametros)
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



// let num = parseInt(prompt("Ingresa un numero"));
// let num_1 = "";
// let primo = 0;
// let multiplo_1 = 0;
// for(let i = num; i <= num*2; i++){
//     let multiplo_2 = 0;
//     for(let j = 1; j <= num*2; j++){
//         if(i === num && i % j == 0) multiplo_1 += 1;
//         else if ( i !== num && i % j == 0) multiplo_2 += 1;
//     }
//     if(multiplo_1 === 2 ? num_1 = " es primo" : num_1 = " no es primo"); 
//     if(multiplo_2 === 2) {
//         primo = i; break;
//     }
// }
// alert(`${num} ${num_1} y el siguiente primo es: ${primo}`)

// El estudiante debe construir un algoritmo que le permita generar la siguiente figura por consola
// #
// ##
// ###
// ####
// #####
// El tamaño de la piramide puede ser de n posiciones
//Metodo #1 (logica-inversa)
let num_1 = parseInt(prompt("Ingresa la cantidad de niveles que tiene la piramide: "));
let numeral = ""
let identacion = ""
    for(let j = num_1; j >= 0; j--){
        identacion = " ".repeat(j);
        numeral += "#"
        if(j != num_1) numeral += "#"
        console.log(identacion+numeral)
    }
//Metodo #2:
// let num_2 = parseInt(prompt("Ingresa la cantidad de niveles que tiene la piramide: "));
// let numeral_2 = ""
// let identacion_2 = " "
//     identacion_2 = identacion_2.repeat(num_2)
//     for(let j = 0; j < num_2; j++){
//         identacion_2 = identacion_2.slice(0, -1);
//         numeral_2 += "x"
//         if(j > 0) numeral_2 += "x"
//         console.log(identacion_2+numeral_2)
//     }
    
