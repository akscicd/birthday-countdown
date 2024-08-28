

const countdown = () => {
    const endDate = new Date("aug 29, 2024 00:00:00").getTime();
    const now = new Date().getTime();

    const difference = endDate - now;

    const seconds = 1000;
    const minutes = seconds * 60;
    const hours = minutes * 60;

    let timeHours = Math.floor((difference % days) / hours);
    let timeMinutes = Math.floor((difference % hours) / minutes);
    let timeSeconds = Math.floor((difference % minutes) / seconds);

    timeHours = timeHours < 10 ? "0" + timeHours : timeHours;
    timeMinutes = timeMinutes < 10 ? "0" + timeMinutes : timeMinutes;
    timeSeconds = timeSeconds < 10 ? "0" + timeSeconds : timeSeconds;

    document.getElementById("hours").innerHTML = timeHours;
    document.getElementById("minutes").innerHTML = timeMinutes;
    document.getElementById("seconds").innerHTML = timeSeconds;

   

}
setInterval(countdown, 1000);
