// let fila = "";
// for(let i = 0; i <=10; i++){
//    fila += i + ", "
// }
// console.log(fila)
//Parametros - son las variables que se van a utilizar dentro de nuestra funcion

// function nombre(num) {
//     let fila = "";
//     for(let i = 0; i <= num; i++){
//         if (i < num) fila += i + ", "
//         else fila += i;
//     }
//     return console.log(fila)
// }

// nombre()

// const Nombre = () =>  {
//     let nombre = ["A","r","a","g","a","n"], tamaño = nombre.length, imprimir = "";
//     for(let i = 0; i < tamaño; i++) imprimir += nombre[i];
//     return imprimir;
// }

// console.log(Nombre()) 

// DADO EL SIGUIENTE num EL ESTUDIANTE DEBERA ORGANIZAR LOS NUMEROS DEL MENOR AL MAYOR
// [23,45,78,32,12,1,4,8,34,32,1000,34,37,22,0,-4,-6]

let num = [23,45,78,32,12,1,4,8,34,32,1000,34,37,22,0,-4,-6], aux = "", min = "";
    for(let i = 0; i < num.length; i++){
      min = i;
      for(let j = i + 1; j < num.length; j++){
        if(num[j]<num[min]) min = j;
      }
      aux = num[i]
      num[i] = num[min]
      num[min] = aux;
    }
console.log(num)
