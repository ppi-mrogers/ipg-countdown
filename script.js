function countdown() {
    // Set the target date and time in UTC
    // For example, for Dec 31, 2023, 23:59:59 EST, you would set it to Jan 1, 2024, 04:59:59 UTC
    const countToDate = new Date("2024-01-01T15:00:00Z").getTime();

    // Get the current time in UTC
    const now = new Date().getTime();

    // Calculate the difference in milliseconds
    const difference = countToDate - now;

    // Convert the difference to days, hours, minutes, and seconds
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    // Update the countdown
    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;

    // Handle countdown completion
    if (difference < 0) {
        clearInterval(interval);
        document.getElementById("countdown").innerHTML = "Event Started";
    }
}

// Update the countdown every second
let interval = setInterval(countdown, 1000);
