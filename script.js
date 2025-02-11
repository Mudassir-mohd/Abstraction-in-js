function remindToDrinkWater() {
  alert("Time to drink water! 💧 Stay Hydrated.");
  document.getElementById("reminder").innerText = "Time to drink water! 💧";
  setTimeout(remindToDrinkWater, 3600000); 
}

setTimeout(remindToDrinkWater, 3600000);





// stop watch//
let timer;
let seconds = 0, minutes = 0, hours = 0;
let isRunning = false;

function updateDisplay() {
    let formattedTime = 
        (hours < 10 ? "0" : "") + hours + ":" + 
        (minutes < 10 ? "0" : "") + minutes + ":" + 
        (seconds < 10 ? "0" : "") + seconds;
    document.getElementById("display").innerText = formattedTime;
}

function startStopwatch() {
    if (!isRunning) {
        isRunning = true;
        timer = setInterval(() => {
            seconds++;
            if (seconds === 60) {
                seconds = 0;
                minutes++;
            }
            if (minutes === 60) {
                minutes = 0;
                hours++;
            }
            updateDisplay();
        }, 1000);
    }
}

function stopStopwatch() {
    clearInterval(timer);
    isRunning = false;
}

function resetStopwatch() {
    clearInterval(timer);
    isRunning = false;
    seconds = 0;
    minutes = 0;
    hours = 0;
    updateDisplay();
}
