let h1 = document.querySelector('h1');
let copy = h1.innerHTML;

let str = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

let flag = false;

function matrix() {
    let index = 0;
    let i = setInterval(function () {
        let arr = copy.split('').map(function (val, idx) {
            if (idx < index) return val;
            return str[Math.floor(Math.random() * str.length)];
        })
        console.log(arr);
        let newArr = arr.join('');
        h1.innerHTML = newArr;
        index = index + 0.2;
        if (index >= copy.length) {
            clearInterval(i);
            h1.innerHTML = copy;
        }
        if (flag) {
            clearInterval(i);
            flag = false;
            h1.innerHTML = copy;
        }
    }, 50);
}

h1.addEventListener('mouseenter', matrix);
h1.addEventListener('mouseleave', function () {
    flag = true;
})