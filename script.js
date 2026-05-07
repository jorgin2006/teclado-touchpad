const keys = document.querySelectorAll('.key');

const display =
document.getElementById('display');

const keyboard =
document.getElementById('keyboard');

const touchpad =
document.getElementById('touchpad');

const glow =
document.querySelector('.touch-glow');

const counter =
document.getElementById('counter');

const timer =
document.getElementById('timer');

const speed =
document.getElementById('speed');

const themeBtn =
document.getElementById('themeBtn');

let totalKeys = 0;
let seconds = 0;

setInterval(() => {

    seconds++;

    timer.innerText = seconds + 's';

    let wpm =
    Math.floor(totalKeys / 5);

    speed.innerText = wpm;

},1000);

keys.forEach(key => {

    key.addEventListener('click', () => {

        let value = key.innerText;

        if(value === 'ESPAÇO'){

            display.value += ' ';

        }

        else if(value === '⌫'){

            display.value =
            display.value.slice(0,-1);

        }

        else{

            display.value += value;

        }

        totalKeys++;

        counter.innerText = totalKeys;

    });

});

window.addEventListener('keydown',(e)=>{

    const tecla =
    e.key.toUpperCase();

    if(tecla === 'BACKSPACE'){

        display.value =
        display.value.slice(0,-1);

        return;
    }

    if(tecla === ' '){

        display.value += ' ';

        return;
    }

    if(tecla.match(/[A-Z]/)){

        display.value += tecla;

        totalKeys++;

        counter.innerText = totalKeys;

    }

});

window.addEventListener('mousemove',(e)=>{

    let x =
    (window.innerWidth / 2 - e.pageX) / 40;

    let y =
    (window.innerHeight / 2 - e.pageY) / 40;

    keyboard.style.transform =
    `rotateY(${x}deg) rotateX(${y}deg)`;

});

touchpad.addEventListener('mousemove',(e)=>{

    const rect =
    touchpad.getBoundingClientRect();

    const x =
    e.clientX - rect.left;

    const y =
    e.clientY - rect.top;

    glow.style.left = `${x - 60}px`;

    glow.style.top = `${y - 60}px`;

});

themeBtn.addEventListener('click',()=>{

    document.body.classList.toggle('light');

    if(document.body.classList.contains('light')){

        themeBtn.innerText = '☀';

    }

    else{

        themeBtn.innerText = '🌙';

    }

});