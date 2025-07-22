// declaring variables
const clock = document.getElementById('clock');

const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');
const resetBtn = document.getElementById('resetBtn');

let timer = null;
let startTime = 0;
let elapsedTime = 0;
let isRunning = false;

// Start button functionality
startBtn.addEventListener('click', function start() {
    if(!isRunning) {
        startTime = Date.now() - elapsedTime;
        timer = setInterval(update, 10);
        isRunning = true;
    }
});

// Stop button functionality
stopBtn.addEventListener('click', function stop() {
    if(isRunning) {
        clearInterval(timer);
        elapsedTime = Date.now() - startTime;
        isRunning = false;
    }
});

// Reset button functionality
resetBtn.addEventListener('click', function reset() {
    clearInterval(timer);
    startTime = 0;
    elapsedTime = 0;
    isRunning = false;
    clock.textContent = `00:00:00:00`;
});

// To update the timer
update = () => {
    const currentTime = Date.now();
    elapsedTime = currentTime - startTime;

    let hrs = Math.floor(elapsedTime / (1000 * 60 * 60));
    let mins = Math.floor(elapsedTime / (1000 * 60) % 60);
    let secs = Math.floor(elapsedTime / 1000 % 60);
    let milisecs = Math.floor(elapsedTime % 1000 / 10);

    hrs = String(hrs).padStart(2, "0");
    mins = String(mins).padStart(2, "0");
    secs = String(secs).padStart(2, "0");
    milisecs = String(milisecs).padStart(2, "0");

    clock.textContent = `${hrs}:${mins}:${secs}:${milisecs}`
}

