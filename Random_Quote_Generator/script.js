const quotes = [
    {
        quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
        author: "Winston Churchill"
    },
    {
        quote: "Believe you can and you're halfway there.",
        author: "Theodore Roosevelt"
    },
    {
        quote: "Do not wait for the perfect moment, take the moment and make it perfect.",
        author: "Zoey Sayward"
    },
    {
        quote: "Hard work beats talent when talent doesn't work hard.",
        author: "Tim Notke"
    },
    {
        quote: "Dream big. Start small. Act now.",
        author: "Robin Sharma"
    },
    {
        quote: "Your time is limited, so don't waste it living someone else’s life.",
        author: "Steve Jobs"
    },
    {
        quote: "Push yourself, because no one else is going to do it for you.",
        author: "Unknown"
    },
    {
        quote: "Consistency is what transforms average into excellence.",
        author: "Anonymous"
    }
];

let math_btn = document.querySelector('#math_btn');
let api_btn = document.querySelector('#api_btn');

let math_quote = document.querySelector('#math_h3');
let api_quote = document.querySelector('#api_h3');

let math_author = document.querySelector('.math_para');
let api_author = document.querySelector('.api_para');

function Math_floor() {
    let red = Math.floor(Math.random() * 300);
    let green = Math.floor(Math.random() * 300);
    let blue = Math.floor(Math.random() * 300);

    let random_number = Math.floor(Math.random() * quotes.length);
    math_quote.innerHTML = quotes[random_number].quote;
    math_author.innerHTML = `- ${quotes[random_number].author}`;
    math_quote.style.color = `rgb(${red},${green},${blue})`;
}

math_btn.addEventListener('click', Math_floor);

function Api() {
    let red = Math.floor(Math.random() * 300);
    let green = Math.floor(Math.random() * 300);
    let blue = Math.floor(Math.random() * 300);

    let api = fetch("https://api.api-ninjas.com/v1/quotes", {
        headers: {
            'X-Api-Key': 'WCLPRfFD20HDzwD8XL5qgA==NGxwo9MpkWnAADpS'
        }
    });
    api.then(function (data) {
        return data.json();
    }).then(function (data_2) {
        api_quote.innerHTML = data_2[0].quote;
        api_author.innerHTML = `- ${data_2[0].author}`;
        api_quote.style.color = `rgb(${red},${green},${blue})`;
    })
}

api_btn.addEventListener('click', Api);