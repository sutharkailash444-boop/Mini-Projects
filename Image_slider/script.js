let left_btn = document.querySelector('.left_arrow');
let right_btn = document.querySelector('.right_arrow');
let img_box = document.querySelector('.image_box');
let main = document.querySelector('.main');

function triggerAnimation() {
    img_box.classList.remove('animate');
    img_box.offsetWidth; 
    img_box.classList.add('animate');
}

right_btn.addEventListener('click', function () {
    if (main.scrollLeft + main.clientWidth >= main.scrollWidth) {
        main.scrollLeft = 0;
    } else {
        main.scrollLeft += main.clientWidth;
    }
    triggerAnimation();
});

left_btn.addEventListener('click', function () {
    if (main.scrollLeft <= 0) {
        main.scrollLeft = main.scrollWidth - main.clientWidth;
    } else {
        main.scrollLeft -= main.clientWidth;
    }
    triggerAnimation();
});

setInterval(function () {
    if (main.scrollLeft + main.clientWidth >= main.scrollWidth) {
        main.scrollLeft = 0;
    } else {
        main.scrollLeft += main.clientWidth;
    }
}, 2000);