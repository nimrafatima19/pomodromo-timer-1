
// Get the button and counter elements
// const incrementButton = document.getElementById('incrementButton');
// const counter = document.getElementById('counter');


var boxs = document.getElementById("boxs");
boxs.style.display="none";


let minutes = 25;
let seconds = "00";

var click = new Audio("click.mp3");
var bell = new Audio("bell.mp3");

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

    var minutes_interval = setInterval(minutesTimer, 60000);
    var seconds_interval = setInterval(secondsTimer, 1000);

    function minutesTimer() {
        minutes = minutes - 1;
        document.getElementById("minutes").innerHTML = minutes;
    }

    function secondsTimer() {
        seconds = seconds - 1;
        document.getElementById("seconds").innerHTML = seconds;

        if(seconds <= 57) {
            if(minutes <= 24){
                clearInterval(minutes_interval);
                clearInterval(seconds_interval);

                document.getElementById("done").innerHTML = "Session Completed!! Take a Break";

                document.getElementById("done").classList.add("show_message");


                bell.play();

            }
            seconds = 60;
        }
    }


}

var bt = document.getElementById("bt");
bt.style.display = "flex";
bt.style.position = "fixed";

function modal() {
    let boxs = document.getElementById("boxs");
    boxs.style.display = "block";
    boxs.style.display = "flex";
    boxs.style.alignItems = "center";
    boxs.style.justifyContent = "center";
    boxs.style.position = "absolute"



  }
  

  function hidn(){
    let boxs = document.getElementById("boxs");
    boxs.style.display = "none";
  }

// Get the input fields and button elements
const numberInput1 = document.getElementById('numberInput1');
const numberInput2 = document.getElementById('numberInput2');
const incrementButton1 = document.getElementById('incrementButton1');
const incrementButton2 = document.getElementById('incrementButton2');

// Add event listener to the first button
incrementButton1.addEventListener('click', function() {
  // Get the current value of the first input field and convert it to a number
  let currentValue1 = parseInt(numberInput1.value);
  
  // Increment the value by one
  currentValue1++;

  // Update the first input field with the new value
  numberInput1.value = currentValue1;
});

// Add event listener to the second button
incrementButton2.addEventListener('click', function() {
  // Get the current value of the second input field and convert it to a number
  let currentValue2 = parseInt(numberInput2.value);
  
  // Increment the value by one
  currentValue2++;

  // Update the second input field with the new value
  numberInput2.value = currentValue2;
});


