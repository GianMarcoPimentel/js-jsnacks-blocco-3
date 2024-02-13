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
document.getElementById("risultato").innerHTML = ` parola ${parola}`;



document.querySelector("#button").addEventListener("click", function() {
    const text = document.querySelector("#text").ariaValueMax;

    document.querySelector("#risultato").innerText = reverseString(text);
})


function reverse(string) {

    //metodi delle stringhe
    const divideStringInArray = string.split("");

    const reverseStringArray = divideStringInArray.reverse();

    const joinedString = reverseStringArray.join("");

    return string;

    // Oppure si scrive cosi : 
    // const finalString = stringToModify.split("").reverse().join("")


    //ancora meglio
    // return stringToModify.split("").reverse().join("")

    //con il ciclo for
//  let newString = "";
//  for(let i = stringToModify - 1; i >= 0; i++ ){

//  newString += StringToModify[i];

//  }
//  return newString
}