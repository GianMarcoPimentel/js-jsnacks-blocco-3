/* 
Snack 4 (bonus):
Scrivi una funzione  che accetti una stringa come parametro e restituisca la stringa con i caratteri ordinati alfabeticamente
Es: riordina("webmaster") :freccia_destra: "abeemrstw"
*/
let parola = prompt("Inserisci una parola");

parola = parola.split("");
console.log(parola);

//creo un ciclo for per ordinare le mie lettere che compongono la parola 
for(let i =0; i<parola.length; i++){
    parola = parola.sort();
    console.log(parola);
}

// stampo su schermo
document.getElementById("risultato").innerHTML = `L'ordine alfabetico della parola è : ${parola}`;