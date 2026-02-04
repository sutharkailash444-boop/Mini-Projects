let input = document.querySelector('input');
let button = document.querySelectorAll('.num');
let clear_btn = document.querySelector('.clear');
let result_btn = document.querySelector('.equal');

button.forEach(function(val){
    val.addEventListener('click',function(){
        input.value += val.innerHTML;
    })
})

clear_btn.addEventListener('click',function(){
    input.value = "";
})

result_btn.addEventListener('click',function(){
    try{
    let result = eval(input.value);
    input.value = '';
    input.value = result;
}
    catch{
        input.value = '';
        input.value = 'Error';
    }
})