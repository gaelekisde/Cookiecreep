// Fecha y hora del encuentro
const targetDate = new Date("Aug 31, 2024 15:00:00").getTime();

const countdown = () => {
    const now = new Date().getTime();
    const timeLeft = targetDate - now;

    // Calculos para días, horas, minutos y segundos
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;

    if (timeLeft < 0) {
        clearInterval(x);
        document.getElementById("countdown").innerHTML = `te amo tanto cookiecreep, digame otra fecha para actualizar el contador`;
    }
};

// Actualizar cada segundo
const x = setInterval(countdown, 1000);