//random box-shadow and text color
let all_btn = document.querySelectorAll("button");
let btn_text = document.querySelectorAll("a");
function random_color(val, text) {
    setTimeout(function () {
        let red = Math.floor(Math.random() * 300);
        let green = Math.floor(Math.random() * 300);
        let blue = Math.floor(Math.random() * 300);

        val.style.boxShadow = `0 0 20px rgb(${red},${green},${blue})`;
    }, 0);
}

function random_color_text(text) {
    setTimeout(function () {
        let red = Math.floor(Math.random() * 300);
        let green = Math.floor(Math.random() * 300);
        let blue = Math.floor(Math.random() * 300);

        text.style.color = `rgb(${red},${green},${blue})`;
    }, 0);
}

all_btn.forEach(function (val) {
    val.addEventListener("mouseenter", function () {
        random_color(val);
    })
})

all_btn.forEach(function (val) {
    val.addEventListener('mouseleave', function () {
        val.style.boxShadow = `none`;
    })
})

btn_text.forEach(function (text) {
    text.addEventListener('mouseenter', function () {
        random_color_text(text);
    })
})


btn_text.forEach(function (text) {
    text.addEventListener('mouseleave', function () {
        text.style.color = 'white';
    })
})