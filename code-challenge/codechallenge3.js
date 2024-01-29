const button = document.querySelector("button");
const resultSpec = document.querySelector("#result span");
const result = document.querySelector("#result h3");

function getNum(event) {
  event.preventDefault();
  const maxNumInput = document.querySelector("#max_num input");
  const guessNumInput = document.querySelector("#guess_num input");
  const maxNum = parseInt(maxNumInput.value);
  const guessNum = parseInt(guessNumInput.value);
  const computer = Math.floor(Math.random() * (maxNum + 1));

  if (maxNum < guessNum) {
    //입력값이 잘못된 경우
    resultSpec.innerText = "Estimated value must be less than maximum!";
    result.innerText = "Please re-write :<";
  } else if (computer === guessNum) {
    //사용자가 이긴 경우
    resultSpec.innerText = `You chose: ${guessNum}, the machine chose: ${computer}.`;
    result.innerText = "You Win!";
  } else {
    //사용자가 진 경우
    resultSpec.innerText = `You chose: ${guessNum}, the machine chose: ${computer}.`;
    result.innerText = "You lost!";
  }
}

button.addEventListener("click", getNum);
