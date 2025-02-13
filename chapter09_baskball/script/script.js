// 점수 총합을 대입할 변수 선언
let comScore = 0;
let userScore = 0;
// 컴퓨터 턴이면 내 턴이 아님 // 내 턴이면 컴퓨터 턴이 아님 : 그 결과 우리는 boolean을 택할 겁니다.
let isComputerTurn = true;
let shootLeft = 15;

// 컴퓨터
function onComputerShoot() {
  if(!isComputerTurn) return;

  // 삼항연산자 - Math.random() 을 응용
  let shootType = Math.random() < 0.5 ? 2 : 3;

  let textElement = document.getElementById('text');
  let comScoreElement = document.getElementById('computer-score');

  if(shootType === 2) {
    if(Math.random() < 0.5) {
      // 2점슛을 1/2 확률로 성공
      textElement.innerHTML = 'C.team 2 Point🏀💦💦'
      comScore += 2;

      comScoreElement.innerHTML = comScore;

    }else {
      // 실패 했을 때
      textElement.innerHTML = 'C.team 2 Point Miss❗'
    }
  }else {
    if(Math.random() < 0.33) {
      // 3점슛 1/3 확률로 성공
      textElement.innerHTML = 'C.team 3 Point🏀💦💦💦'
      comScore += 3;

      comScoreElement.innerHTML = comScore;
    }else {
      // 실패 했을 때
      textElement.innerHTML = 'C.team 3 Point Miss❗❗'
    }
  }

  isComputerTurn = false;

  let computerButtons = document.getElementsByClassName('btn-computer');

  for(let i = 0; i < computerButtons.length; i++) {
    computerButtons[i].disabled = true;
  }

  let userButtons = document.getElementsByClassName('btn-user');

  for(let i = 0; i < userButtons.length; i++) {
    userButtons[i].disabled = false;
  }
}

// 사용자
function onUserShoot(shootType) {
  if(isComputerTurn) return;

  let textElement = document.getElementById('text');    // onComputerShoot() 에서도 지역변수로 선언, 여기서도 동일
  let userScoreElement = document.getElementById('user-score');

    
  if(shootType === 2) {
    if(Math.random() < 0.5) {
      // 2점슛을 1/2 확률로 성공
      textElement.innerHTML = 'U.team 2 Point🏀🔥🔥'
      userScore += 2;

      userScoreElement.innerHTML = userScore;

    }else {
      // 실패 했을 때
      textElement.innerHTML = 'U.team 2 Point Miss❗'
    }
  }else {
    if(Math.random() < 0.33) {
      // 3점슛 1/3 확률로 성공
      textElement.innerHTML = 'U.team 3 Point🏀🔥🔥🔥'
      userScore += 3;

      userScoreElement.innerHTML = userScore;
    }else {
      // 실패 했을 때
      textElement.innerHTML = 'U.team 3 Point Miss❗❗'
    }
  }

  isComputerTurn = true;

  let computerButtons = document.getElementsByClassName('btn-computer');

  for(let i = 0; i < computerButtons.length; i++) {
    computerButtons[i].disabled = false;
  }

  let userButtons = document.getElementsByClassName('btn-user');

  for(let i = 0; i < userButtons.length; i++) {
    userButtons[i].disabled = true;
  }

  // onUserShoot()을 호출했을 때에만 shootLeft가 --; 되어야 함
  shootLeft--;

  // JS 상에서 --를 먹을 뿐이지 HTML에서 가시적으로 바뀌지 않음
  let shootLeftElement = document.getElementById('shoots-left')
  shootLeftElement.innerHTML = shootLeft;
}
