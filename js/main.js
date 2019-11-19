
let scream = document.querySelector("#scream");
let target = document.querySelector(".target");

const SCREAM_START = 1.15;

function scream_play() {
    scream.volume = 1;
    scream.play();
    scream.currentTime = SCREAM_START;
}

function scream_stop() {
    scream.pause();
    scream.currentTime = SCREAM_START;
}


target.addEventListener("mouseup", function (){
    scream_stop();
});

target.addEventListener("mousedown", function (){
    scream_play();
});

target.addEventListener("touchcancel", function (){
    scream_stop();
});

target.addEventListener("touchstart", function (){
    scream_start();
});

