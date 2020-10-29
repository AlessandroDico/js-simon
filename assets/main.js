/*
Visualizzare in pagina 5 numeri casuali.
Da lì parte un timer di 30 secondi.
Dopo 30 secondi, vengono rimossi i numeri dalla pagina e l'utente deve inserire (tramite prompt) i numeri che ha visto precedentemente, uno alla volta.
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
BONUS: visualizzare in pagina anche un timer con il countdown dei 30 secondi
*/

$(document).ready(function(){


    var fiveNumbers = [];


    while (fiveNumbers.length < 5) {
        var cpuNumbers = randomNumber(1, 100);
        if (!fiveNumbers.includes(cpuNumbers)) {
            fiveNumbers.push(cpuNumbers);
        }
        console.log(fiveNumbers);
    }
    document.writeln(fiveNumbers);



    function randomNumber(min, max) {
        var randomItem;
        randomItem = Math.floor(Math.random() * (max - min +1)) + min;
        return randomItem;
    }
});