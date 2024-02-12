/* 
Snack 4 (bonus):
Scrivi una funzione  che accetti una stringa come parametro e restituisca la stringa con i caratteri ordinati alfabeticamente
Es: riordina("webmaster") :freccia_destra: "abeemrstw"
*/
let parola = "ciao";
console.log(parola);
let ordine = [];
parola = parola.split("");
console.log(parola);
parola = parola.sort();
console.log(parola);
/* for( let i = 0; i < parola.length; i++){
    parola[i].sort();
} */

document.getElementById("risultato").innerHTML = `L'ordine alfabetico della parola è : ${parola}`;