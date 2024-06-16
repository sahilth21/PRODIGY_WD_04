let timer; // Timer variable
let hours = 0, minutes = 0, seconds = 0; // Initialize time variables
let display = document.getElementById('display');

function startStop() {
    if (!timer) {
        timer = setInterval(runStopwatch, 1000); // Update every second
        document.getElementById('startStopButton').innerText = 'Stop';
    } else {
        clearInterval(timer);
        timer = null;
        document.getElementById('startStopButton').innerText = 'Start';
    }
}

function runStopwatch() {
    seconds++;
    if (seconds === 60) {
        seconds = 0;
        minutes++;
        if (minutes === 60) {
            minutes = 0;
            hours++;
        }
    }
    display.textContent = 
        (hours < 10 ? '0' + hours : hours) + ':' + 
        (minutes < 10 ? '0' + minutes : minutes) + ':' + 
        (seconds < 10 ? '0' + seconds : seconds);
}

function reset() {
    clearInterval(timer);
    timer = null;
    hours = 0;
    minutes = 0;
    seconds = 0;
    display.textContent = '00:00:00';
    document.getElementById('startStopButton').innerText = 'Start';
}
