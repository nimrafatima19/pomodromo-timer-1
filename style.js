let minutes = 25;
let seconds = "00";

var click = new Audio("mixkit-gate-latch-click-1924.wav");

function template() {
    document.getElementById('minutes').innerHTML = minutes;
    document.getElementById('seconds').innerHTML = seconds;

}

function start() {
    click.play();
    minutes = 24;
    seconds = 59;

    document.getElementById('minutes').innerHTML = minutes;
    document.getElementById('seconds').innerHTML = seconds;


}