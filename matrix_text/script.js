let h1 = document.querySelector('h1');
let copy = h1.innerHTML;

let str = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

function matrix() {

    let count = 0;

    let i = setInterval(function () {


        let result = copy.split('').map(function (value, index) {

            if (index < count) {

                return value;

            }

            return str[Math.floor(Math.random() * str.length)];

        })

        let string = result.join('');

        h1.innerHTML = string;

        count = count + 0.2;

        if (count > copy.length) {

            clearInterval(i);

        }

        console.log(result);

    }, 50);


    h1.addEventListener('mouseleave', function () {

        clearInterval(i);

        h1.innerHTML = 'Vinod Suthar Kumar';

    })

}

h1.addEventListener('mouseenter', matrix);
