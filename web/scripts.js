var attivaSound = false;
var sound = new Audio('sound.mp3');  
sound.volume = 0.3;

window.addEventListener('message', function(event) {
    var action = event.data.action;
    var message = event.data.message;

    if (action === 'open') {
        $("body").fadeIn(400);
        $(".contenitore_testo").text(message);

        if (!attivaSound) {
            sound.play();
            attivaSound = true;
        }

    } else if (action === 'close') {
        $("body").fadeOut(400);
        attivaSound = false;
        sound.pause(); 
        sound.currentTime = 0;
    }
});
