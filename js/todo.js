const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");
const TODOS_KEY = "todos";
let toDos = [];

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
  const li = event.target.parentElement; //클릭한 버튼이 어떤 리스트인지에 대한 정보
  li.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id)); //id를 이용하여 toDo 제거
  saveToDos(); //로컬에도 변경사항 저장
}

function paintToDo(newToDoObj) {
  const li = document.createElement("li");
  li.id = newToDoObj.id;

  const span = document.createElement("span");
  span.innerText = newToDoObj.text;

  const icon = document.createElement("i");
  icon.classList.add("fa-regular", "fa-rectangle-xmark");
  icon.addEventListener("click", deleteToDo);

  li.appendChild(span);
  li.appendChild(icon);
  toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
  event.preventDefault();

  const newToDoObj = {
    text: toDoInput.value,
    id: Date.now(),
  };
  toDoInput.value = "";

  toDos.push(newToDoObj);
  paintToDo(newToDoObj);
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
  //로컬 스토리지에 값이 있으면
  toDos = JSON.parse(savedToDos);
  toDos.forEach(paintToDo);
}
