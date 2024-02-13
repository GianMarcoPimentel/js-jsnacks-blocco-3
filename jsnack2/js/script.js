/* 
Snack 2:
Scrivi una funzione che fonda due array presi come parametri (date per scontato che abbiano lo stesso numero di elementi) 
prendendo alternativamente gli elementi da uno e dall’altro
es. [a,b,c], [1,2,3] → [a,1,b,2,c,3].
*/
 //memorizzo i miei due array
const array1 = [1, 2, 3,];
const array2 = ["a", "b", "c"];

//memorizzo il terzo array che sarà formato dal primo più il secomndo
// i due array però devono mantenere l'ordine dei loro indici anche nmel terzop
// per esermpio
// [array1[0],array2[0],array1[1],array2[1],array1[2],array2[2]];
const array3 = [];

//inizio un ciclo for con la stessa variabile di iterazione per i due array

for( let i = 0; i<array1.length && i<array2.length; i++){
   //pusho nel'array3 gli elementni ordinati seocndo i dell'array1
    array3.push(array1[i]);
    //pusho nel'array3 gli elementni ordinati seocndo i dell'array1
    array3.push(array2[i]);

} 
console.log(array3);
//stampo a schemro il risulatto del mio array

document.getElementById("risultato").innerHTML = `L'array trovato è array3 = [${array3}]`;


//Con la funzione

/* function joinArrays (array1, array2) {
    if(array1.length != array2.length){
        alert("Gli array devono avre la stessa lunghezza");
        return //non mi fa andare avanti se gli array sono di lunghezza diversa!\
    }
    // nuovo array 
    const newArray = [];

    for (let i = 0; i <array1.length; i++){
        newArray.push(array1[i], array2[i]);
    }
    return newArray;
}
 */


//se volessi invertire l'ordine degli array1 e array2 nell'array3
//mi basterebbe cambiare l'ordine di push all'interno del ciclo for
/* 
for( let i = 0; i<array1.length && i<array2.length; i++){
   //pusho nel'array3 gli elementni ordinati seocndo i dell'array1
    array3.push(array2[i]);
    //pusho nel'array3 gli elementni ordinati seocndo i dell'array1
    array3.push(array1[i]);

}*/