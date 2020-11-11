const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minsEl = document.getElementById("mins");
const secondEl = document.getElementById("seconds");
//variable global del scope
const newYear = "31 October 2021";

function countdown() {
  /* operadores + * - /  || && ! */
  const newyearDate = new Date(newYear);
  const currentDate = new Date();
  //* trabajar  el tiempo en funcion de los segundos
  const totalSeconds = (newyearDate - currentDate) / 1000;
  //* los dias iran en esa misma direccion = al numero de segundos dividido por 3600 que son los de una hora entre 24 que son las horas del dia
  const days = Math.floor(totalSeconds / 3600 / 24);
  const hours = Math.floor(totalSeconds / 3600) % 24;
  const mins = Math.floor(totalSeconds / 60) % 60;
  const seconds = Math.floor(totalSeconds) % 60;
  //todo insertar los valores detro del html
  daysEl.innerHTML = days;
  hoursEl.innerHTML = formatTime(hours); // igual al resultado de la misma
  minsEl.innerHTML = formatTime(mins);
  secondEl.innerHTML = formatTime(seconds);
}

/* otra funcion para transformar */
function formatTime(time) {
  //esto es x = horas o dias o segundos
  /* scoope donde veo en la funcion  */
  //interpolacion que es de tarea
  return time < 10 ? `0${time}` : time;
}

/* invocacion de la funcion🐴 */
countdown();

setInterval(countdown, 1000);
