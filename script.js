let hours = document.querySelector(".cl-1");
let minutes = document.querySelector(".cl-3");
let seconds = document.querySelector(".cl-5");
let day = document.querySelector(".day")
let dateFirst = document.querySelector(".date-first");
let month = document.querySelector(".month");
let year = document.querySelector(".year");


setInterval(() => {
    const currentTime = new Date();

    hours.innerHTML= (currentTime.getHours()<10?"0":"") + currentTime.getHours();
    minutes.innerHTML = (currentTime.getMinutes()<10?"0":"") + currentTime.getMinutes();
    seconds.innerHTML = (currentTime.getSeconds()<10?"0":"") + currentTime.getSeconds();
}, 1000);
    
const currentDate = new Date();

day.innerHTML = currentDate.toDateString();
// dateFirst.innerHTML = currentDate.toDateString().getDay();
// month.innerHTML = currentDate.getMonth();
// year.innerHTML = currentDate.getFullYear();

