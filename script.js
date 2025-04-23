let timer = 45;
let interval = null;

const timerDisplay = document.getElementById("timer");
const startBtn = document.getElementById("startBtn");
const promptBox = document.getElementById("prompt");

startBtn.addEventListener("click", () => {
    timer = 45;
    timerDisplay.textContent = timer;
    promptBox.classList.add("hidden");
    clearInterval(interval);
    interval = setInterval(() => {
        timer--;
        timerDisplay.textContent = timer;
        if (timer <= 0) {
            clearInterval(interval);
            promptBox.classList.remove("hidden");
        }
    }, 1000);
});

function handleCorrect() {
    promptBox.classList.add("hidden");
    alert("Award 100 points to guesser and describer.");
}

function handleClosest() {
    promptBox.classList.add("hidden");
    alert("Award 30 points to closest guesser. Describer gets 0.");
}