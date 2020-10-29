/*
Visualizzare in pagina 5 numeri casuali.
Da lì parte un timer di 30 secondi.
Dopo 30 secondi, vengono rimossi i numeri dalla pagina e l'utente deve inserire (tramite prompt) i numeri che ha visto precedentemente, uno alla volta.
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
BONUS: visualizzare in pagina anche un timer con il countdown dei 30 secondi
*/

$(document).ready(function(){


    var fiveNumbers = [];

    var timeInSeconds = 30;

    var oneSecond = 1000;

    var time = timeInSeconds * 1000;

    var timeForPrompt = time + 3000;

    var userNumbers = [];

    var rigthNumbers = 0;


    while (fiveNumbers.length < 5) {
        var cpuNumbers = randomNumber(1, 100);
        if (!fiveNumbers.includes(cpuNumbers)) {
            fiveNumbers.push(cpuNumbers);
        }
        // console.log(fiveNumbers);
    }

    $('#numbers').html(fiveNumbers.join(' - '));


// nascondo numeri dopo il tempo stabilito aggiungendo una classe con display none

    var hideNumbers = setTimeout(function(){
        // mettere una classe che nasconde il fiveNumbers
        $('#numbers').addClass('hide');

    }, time + 2500); // aggiunto + 1500 per farlo combaciare con il countdown


// quando hideNumbers è finito deve uscire un propt che chiede i numeri all'utente
// faccio visualizzare il propt un secondo dopo che i numeri sono scomparsi cosi da non rischiare di 'bloccarli' in pagina con il prompt

    var showPrompt = setTimeout(function(){

        while (userNumbers.length < 5) {

            var userReply = parseInt(prompt('inserici un numero di tra quelli che hai visto'));
            if (!isNaN(userReply)) {
                if (!userNumbers.includes(userReply)) {
                    userNumbers.push(userReply);
                    // console.log(userNumbers);
                    if (fiveNumbers.includes(userReply)) {
                        rigthNumbers++;
                    }

                } else {
                    alert('numero già inserito')
                }
            } else {
                alert('elemento non valido')
            }
        }

    // console.log(' Numeri indovinati : ' + rigthNumbers);
    document.writeln(' Numeri indovinati : ' + rigthNumbers);
    }, timeForPrompt);




//CREATO COUNTDOWN

    var countDown = setInterval(function(){


    if (timeInSeconds >= 0) {
        // console.log(timeInSeconds);
        // document.writeln(timeInSeconds);
        $('#show-countdown').html(timeInSeconds);
        // document.getElementById('show-countdown').innerHTML = timeInSeconds;
        timeInSeconds--;
    } else {
        clearInterval(countDown);
        // console.log('finish');
        $('#show-countdown').text('Stop');
    }

}, oneSecond);





    function randomNumber(min, max) {
        var randomItem;
        randomItem = Math.floor(Math.random() * (max - min +1)) + min;
        return randomItem;
    }
});
