var attivaSound = false;

window.addEventListener('message', function(event) {
    var sound = new Audio('sound.mp3');
    sound.volume = 0.3;

    if (event.data.action === 'open') {
        $("body").fadeIn(400);
        $(".contenitore_testo").text("" + event.data.message + "");

        if (!attivaSound) {
            sound.play();
            attivaSound = true;
        }

    } else if (event.data.action === 'close') {
        $("body").fadeOut(400);
        attivaSound = false;
    }
});
