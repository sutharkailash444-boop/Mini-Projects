let btn = document.querySelector('button');
let input = document.querySelector('input');
let message = document.querySelector('.message_para');
let city_name = document.querySelector('.city_name');
let cloud_para = document.querySelector('.cloud_para');
let tempressure_text = document.querySelector('#tempressure_text');
let humadity = document.querySelector('.humadity');
let sunrise = document.querySelector('.sunrise');
let wind = document.querySelector('.wind');
let sunset = document.querySelector('.sunset');
let span_message = document.querySelector('span');
let main_data = document.querySelector(".data");

btn.disabled = true;

function btn_disabled() {
    btn.disabled = true;
}
function btn_abled() {
    btn.disabled = false;
}

input.addEventListener('input', function () {
    message.innerHTML = "Enter a city and press Search";
    if (input.value === "") {
        btn_disabled();
    } else {
        btn_abled();
    }
})

let api_keys = "d7523231a7f73afa5a25359a057887d6";

function api_call(city, api_key) {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`
    let api = fetch(url);
    api.then(function (response) {
        message.innerHTML = "Loading...";
        if(!response.ok){
            throw new Error("Invalid City Name");
        } 
        return response.json();
    }).then(function(data){
        console.log(data);
        message.innerHTML = "Loeaded.";
        city_name.innerHTML = data.name;
        cloud_para.innerHTML = data.weather[0].description;
        humadity.innerHTML = `humidity : ${data.main.humidity}`;
        sunrise.innerHTML = `Sunrise : ${data.sys.sunrise}`;
        sunset.innerHTML = `Sunset : ${data.sys.sunset}`;
        wind.innerHTML = `Wind ${data.wind.speed}`;
        tempressure_text.innerHTML = `${data.main.temp}°C`;
        main_data.style.height = 300+'px';
        main_data.style.transform = 'scale(1)'; 
    }).catch(function(error){
        window.alert("invalid City Name");
        message.innerHTML = "Please enter valid city";
    })  
}

btn.addEventListener('click',function(){
    api_call(input.value,api_keys);
});

document.body.addEventListener('keypress',function(val){
    if(val.key==="Enter"){
        api_call(input.value,api_keys);
    }
})