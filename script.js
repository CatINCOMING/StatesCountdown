const targetDate = new Date("2026-03-12T00:00:00").getTime();

function animateChange(element, newValue) {
    element.style.transform = "translateY(-10px)";
    element.style.opacity = "0";

    setTimeout(() => {
        element.innerText = newValue;
        element.style.transform = "translateY(0)";
        element.style.opacity = "1";
    }, 150);
}

function updateCountdown() {
    const now = new Date().getTime();
    const difference = targetDate - now;

    const values = {
        days: String(Math.floor(difference / (1000 * 60 * 60 * 24))).padStart(2, '0'),
        hours: String(Math.floor((difference / (1000 * 60 * 60)) % 24)).padStart(2, '0'),
        minutes: String(Math.floor((difference / (1000 * 60)) % 60)).padStart(2, '0'),
        seconds: String(Math.floor((difference / 1000) % 60)).padStart(2, '0')
    };

    for (let key in values) {
        const el = document.getElementById(key);
        if (el.innerText !== values[key]) {
            animateChange(el, values[key]);
        }
    }
}

setInterval(updateCountdown, 1000);
updateCountdown();
