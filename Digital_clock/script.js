let hour = document.querySelector('.hour');
let minute = document.querySelector('.minute');
let second = document.querySelector('.second');

let date = document.querySelector('#date');

setInterval(() => {
    let Time = new Date();

    let Hours = Time.getHours();
    let Minutes = Time.getMinutes();
    let Seconds = Time.getSeconds();

    let Day = Time.toLocaleString('en-US',{month:'long',weekday:'long', year:'numeric'});

    hour.innerHTML = String(Hours).padStart(2, '0');
    minute.innerHTML = String(Minutes).padStart(2, '0');
    second.innerHTML = String(Seconds).padStart(2, '0');

    date.innerHTML = Day;

}, 1000);    