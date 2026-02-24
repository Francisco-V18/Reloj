const hourEl = document.querySelector('.hour');
const minuteEl = document.querySelector('.minute');
const secondEl = document.querySelector('.second');
const timeEl = document.getElementById('time');
const dateEl = document.getElementById('date');
const toggle = document.getElementById('toggle');
toggle.addEventListener('click', () => {
    document.body.classList.toggle('dark');
});
function setTime() {
    const time = new Date();
    const month = time.toLocaleString('es-ES', { month: 'short' }).toUpperCase();
    const day = time.toLocaleString('es-ES', { weekday: 'long' }).toUpperCase();
    const date = time.getDate();
    const hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    const hoursForClock = hours % 12;
    const hourDeg = (hoursForClock * 30) + (minutes / 2);
    const minuteDeg = minutes * 6;
    const secondDeg = seconds * 6;
    hourEl.style.transform = `translateX(-50%) rotate(${hourDeg}deg)`;
    minuteEl.style.transform = `translateX(-50%) rotate(${minuteDeg}deg)`;
    secondEl.style.transform = `translateX(-50%) rotate(${secondDeg}deg)`;
    const ampm = hours >= 12 ? 'PM' : 'AM';
    const displayHour = hours % 12 || 12;
    timeEl.innerText =
        `${displayHour}:${minutes < 10 ? '0' + minutes : minutes} ${ampm}`;
    dateEl.innerText = `${month} ${day} ${date}`;
}
setTime();
setInterval(setTime, 1000);