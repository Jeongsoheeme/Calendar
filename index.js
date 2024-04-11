let nowDate = new Date();
const weekArr = ["일", "월", "화", "수", "목", "금", "토"];
let year = nowDate.getFullYear();
let month = nowDate.getMonth() + 1;
let day = nowDate.getDate();
let weekday = weekArr[nowDate.getDay()];

let todayDate = document.getElementById('todayDate');
let todayWeek = document.getElementById('todayWeek');

todayDate.innerHTML = day;
todayWeek.innerHTML = weekday;

const days31 = ["1", "3", "5", "7", "8", "10", "12"];
const days30 = ["4", "6", "9", "7", "11"];
const days28 = ["2"];

let calendarDay = document.querySelector(".calendar-day");
calendarDay.innerHTML = "";
let calendarWeek = document.querySelector(".calendar-week");
calendarWeek.innerHTML = "";
let calendarMonth = document.querySelector(".calendar-month");
calendarMonth.innerHTML = month;

for(let i = 0; i < 7; i++){
    calendarWeek.innerHTML += `<li>${weekArr[i]}</li>`;
}

function drawCalendar (month){
    if(days31.includes(month.toString())){
        for(let i = 1; i < 32; i++){
            calendarDay.innerHTML += `<li>${i}</li>`;
        }
    } else if (days30.includes(month.toString())){
        for(let i = 1; i < 31; i++){
            calendarDay.innerHTML += `<li>${i}</li>`;
        }
    } else if (days28.includes(month.toString())){
        for(let i = 1; i < 29; i++){
            calendarDay.innerHTML += `<li>${i}</li>`;
        }
    }
}

drawCalendar(month);

document.getElementById('prev').addEventListener('click',
    function (){
        calendarDay.innerHTML = '';
        if(month === 1){
            year -= 1;
            month = '13';
        }
        month -= 1;
        calendarMonth.innerHTML = month;
        drawCalendar(month);
        console.log(year);    
    }
)

document.getElementById('next').addEventListener('click',
    function (){
        calendarDay.innerHTML = '';
        if(month === 12){
            year += 1;
            month = 0;
        }
        month += 1;
        calendarMonth.innerHTML = month;
        drawCalendar(month);
        console.log(year);    
    }
)

console.log(month);
