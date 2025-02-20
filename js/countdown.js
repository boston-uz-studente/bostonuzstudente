document.addEventListener('DOMContentLoaded', function() {
    const countdownElement = document.querySelector('[data-countdown]');
    const targetDate = moment("2025-02-22 13:00:00-0500");

    function updateCountdown() {
        const now = moment();
        const duration = moment.duration(targetDate.diff(now));

        const days = Math.floor(duration.asDays());
        const hours = duration.hours();
        const minutes = duration.minutes();

        countdownElement.innerText = `${days} days ${hours} hours ${minutes} minutes`;
    }

    updateCountdown();
    setInterval(updateCountdown, 1000 * 60);
});
