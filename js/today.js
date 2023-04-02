const today = document.querySelector("#today");

function getToday() {
  const date = new Date();

  const year = String(date.getFullYear()).padStart(2, "0");
  const month = String(date.getMonth()).padStart(2, "0");
  const day = String(date.getday()).padStart(2, "0");
  today.innerText = `${year}. ${month}. ${day}`;

  console.log(day);
}

getToday();
setInterval(getToday, 1000);
//웹페이지 최초 실행시 함수 실행
//이후 1초마다 함수 실행 반복
