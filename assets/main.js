/*
Visualizzare in pagina 5 numeri casuali.
Da lì parte un timer di 30 secondi.
Dopo 30 secondi, vengono rimossi i numeri dalla pagina e l'utente deve inserire (tramite prompt) i numeri che ha visto precedentemente, uno alla volta.
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
BONUS: visualizzare in pagina anche un timer con il countdown dei 30 secondi
*/

$(document).ready(function(){


    var fiveNumbers = [];

    var timeInSeconds = 5;

    var time = timeInSeconds * 1000;

    var timeForPrompt = (timeInSeconds * 1000) + 1000;

    var userNumbers = [];


    while (fiveNumbers.length < 5) {
        var cpuNumbers = randomNumber(1, 100);
        if (!fiveNumbers.includes(cpuNumbers)) {
            fiveNumbers.push(cpuNumbers);
        }
        console.log(fiveNumbers);
    }

    $('#numbers').html(fiveNumbers.join(' - '));


    setTimeout(scadenza, 30000);

    function scadenza(){
        setTimeout
    };

// nascondo numeri dopo il tempo stabilito aggiungendo una classe con display none

    var hideNumbers = setTimeout(function(){
        // mettere una classe che nasconde il fiveNumbers
        $('#numbers').addClass('hide');

    }, time);


// quando hideNumbers è finito deve uscire un propt che chiede i numeri all'utente
// faccio visualizzare il propt un secondo dopo che i numeri sono scomparsi cosi da non rischiare di 'bloccarli' in pagina con il prompt

    var showPrompt = setTimeout(function(){

        while (userNumbers.length < 5) {

            var userReply = parseInt(prompt('inserici un numero di tra quelli che hai visto'));
            if (!isNaN(userReply)) {
                if (!userNumbers.includes(userReply)) {
                    userNumbers.push(userReply);
                    console.log(userNumbers);

                } else {
                    alert('numero già inserito')
                }
            } else {
                alert('elemento non valido')
            }
        }

    }, timeForPrompt);

    console.log(userNumbers);


/* CREATO COUNTDOWN

    var countDown = setInterval(function(){


    if (timeInSeconds >= 0) {
        console.log(timeInSeconds);
        timeInSeconds--;
    } else {
        clearInterval(countDown);
        console.log('finish');
    }

}, 1000);
*/




    function randomNumber(min, max) {
        var randomItem;
        randomItem = Math.floor(Math.random() * (max - min +1)) + min;
        return randomItem;
    }
});
