const array1 = [1, 'Dois', 3.4, true];
/* console.log(typeof array1[0]);
console.log(typeof array1[1]); 
console.log(typeof array1[2]);
console.log(typeof array1[3]);

//percorrendo a posicao
for(let index = 0; index < array1.length; index++){
    console.log(typeof array1[index]);
}

//cria variaveis com a constante toda vez que percorre o array1
for (const indice of array1){
    console.log(typeof indice);
}

array1.forEach(indice =>{
    console.log(typeof indice);
});

array1.map(indice =>{
    console.log(typeof indice);
}); */

const array2 = array1.map(indice => {
    return typeof indice;
})

const array3 =[];
 array1.forEach(indice =>{
   indice = (typeof indice) + '' + indice;
   console.log(indice);
   array3.push (typeof indice);
});

console.log(array1);
console.log(array2);
console.log(array3);
