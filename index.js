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
const hoursDegrees = ((hours * 3600 + minutes * 60 + seconds) * 360) / 43200;
const hour = document.querySelector("#hour-hand > animateTransform");
hour.setAttribute("from", `${hoursDegrees} 579.15 378`);
hour.setAttribute("to", `${hoursDegrees + 360} 579.15 378`);

for (let i = 1; i <= 12; i++) {
  const el = document.createElementNS("http://www.w3.org/2000/svg", "line");

  el.setAttribute("x1", "579.15");
  el.setAttribute("y1", "305");
  el.setAttribute("x2", "579.15");
  el.setAttribute("y2", "310");
  el.setAttribute("transform", "rotate(" + (i * 360) / 12 + " 579.15 378)");
  el.setAttribute("style", "stroke: #7D807D;");

  const panda = document.getElementById("panda");
  panda.append(el);
}
