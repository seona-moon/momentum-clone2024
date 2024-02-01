const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const visionTodo = document.querySelector("#todo-form");
const visionTodoList = document.querySelector("#todo-list");
const visionClock = document.querySelector("#clock");
const visionQuote = document.querySelector("#quote");
const visionWeather = document.querySelector("#weather");
const visionMomentum = document.querySelector("#momentum");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  localStorage.setItem(USERNAME_KEY, loginInput.value);
  paintGreeting();
}

function paintGreeting() {
  const username = localStorage.getItem(USERNAME_KEY);
  greeting.classList.remove(HIDDEN_CLASSNAME);
  visionClock.classList.remove(HIDDEN_CLASSNAME);
  visionTodo.classList.remove(HIDDEN_CLASSNAME);
  visionTodoList.classList.remove(HIDDEN_CLASSNAME);
  visionWeather.classList.remove(HIDDEN_CLASSNAME);
  visionQuote.classList.remove(HIDDEN_CLASSNAME);
  visionMomentum.classList.remove(HIDDEN_CLASSNAME);

  greeting.innerText = `Hello, ${username}! Keep Going!!`;
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  //이름이 저장 안되어있다면?
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  loginForm.classList.add(HIDDEN_CLASSNAME);
  paintGreeting();
}
