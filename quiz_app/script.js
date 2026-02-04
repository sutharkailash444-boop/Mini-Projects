let arr = [
    {
        question: 'HTML Stands For ?',
        option_1: 'Hyper text markup language',
        option_2: 'hyper link  markup language',
        option_3: 'Hyper text markup language',
        option_4: 'Hyper link markup language',
        answer: 1,
    },
    {
        question: 'CSS Stands For ?',
        option_1: 'Hyper text markup language',
        option_2: 'hyper link  markup language',
        option_3: 'Hyper text markup language',
        option_4: 'Hyper link markup language',
        answer: 3,
    },
    {
        question: 'JAVACSRIPT Stands For ?',
        option_1: 'Hyper text markup language',
        option_2: 'hyper link  markup language',
        option_3: 'Hyper text markup language',
        option_4: 'Hyper link markup language',
        answer: 2,
    },
    {
        question: 'REACT Stands For ?',
        option_1: 'Hyper text markup language',
        option_2: 'hyper link  markup language',
        option_3: 'Hyper text markup language',
        option_4: 'Hyper link markup language',
        answer: 4,
    },
    {
        question: 'TAILWIND Stands For ?',
        option_1: 'Hyper text markup language',
        option_2: 'hyper link  markup language',
        option_3: 'Hyper text markup language',
        option_4: 'Hyper link markup language',
        answer: 2,
    },
]

let start_btn = document.querySelector('.start');
let next_btn = document.querySelector('.next');

let option_box = document.querySelector('.option_box');
let h1 = document.querySelector('h1');

let sum = '';
let index = 0 ;

next_btn.disabled = true;

function start_btn_func() {
    sum += `<div class="option">${arr[index].option_1}</div>
            <div class="option">${arr[index].option_2}</div>
            <div class="option">${arr[index].option_3}</div>
            <div class="option">${arr[index].option_4}</div>`
            
    h1.innerHTML = arr[index].question;

    start_btn.style.display = 'none';

    option_box.innerHTML = sum;

}

function next_btn_func(){
    let option = document.querySelector('.option');
    console.log(option);
}

start_btn.addEventListener('click',start_btn_func);
next_btn.addEventListener('click',next_btn_func);