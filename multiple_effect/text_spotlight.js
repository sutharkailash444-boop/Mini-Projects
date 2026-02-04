let h1 = document.querySelector('h1');
let box = document.querySelector('.box');
document.body.addEventListener('mousemove',function(val){
    let x = val.clientX + 'px';
    let y = 40+val.clientY + 'px';

    box.style.background = `radial-gradient(150px at ${x} ${y},transparent,black)`;

    console.log(x,y)
})