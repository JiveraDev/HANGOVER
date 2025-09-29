let countdown;
let timeLeft = 60;

function updateTimerDisplay() {
    document.getElementById('timerOTP').textContent = timeLeft;
}

function startTimer() {
    if (countdown) return; // Prevent multiple timers
    countdown = setInterval(() => {
        if (timeLeft > 0) {
            timeLeft--;
            updateTimerDisplay();
        } else {
            clearInterval(countdown);
            countdown = null;
            document.getElementById('sometimerlabel').textContent = 'OTP Expired';
            document.getElementById('timerOTP').textContent = '';
        }
    }, 1000);
}

function resetTimer() {
    clearInterval(countdown);
    countdown = null;
    timeLeft = 60;
    updateTimerDisplay();
}