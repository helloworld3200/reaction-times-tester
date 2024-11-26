// TimeElapsed Function

let timer;
let milliseconds = 0;
let seconds = 0;
let minutes = 0;
let hours = 0;
let isRunning = false;

function formatTime(value) {
    return value < 10 ? `0${value}` : value;
}

function startTime() {
    if (isRunning) return; // Prevent multiple timers from starting

    isRunning = true;

    timer = setInterval(() => {
        milliseconds++; // Increase milliseconds by 1 every interval

        if (milliseconds >= 1000) { // 1000 milliseconds = 1 second
            milliseconds = 0;
            seconds++; // Increase seconds by 1
        }

        if (seconds >= 60) {
            seconds = 0;
            minutes++; // Increase minutes by 1
        }

        if (minutes >= 60) {
            minutes = 0;
            hours++; // Increase hours by 1
        }

        // Display the time in the format HH:MM:SS:MMM
        document.getElementById('time').textContent = 
            `${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)}:${formatTime(milliseconds)}`;
    }, 1); // Update every millisecond
}

function stopTime() {
    clearInterval(timer); // Stop the timer
    isRunning = false;
}

function resetTime() {
    clearInterval(timer); // Stop the timer
    isRunning = false;

    // Reset the time variables
    milliseconds = 0;
    seconds = 0;
    minutes = 0;
    hours = 0;

    // Reset the display
    document.getElementById('time').textContent = "00:00:00:000";
}

formatTime(value)
startTime()
stopTime()
resetTime()