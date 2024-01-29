const quotes = [
  { quote: "하루 하루는 성실하게, 인생 전체는 되는 대로", author: "이동진" },
  {
    quote:
      "당신이 세상을 바꿀 수 없다고 말하는 사람에는 두 종류가 있다. 시도하기를 두려워하는 사람들, 당신이 성공할까 봐 두려워하는 사람들",
    author: "레이 고포스",
  },
  {
    quote:
      "당신이 정말로 뭔가를 원한다면 기다리지 마라. 견디지 못하는 법을 스스로에게 가르쳐라",
    author: "구르박쉬 차할",
  },
  {
    quote:
      "동기 부여가 당신을 시작하게 한다. 습관이 당신을 계속 움직이게 한다.",
    author: "짐 륜",
  },
  {
    quote: "이기기 위해서는 한 번 이상 전쟁을 치러야 할 때도 있다.",
    author: "마가렛 대처",
  },
  {
    quote:
      "성공을 갈망할 때만 성공할 수 있고, 실패해도 상관없다고 생각할 때만 실패할 수 있다",
    author: "필리포스",
  },
  { quote: "게으른 예술가가 만든 명작은 없다", author: "미상" },
  {
    quote: "미래는 현재 우리가 무엇을 하는가에 달려있다",
    author: "마하트마 간디",
  },
  {
    quote:
      "남들과의 비교는 의미가 없다. 중요한 것은 어제의 나보다 나아졌는지의 여부이다.",
    author: "문서영",
  },
  {
    quote: "해야할 일은 과감히 하라, 결심한 일은 반드시 실행하라.",
    author: "벤자민 프랭클린",
  },
  {
    quote: "최대한의 삶을 살고, 최대한 긍정적인 것에 집중하자.",
    author: "매트 카메론",
  },
  {
    quote:
      "꿈은 날짜와 함께 적어 놓으면 목표가 되고, 목표를 잘게 나누면 계획이 되며, 계획을 실행에 옮기면 꿈은 실현되는 것이다",
    author: "그렉 S 리드",
  },
];
const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

function setQuote() {
  todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
  quote.innerText = todaysQuote.quote;
  author.innerText = todaysQuote.author;
}

setInterval(setQuote, 10000);
