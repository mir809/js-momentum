const images = [
  "0.jpg",
  "1.jpg",
  "2.jpg",
  "3.jpg",
  "4.jpg",
  "5.jpg",
  "6.jpg",
  "7.jpg",
  "8.jpg",
  "9.jpg",
  "10.jpg",
];

const choseimage = images[Math.floor(Math.random() * images.length)];
//quotes.js 의 기능과 동일
// 랜덤한 이미지를 가져옴

const bgImage = document.createElement("img");
//html객체(img)를 자바스크립트에서 생성,
//'bgImage'로 정의

bgImage.src = `img/${choseimage}`;
//생성한 img의 src에
//랜덤한 이미지(choseimage)를 넣어줌

document.body.prepend(bgImage);
//자바스크립트에서 만든 객체를 실제로 html에 추가해줌
// => body안에 랜덤으로 불러온 이미지(<img>) 추가
/* 'append'의 경우 해당 객체의 자식중 가장 뒤에 위치
가장 앞에 위치시킬 때는 'prepend'사용
*/

//html에 <img>미리 생성 했을 경우 아래 코드로 가능
/*
const bgImage = document.querySelector("img");
bgImage.src = `img/${choseimage}`;
*/
