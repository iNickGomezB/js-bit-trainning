//1. Si es un numero par o impar
// let num1 = parseInt(prompt("Hola como estas, ingresa un numero: "));
 const  par = num_0=> {
     if(num_0%2==0 ? console.log(`${num_0} es par`) : console.log(`${num_0} es impar`));
 }
//  par(num_0)

//2. Si el numero es primo o no es primo
// let num_1 = parseInt(prompt("Hola como estas, ingresa un numero: "));
    const primo = num_1=> {
     let multiplo = 0;
     for(let i = 0; i <= num_1*2; i++) if(num_1%i==0) multiplo += 1;
     if(multiplo === 2) console.log(`${num_1} es primo`) 
     else console.log(`${num_1} no es primo`) 
 }
//  primo(num_1);

//3. Una función que dado el numero me indique el siguiente numero primo
//  let num_2 = parseInt(prompt("Hola como estas, ingresa un numero: "));
const primo_siguiente = num_2 => {
     let primo = "";
     let num = 0;
     let multiplo_1 = 0;
     for(let i = num_2; i <= num_2*2; i++){
         let multiplo_2 = 0;
         for(let j = 1; j <= num_2*2; j++){
             if(i === num_2 && i % j == 0) multiplo_1 += 1;
             else if ( i !== num_2 && i % j == 0) multiplo_2 += 1;
         }
         if(multiplo_1 === 2 ? primo = "es primo" : primo = "no es primo"); 
         if(multiplo_2 === 2) {
             num = i; break;
         }
     }
     console.log(`${num_2} ${primo} y el siguente numero primero es: ${num}`)
 }
//  primo_siguiente(num_2)

//4. Una función que imprima el cuadrado  de n x n
//  let size = parseInt(prompt("Hola como estas, ingresa un numero: "));
 const cuadrado = size => {
     for (let i = 0; i <= size; i++) {
         let square = "";
         for (let j = 0; j <= size; j++) {
           if (j > 0 && j < size && i > 0 && i < size) square += "  ";
           else square += " *";
         }
         console.log(square);
      }
 }
//  cuadrado(size)

//5. (Avanzado) una función que me permita seleccionar cual de los ejercicios quiero hacer
let escoge = parseInt(prompt(`Hola como estas, escoge un ejercicio: `))
function Ejercicios(escoge) {
    if(escoge==0) {
        let num_0 = parseInt(prompt(`Escogiste el primer ejercicio de numeros pares o impares, escribe un numero: `));
        par(num_0)
    }
    else if (escoge==1) {
        let num_1 = parseInt(prompt(`Escogiste el segundo ejercicio de numeros primos, escribe un numero: `));
        primo(num_1)
    }
    else if (escoge==2) {
        let num_2 = parseInt(prompt(`Escogiste el tercer ejercicio de el siguiente numero primo, escribe un numero: `));
        primo_siguiente(num_2)
    }
    else {
        let size = parseInt(prompt(`Escogiste el cuarto ejercicio de dibuja un cuadrado, escoge su tamaño: `));
        cuadrado(size)
    }
}
Ejercicios(escoge)