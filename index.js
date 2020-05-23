const now = new Date();
// 1 - seconds
const seconds = now.getSeconds();
const secondsDegrees = (seconds / 60) * 360;
const sec = document.querySelector("#sec-hand > animateTransform");
sec.setAttribute("from", `${secondsDegrees} 579.15 378`);
sec.setAttribute("to", `${secondsDegrees + 360}  579.15 378`);

// 2 - minutes
const minutes = now.getMinutes();
const minutesDegrees = 6 * minutes + (1 / 3600) * seconds;
const min = document.querySelector("#min-hand > animateTransform");
min.setAttribute("from", `${minutesDegrees} 579.15 378`);
min.setAttribute("to", `${minutesDegrees + 360} 579.15 378`);

// 3 - hours
const hours = now.getHours();
const hoursDegrees = (0.5 / 60) * 3600 * hours;
const hour = document.querySelector("#hour-hand > animateTransform");
hour.setAttribute("from", `${hoursDegrees} 579.15 378`);
hour.setAttribute("to", `${hoursDegrees + 360} 579.15 378`);
