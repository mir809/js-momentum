const clock = document.querySelector("h2#clock");

function getClock() {
  const date = new Date();
  //오늘의 날짜, 현재 시간값 'date'로 정의

  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  //date에서 현재시각, 분, 초를 추출 하여 각 변수로 정의
  //추출된 값은 숫자(number)타입이기 때문에
  //String을 씌워서 글자(string)타입으로 바꿔줌
  //('padStart'는 대상이 string 타입일 때만 가능)
  //추출된 값이 최소 2자리가 되도록 하고
  //만약 2자리 미만이면 앞에 '0'을 붙여줌
  clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock();
setInterval(getClock, 1000);
//웹페이지 최초 실행시 함수 실행
//이후 1초마다 함수 실행 반복
