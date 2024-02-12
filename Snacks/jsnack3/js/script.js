/* 
Snack 3:
Scrivi una funzione che accetti tre argomenti:
un array e due numeri:
(
“a” più piccolo di “b” 
“b” grande al massimo quanto il numero di elementi dell’array
)
Es:
- Abbiamo un array così: arrayNumeri = [0, 1, 2, 3, 4, 5, 6]
- La nostra funzione viene dichiarata ad esempio così function tagliaArray(array, posizioneMin, posizioneMax)
- La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra “posizioneMin” e “posizioneMax”
- Nel nostro caso, se la chiamassimo così tagliaArray(arrayNumeri, 2, 4) ci restituirebbe un array così composto:
[2, 3, 4]
*/
const arrayNumeri = [0, 1, 2, 3, 4, 5, 6]

//creo una funzione con i 3 parametri richiesti
function shortArray(arrayNumeri, posizioneMin, posizioneMax){
    const arrayA = [];
    for( let i = posizioneMin; i < posizioneMax ; i++){
        arrayA.push(arrayNumeri[i]);
    }
    return arrayA;

}
