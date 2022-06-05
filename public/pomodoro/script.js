//Navigation bar
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}
//pomodoro
//assign variables from html document
var start = document.getElementById('start');
var stop = document.getElementById('stop');
var reset = document.getElementById('reset');

var workMinutes = document.getElementById('w_minutes');
var workSeconds = document.getElementById('w_seconds');

var breakMinutes = document.getElementById('b_minutes');
var breakSeconds = document.getElementById('b_seconds');

//store a reference to a timer variable
var startTimer;

start.addEventListener('click', function() {
  if (startTimer === undefined) {
    startTimer = setInterval(timer, 1000)
  } else {
    alert("Timer is already running");
  }
})

reset.addEventListener('click', function() {
  workMinutes.innerText = 25;
  workSeconds.innerText = "00";

  breakMinutes.innerText = 5;
  bs.innerText = "00";

  document.getElementById('counter').innerText = 0;
  stopInterval()
  startTimer = undefined;
})

stop.addEventListener('click', function() {
  stopInterval()
  startTimer = undefined;
})


//timer function
function timer() {
  //work timer countdown
  if (workSeconds.innerText != 0) {
    workSeconds.innerText--;
  } else if (workMinutes.innerText != 0 && workSeconds.innerText == 0) {
    workSeconds.innerText = 59;
    workMinutes.innerText--;
  }

  //break timer countdown
  if (workMinutes.innerText == 0 && workSeconds.innerText == 0) {
    if (breakSeconds.innerText != 0) {
      breakSeconds.innerText--;
    } else if (breakMinutes.innerText != 0 && breakSeconds.innerText == 0) {
      breakSeconds.innerText = 59;
      breakMinutes.innerText--;
    }
  }

  //incrementing the work cycle
  
  if (workMinutes.innerText == 0 && workSeconds.innerText == 0 && breakMinutes.innerText == 0 && breakSeconds.innerText == 0) {
    workMinutes.innerText = 25;
    workSeconds.innerText = "00";

    breakMinutes.innerText = 5;
    breakSeconds.innerText = "00";

    document.getElementById('counter').innerText++;
  }
}

//function to stop timer
function stopInterval() {
  clearInterval(startTimer);
}