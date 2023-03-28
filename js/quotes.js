const quotes = [
  {
    quote: " 준비하지 않은 자는 기회가 와도 소용없다.",
    author: "알렉시스 드 토크빌",
  },
  {
    quote: "평범함은 갈망의 대상이 아니라,회피의 대상이다.",
    author: "조디 포스터",
  },
  {
    quote: "인간의 진짜 성격은 그의 오락에 의해서 알 수 있다.",
    author: "레이놀즈",
  },
  {
    quote: "강인한 의지 없이는 뛰어난 재능도 없다.",
    author: "오노레 드 발자크",
  },
  {
    quote: "노력에 집착하라. 숙명적인 노력을.",
    author: "레오나르도 다 빈치",
  },
  {
    quote: "당신이 포기할 때, 나는 시작한다",
    author: "엘론 머스크",
  },
  {
    quote: "내일이란 오늘의 다른 이름일 뿐.",
    author: "윌리엄 포크너",
  },
  {
    quote: "살야야 할 이유를 아는 사람은 어떠한 상황도 견딜 수 있다.",
    author: "니체",
  },
  {
    quote: "나는 날마다 모든 면에서 점점 좋아지고 있다.",
    author: "에밀쿠에",
  },
  {
    quote: "스스로를 신뢰하는 순간 어떻게 살아야 할지 깨닫게 된다.",
    author: "요한 볼프강 폰 괴테",
  },
  {
    quote: "불가능한 일을 해보는 것은 신나는 일이다.",
    author: "월트 디즈니",
  },
  {
    quote: "할 수 있다고 믿는 사람은 결국 그렇게 된다.",
    author: "샤론 드골",
  },
];
// quote와 author로 구성된 object들이 나열된 배열

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
//html에서 #quote라는 id를 가진 객체에 있는 span중
//첫번째, 마지막 객체를 각각 불러옴

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
//'quotes'배열의 구성요소 수만큼 random에 곱해
//랜덤한 숫자 1개를 받은뒤 내림(floor)하여
// 해당 숫자에 해당하는 순서의 요소를 불러옴
// => 랜덤한 명언 불러옴

quote.innerText = todaysQuote.quote;
author.innerText = `-${todaysQuote.author}`;
//'quotes'배열의 요소 중 'todaysQuote'에 할당된 요소의
//quote 와 author를 각각 html객체에 대입함
//('quotes'은 quote와 author가 포함된 object로
//구성되어 있음)
