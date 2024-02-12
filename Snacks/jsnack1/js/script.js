/* 
Snack 1:
Scrivi una funzione che accetti una stringa come argomento e la restituisca girata (es. "Ciao" -> "oaiC")
*/

// chiedo all'utente di inserire una parola
/* let parola = "ciao"; */
/* 

//creo una funzione
function invertita(parola) {

    //inizio un ciclo for dove l'iterzione 
    //inizierà dall'ultima parola fino alla prima
    //dovrà essere maggiore o uguale a 0
    //e avrà andamento decrescente
    for( let i = parola.length - 1 ; i >= 0 ; i-- ){
        parolaInverita = parolaInverita + parola[i];
    }
    
    return parolaInverita;
}

let risultato = invertita(parola);
document.getElementById("risultato").innerHTML = `${risultato}`; */

let parola = "ciao";
parola = parola.split("")
console.log(parola);
// questa stringa è diventata un array col metodo .split()
// per invertire i valori posso usare il metodo .reverse()


