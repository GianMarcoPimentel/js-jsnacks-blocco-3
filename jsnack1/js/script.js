/* 
Snack 1:
Scrivi una funzione che accetti una stringa come argomento e la restituisca girata (es. "Ciao" -> "oaiC")
*/

// Faccio inserire una parola all'utente
let parola = prompt("Inserisci una parola");
parola = parola.split("")
console.log(parola);
// questa stringa è diventata un array col metodo .split()
// per invertire i valori posso usare il metodo .reverse()
parola = parola.reverse("");
console.log(parola);
// ora voglio che l'array ritorni ad essere una stringa
// per fare ciò uso il metodo .join()
parola = parola.join("");
console.log(parola);

//stampo a schermo il risultato
document.getElementById("risultato").innerHTML = `${parola}`;

