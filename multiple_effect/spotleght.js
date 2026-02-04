let spot = document.querySelector('.spot');
let body = document.body;

body.addEventListener('mousemove', function (val) {
    let x = val.clientX + 'px';
    let y = val.clientY + 'px';

    spot.style.background = `radial-gradient(150px at ${x} ${y},transparent,black)`;
})