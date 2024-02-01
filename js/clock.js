const clock = document.querySelector("#clock");

function getClock() {
  const date = new Date();
  const hour = date.getHours().toString().padStart(2, "0");
  const min = String(date.getMinutes()).padStart(2, "0");
  //const sec = String(date.getSeconds()).padStart(2, "0");

  clock.innerText = `${hour}:${min}`;
  //   clock.innerText = new Date().toLocaleTimeString("es-US", { hour12: false });
}

getClock();
setInterval(getClock, 1000);
