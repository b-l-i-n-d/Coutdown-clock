const countDownDate = new Date('Oct 24, 2021 23:59:59').getTime();

const x = setInterval ( function() {
    const now = new Date().getTime();

    const distance = countDownDate - now;

    const days = Math.floor(distance / (1000*60*60*24));
    const hours = Math.floor((distance % (1000*60*60*24)) / (1000*60*60));
    const minutes = Math.floor((distance % (1000*60*60)) / (1000*60));
    const seconds = Math.floor((distance % (1000*60)) / 1000);

    document.getElementById("countdown-days").innerHTML = days + "d";
    document.getElementById("countdown-hours").innerHTML = hours + "h";
    document.getElementById("countdown-mins").innerHTML = minutes + "m";
    document.getElementById("countdown-secs").innerHTML = seconds + "s";

    if (distance < 0) {
        clearInterval(x);
        document.getElementById("countdown-clock").innerHTML = "Expeired";
    }

}, 1000);