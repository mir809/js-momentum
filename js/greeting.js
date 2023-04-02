const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN = "hidden"; //class명 hidden을 변수 HIDDEN으로 정의한다.

const USERNAME_KEY = "username";
//localStorage에 저장할 데이터의 KEY이름을
//'username'으로 지정
const savedUsername = localStorage.getItem(USERNAME_KEY);
//localStorage에 저장된 username(=USERNAME_KEY)이라는
//key를 가진 데이터의 값을 가져와서 'savedUsername'에 할당

function loginSubmit(info) {
  img.classList.remove("filter");

  loginForm.classList.add(HIDDEN);

  todoPart.classList.remove(HIDDEN);
  todoListBtn.classList.remove(HIDDEN);
  quotePart.classList.remove("visi");
  greeting.classList.remove(HIDDEN);

  info.preventDefault();
  //loginSubmit함수실행시 submit기능이 자동적으로
  //실행되지 않게함(새로고침 X)
  //loginForm에 class = "hidden"을 추가
  // => loginForm숨김
  const inputName = loginInput.value;
  //사용자가 loginInput에 입력한 값을
  //inputName로 정의
  localStorage.setItem(USERNAME_KEY, inputName);
  //localStorage에 사용자가 입력한 값(inputName)을 저장,
  //키 명칭은 USERNAME_KEY ="username"으로 지정
  paintGreetings(inputName);
  //paintGreetings함수 호출,
  //인수에 inputName(=사용자가 입력한 값) 대입
  for (let index = 0; index < 50; index++) {
    setTimeout(makeSnow, 500 * index);
  }
}

const date = new Date();

const hourInt = date.getHours();

function paintGreetings(greetingName) {
  if (hourInt < 12 && hourInt >= 5) {
    greeting.innerText = `Good Morning ${greetingName} !`;
    //greeting에 텍스트 ' ${greetingName} !'삽입
    //이때 greetingName는 함수 호출시 적용한 인수에 대응함
  } else if (hourInt < 17 && hourInt >= 12) {
    greeting.innerText = `Good Afternoon ${greetingName} !`;
  } else if (hourInt < 22 && hourInt >= 17) {
    greeting.innerText = `Good Evening ${greetingName} !`;
  } else if (hourInt < 5 && hourInt >= 22) {
    greeting.innerText = `Good Night ${greetingName} !`;
  }

  greeting.classList.remove(HIDDEN);
  //greeting에서 hidden클래스 제거
  // => greeting보이게 함
}

if (savedUsername === null) {
  //savedUsername이 비어있을경우
  loginForm.classList.remove(HIDDEN);
  //hidden제거 => loginForm을 보여줌
  loginForm.addEventListener("submit", loginSubmit);
  //loginForm이 submit될때 loginSubmit함수 호출

  img.classList.add("filter");

  todoPart.classList.add(HIDDEN);
  todoListBtn.classList.add(HIDDEN);
  quotePart.classList.add("visi");
} else {
  paintGreetings(savedUsername);
  //savedUsername에 값이 들어있는 경우
  //paintGreetings함수 호출, 인수에
  //savedUsername(=localStorage에 저장되어 있는 값)대입
  img.classList.remove("filter");

  for (let index = 0; index < 50; index++) {
    setTimeout(makeSnow, 500 * index);
  }
}
