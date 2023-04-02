const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN = "hidden";

const USERNAME_KEY = "username";

const savedUsername = localStorage.getItem(USERNAME_KEY);

function loginSubmit(info) {
  img.classList.remove("filter");

  loginForm.classList.add(HIDDEN);

  todoPart.classList.remove(HIDDEN);
  todoListBtn.classList.remove(HIDDEN);
  quotePart.classList.remove("visi");
  greeting.classList.remove(HIDDEN);

  info.preventDefault();

  const inputName = loginInput.value;

  localStorage.setItem(USERNAME_KEY, inputName);

  paintGreetings(inputName);

  for (let index = 0; index < 50; index++) {
    setTimeout(makeSnow, 500 * index);
  }
}

const date = new Date();

const hourInt = date.getHours();

function paintGreetings(greetingName) {
  if (hourInt < 12 && hourInt >= 5) {
    greeting.innerText = `Good Morning ${greetingName} !`;
  } else if (hourInt < 17 && hourInt >= 12) {
    greeting.innerText = `Good Afternoon ${greetingName} !`;
  } else if (hourInt < 22 && hourInt >= 17) {
    greeting.innerText = `Good Evening ${greetingName} !`;
  } else if (hourInt < 5 && hourInt >= 22) {
    greeting.innerText = `Good Night ${greetingName} !`;
  }

  greeting.classList.remove(HIDDEN);
}

if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN);

  loginForm.addEventListener("submit", loginSubmit);

  img.classList.add("filter");

  todoPart.classList.add(HIDDEN);
  todoListBtn.classList.add(HIDDEN);
  quotePart.classList.add("visi");
} else {
  paintGreetings(savedUsername);

  img.classList.remove("filter");

  for (let index = 0; index < 50; index++) {
    setTimeout(makeSnow, 500 * index);
  }
}
