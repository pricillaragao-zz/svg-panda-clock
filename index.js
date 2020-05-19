
const clockSecond = document.querySelector('.clock-second');
const clockMinute = document.querySelector('.clock-minute');
const clockHour = document.querySelector('.clock-hour');


function setDate() {
    const now = new Date();
    // 1 - seconds
    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90;  // 0s = 0degress and 59s = 360degrees    
    clockSecond.style.transform = `rotate(${secondsDegrees}deg)`;
    console.log(seconds);

    // 2 - minutes 
    const minutes = now.getMinutes();
    const minutesDegrees = ((minutes / 60) * 360) + 90;
    clockMinute.style.transform = `rotate(${minutesDegrees}deg)`;
   
    // 3 - hours
    const hours = now.getHours();
    const hoursDegrees = ((hours / 12) * 360) + 90;
    clockHour.style.transform = `rotate(${hoursDegrees}deg)`; 


}

setInterval(setDate, 1000);


