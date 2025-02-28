// Set the date we're counting down to
const targetDate = new Date("March 1, 2025 00:00:00").getTime();

// Update the countdown every 1 second
const timer = setInterval(function() {
    // Get the current date and time
    const now = new Date().getTime();

    // Calculate the time remaining
    const timeLeft = targetDate - now;

    // Time calculations for days, hours, minutes, and seconds
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    // Display the result
    document.getElementById("countdown").innerHTML =
        days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

    // If the countdown is finished, display a message
    if (timeLeft < 0) {
        clearInterval(timer);
        document.getElementById("countdown").innerHTML = "TIME'S UP!";
    }
}, 1000);


