// 가위 버튼에 적용할 click handler
const SCISSORS = '가위';
const ROCK = '바위';
const PAPER = '보';

// 함수 정의
function onSissorsClick() {     // 버튼 클릭 -> userInput prompt 필요 X

  let comInput;                 // 지역 변수로 처리
  let randomNum = Math.random();

  if (randomNum < 0.33) comInput = SCISSORS;
  else if (randomNum < 0.66) comInput = ROCK;
  else comInput = PAPER;

  if (comInput === SCISSORS){
    alert(`컴퓨터 : ${comInput} - 무승부`);
  } else if (comInput === ROCK) {
    alert(`컴퓨터 : ${comInput} - 패`);
  } else {
    alert(`컴퓨터 : ${comInput} - 승`);
  }
}

// onRockClick()
function onRockClick() {

  let comInput;
  let randomNum = Math.random();

  if (randomNum < 0.33) comInput = SCISSORS;
  else if (randomNum < 0.66) comInput = ROCK;
  else comInput = PAPER;

  if (comInput === SCISSORS){
    alert(`컴퓨터 : ${comInput} - 승`);
  } else if (comInput === ROCK) {
    alert(`컴퓨터 : ${comInput} - 무승부`);
  } else {
    alert(`컴퓨터 : ${comInput} - 패`);
  }
}

// onPaperClick() 정의하고 index.html에 대입하고 최종 결론을 내세요.
function onPaperClick() {

  let comInput;
  let randomNum = Math.random();

  if (randomNum < 0.33) comInput = SCISSORS;
  else if (randomNum < 0.66) comInput = ROCK;
  else comInput = PAPER;

  if (comInput === SCISSORS){
    alert(`컴퓨터 : ${comInput} - 패`);
  } else if (comInput === ROCK) {
    alert(`컴퓨터 : ${comInput} - 승`);
  } else {
    alert(`컴퓨터 : ${comInput} - 무승부`);
  }
}

// 위의 코드는 call1() 유형으로 각각의 3개의 함수로 정의
// 밑의 코드는 call2() 유형으로 하나의 함수로 통합
function onButtonClick(userInput) {
  
  let comInput;
  let randomNum = Math.random();

  if (randomNum < 0.33) comInput = SCISSORS;
  else if (randomNum < 0.66) comInput = ROCK;
  else comInput = PAPER;

  // 출력문 리팩토링 파트
  let result = `컴퓨터 : ${comInput}`

  if (userInput === SCISSORS) {
    if(comInput === SCISSORS){
      result += ` - 무승부 `;
    }else if(comInput === ROCK) {
      result += ` - 패 `;
    } else {
      result += ` - 승 `;
    }
  } else if (userInput === ROCK) {
  if(comInput === SCISSORS){
    result += ` - 승 `;
  }else if(comInput === ROCK) {
    result += ` - 무승부 `;
  } else {
    result += ` - 패 `;
  }
  } else {
    if(comInput === SCISSORS){
      result += ` - 패 `;
    }else if(comInput === ROCK) {
      result += ` - 승 `;
    } else {
      result += ` - 무승부 `;
    }
  }
  alert(result);
}