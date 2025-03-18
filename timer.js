const targetDate = new Date("March 19, 2025 12:00:00").getTime();

const timer = setInterval(function() {
    const now = new Date().getTime();
    const timeLeft = targetDate - now;

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    document.getElementById("countdown").innerHTML =
        `<div class="time-box"><span class="time-number">${days}</span><br><span class="time-label">days</span></div>
         <div class="time-box"><span class="time-number">${hours}</span><br><span class="time-label">hours</span></div>
         <div class="time-box"><span class="time-number">${minutes}</span><br><span class="time-label">minutes</span></div>
         <div class="time-box"><span class="time-number">${seconds}</span><br><span class="time-label">seconds</span></div>`;

    if (timeLeft < 0) {
        clearInterval(timer);
        document.getElementById("countdown").innerHTML = "ENTRIES CLOSED!";
    }
}, 1000);


