const clockTitle = document.querySelector(".js-clock");
const clockText = document.querySelector("h3");

function christmasCountdown() {
  // 현재 날짜
  const currentDate = new Date();
  // 크리스마스의 월은 11(12월), 일은 25일
  const christmasDate = new Date(currentDate.getFullYear(), 11, 25);
  // 현재 날짜와 크리스마스 사이의 시간 차이 계산
  const timeDiff = christmasDate - currentDate;
  // 밀리초(ms)에서 일(day)로 변환
  const daysUntilChristmas = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));

  return daysUntilChristmas;
}

function clockCounter() {
  const date = new Date();
  const hour = date.getHours();
  const min = date.getMinutes();
  const sec = date.getSeconds();

  clockText.innerText = `${christmasCountdown()}d ${String(23 - hour).padStart(
    2,
    "0"
  )}h ${String(59 - min).padStart(2, "0")}m ${String(59 - sec).padStart(
    2,
    "0"
  )}s`;
}

clockCounter();
setInterval(clockCounter, 1000);
