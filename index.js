
// const clockSecond = document.querySelector('.clock-second');
// const clockMinute = document.querySelector('.clock-minute');
// const clockHour = document.querySelector('.clock-hour');


// function setDate() {
    const now = new Date();
    // 1 - seconds
    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90;  // 0s = 0degress and 59s = 360degrees    
    const sec = document.querySelector("#sec-hand > animateTransform");
    sec.setAttribute("from", `${secondsDegrees} 579.15 378`);
    sec.setAttribute("to", `${secondsDegrees + 360}  579.15 378`);
    console.log(sec) 

//     // 2 - minutes 
    const minutes = now.getMinutes();
    const minutesDegrees = ((minutes / 60) * 360) + 90;
    const min = document.querySelector("#min-hand > animateTransform");
    min.setAttribute("from", `${minutesDegrees} 579.15 378`);
    min.setAttribute("to", `${minutesDegrees + 360} 579.15 378`);

    
    // 3 - hours
    const hours = now.getHours();
    const hoursDegrees = ((hours / 12) * 360) + 90;
    const hour = document.querySelector("#min-hand > animateTransform");
    hour.setAttribute("from", `${hoursDegrees} 579.15 378`);
    hour.setAttribute("to", `${hoursDegrees + 360} 579.15 378`);



// }

// setInterval(setDate, 1000);


from="${shifter(minuteAngle)}"
to="${shifter(minuteAngle + 360)}"
