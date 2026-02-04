let start_btn_s = document.querySelector('.s_start_btn');
let stop_btn_s = document.querySelector('.s_stop_btn');
let reset_btn_s = document.querySelector('.s_reset_btn');

let hour_s = document.querySelector('.s_hour');
let minute_s = document.querySelector('.s_minute');
let second_s = document.querySelector('.s_second');

let s_hour = 0;
let s_minute = 0;
let s_second = 0;

let flag = false;
let reset = false;

stop_btn_s.disabled = true;
reset_btn_s.disabled = true;

function stopwatch_start() {
    stop_btn_s.disabled = false;
    reset_btn_s.disabled = false;
    start_btn_s.disabled = true;
    let i = setInterval(function () {
        if (s_second === 59) {
            s_minute++;
            s_second = 0;
        }
        if (s_minute === 59) {
            s_hour++;
            s_minute = 0;
        }
        s_second++;
        hour_s.innerHTML = s_hour;
        minute_s.innerHTML = s_minute;
        second_s.innerHTML = s_second;
        if (flag) {
            clearInterval(i);
            flag = false;
            start_btn_s.disabled = false;
        }
        if (reset) {
            clearInterval(i);
            hour_s.innerHTML = "00";
            minute_s.innerHTML = "00";
            second_s.innerHTML = "00";
            reset = false;
            s_hour = 0;
            s_minute = 0;
            s_second = 0;
            start_btn_s.disabled = false;
            stop_btn_s.disabled = true;
            reset_btn_s.disabled = true;
        }
    }, 1000);
}

start_btn_s.addEventListener('click', stopwatch_start);
stop_btn_s.addEventListener('click', function () {
    flag = true;
})
reset_btn_s.addEventListener('click', function () {
    reset = true;
})

let start_btn_t = document.querySelector('.t_start_btn');
let stop_btn_t = document.querySelector('.t_stop_btn');
let reset_btn_t = document.querySelector('.t_reset_btn');

let hour_t = document.querySelector('.t_hour');
let minute_t = document.querySelector('.t_minute');
let second_t = document.querySelector('.t_second');

let h_input = document.querySelector('#t_hour_input')
let m_input = document.querySelector("#t_minute_input");
let t_second = 60;

let_flag = false;
stop_btn_t.disabled = true;
reset_btn_t.disabled = true;
let t_stop_flag = false;
let t_reset_flag = false;

function time_start() {
    if (h_input.value === "") {
        window.alert("Please set a timer");
    } else if (h_input.value > 60 || m_input.value > 60) {
        window.alert("Please Enter Valid Timer");
    } else {
        t_flag = true;
        let i = setInterval(function () {
            if (t_second <= 0) {
                t_second = 60;
                if (m_input.value <= 0) {
                    m_input.value = 60;
                } else {
                    m_input.value--;
                }
            }
            if (m_input.value <= 0) {
                if (h_input.value <= 0) {
                    clearInterval(i);
                    hour_t.innerHTML = "00";
                    minute_t.innerHTML = "00";
                    second_t.innerHTML = "00";
                    window.alert("Time's up");
                } else {
                    h_input.value--;
                    m_input.value = 60;
                }
            }
            t_second--;
            hour_t.innerHTML = h_input.value;
            minute_t.innerHTML = m_input.value;
            second_t.innerHTML = t_second;
            if (t_stop_flag) {
                clearInterval(i);
                t_stop_flag = false;
            }
            if (t_reset_flag) {
                clearInterval(i);
                hour_t.innerHTML = "00";
                minute_t.innerHTML = "00";
                second_t.innerHTML = "00";
                t_reset_flag = false;
                stop_btn_t.disabled = true;
                reset_btn_t.disabled = true;
            }
        }, 1000);
    }
    if (t_flag) {
        stop_btn_t.disabled = false;
        reset_btn_t.disabled = false;
    }
}

start_btn_t.addEventListener('click', time_start);
stop_btn_t.addEventListener('click', function () {
    t_stop_flag = true;
})
reset_btn_t.addEventListener('click', function () {
    t_reset_flag = true;
})