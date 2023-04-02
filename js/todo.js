const todoPart = document.querySelector(".todo");

const todoForm = document.getElementById("todo-form");
const todoInput = todoForm.querySelector("input");
const todoList = document.getElementById("todo-list");

let toDos = [];

const toDosKEY = "todos";

const savedToDos = localStorage.getItem(toDosKEY);
//localStorage에서 toDosKEY키를 가진 값을 불러옴

if (savedToDos !== null) {
  //localStorage에 toDosKEY를 가진 값이 있는경우 실행
  const parsedTodos = JSON.parse(savedToDos);
  //toDosKEY키를 가진 값들을 배열의 형태로 바꿔서 불러옴
  toDos = parsedTodos;
  //기존 localStorage에 있던 값들을 toDos배열에 넣어줌
  //(페이지 새로고침 후 새로운 값을 넣었을때
  // 기존 값+ 새로운 값이 되게 만듦)
  parsedTodos.forEach(paintTodo);
  //배열parsedTodos에 있는 각각의 item에 함수 적용,
  //paintTodo함수를 통해서 localStorage에있는
  //parsedTodos배열의 값들을 화면에 나타내줌
}

function saveToDos() {
  //입력된 값을 브라우저에 저장하는 함수
  localStorage.setItem(toDosKEY, JSON.stringify(toDos));
  //toDos배열에 있는 값을 "todos"키와 함께 저장,
  //입력되는 값을 배열처럼 보이는 형태의 string으로
  //바꾸기 위해 JSON.stringify을 씌워줌
  // ( [array] => "[array]" )
  //이는 나중에 todos키를 가진 값들을 불러올때
  //배열의 형태로 불러오기 위함
}

function deleteTodo(btnClick) {
  //todo list를 제거하기 위한 함수
  const delLi = btnClick.target.parentElement;
  //클릭한 버튼의 부모 element를 불러옴
  delLi.remove();
  //해당 element를 삭제
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(delLi.id));
  //x버튼을 클릭했을 때 해당요소의 id와 일치한 id를
  //가진 object를 toDos배열에서 제외시킴
  saveToDos();
  //saveToDos함수를 실행 함으로써 기존 localStorage에
  //있던 값을 현재 바뀐 toDos배열에 있는 값으로 바꿔줌
}

function paintTodo(newTodoObject) {
  //todo list를 생성하여 화면에 나타내기 위한 함수
  const list = document.createElement("li");
  list.id = newTodoObject.id;
  const text = document.createElement("span");
  text.innerText = newTodoObject.text;
  //text에 newTodo로 입력받은 값을 넣어줌
  const btn = document.createElement("button");
  btn.innerText = "❌";
  //html요소 'li','span','button'을 생성

  todoList.appendChild(list);
  list.appendChild(text);
  list.appendChild(btn);
  //todoList의 하위 요소로 list를 추가 해주고
  //list의 하위 요소로 text와 btn을 추가 해줌
  btn.addEventListener("click", deleteTodo);
  //btn을 눌렸을 시 todo를 제거 하기 위한 함수를 불러옴
  btn.addEventListener("mouseenter", hover);
  btn.addEventListener("mouseleave", leave);

  function hover() {
    text.style.textDecoration = `line-through`;
    text.style.backgroundColor = `gray`;
    text.style.opacity = `0.3`;
    text.style.borderRadius = `8px`;
  }
  function leave() {
    text.style.textDecoration = `none`;
    text.style.backgroundColor = `transparent`;
    text.style.opacity = `1`;
  }
}

function todoSubmit(submit) {
  //submit이벤트가 발생할때마다 동작하는 함수
  //input에 입력된 값을 받음
  submit.preventDefault();
  const newTodo = todoInput.value;
  //'nuwTodo'라는 변수명을 가진 주소에
  //현재 todoInput.value을 할당한다.
  //(컴퓨터 저장 공간에서 기억)
  todoInput.value = "";
  //현재 todoInput.value의 값을 변경 한다.
  //=> 우리 눈에 직접 보이는 html을 변경한다.
  //('newTodo'변수값 영향 x)
  const newTodoObject = {
    text: newTodo,
    id: Date.now(),
  };
  //배열에 저장시 단순 텍스트가아닌 object의 형식으로
  //저장하기 위한 변수 정의
  //각 item이 서로 다른 id를 갖도록 하기위해
  //item을 생성한 현재시간을 id로 줌
  toDos.push(newTodoObject);
  //toDos(배열)안에 입력받은 값을 object형태로 넣어줌
  paintTodo(newTodoObject);
  //입력된 newTodo를 list 형태로
  //화면에 나타내주기 위한 함수 실행
  saveToDos();
  //입력된 값을 브라우저에 저장하기 위한 함수 실행
  arlamStack();
}

todoForm.addEventListener("submit", todoSubmit);
