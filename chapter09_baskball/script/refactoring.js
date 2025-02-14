let comScore = 0;
let userScore = 0;
let isComputerTurn = true;
let shootLeft = 15;

let comPercent2 = 0.5;
let comPercent3 = 0.33;
let userPercent2 = 0.5;
let userPercent3 = 0.33;

// 여기에 리팩토링의 첫 번째 단계 
function showText(s) {
  let textElement = document.getElementById('text');
  textElement.innerHTML = s;
}

function updateComScore(score) {
  let comScoreElement = document.getElementById('computer-score');
  comScore += score;
  comScoreElement.innerHTML = comScore;
}

function updateUserScore(score) {
  let userScoreElement = document.getElementById('user-score');
  userScore += score;

  userScoreElement.innerHTML = userScore;
}

function disabledComButton(flog) {
  let computerButtons = document.getElementsByClassName('btn-computer');

  for(let i = 0; i < computerButtons.length; i++) computerButtons[i].disabled = flog;
}

function disabledUserButton(flog) {
  let userButtons = document.getElementsByClassName('btn-user');

  for(let i = 0; i < userButtons.length; i++) userButtons[i].disabled = flog;
}

function updateAI() {
  let difference = userScore - comScore

  if(difference > 11) {
    comPercent2 = 0.7;
    comPercent3 = 0.43;
  }else if(difference > 7){
    comPercent2 = 0.6;
    comPercent3 = 0.38;
  }else if(difference < -11){
    comPercent2 = 0.3;
    comPercent3 = 0.23;
  }else if(difference < -7){
    comPercent2 = 0.4;
    comPercent3 = 0.28;
  }
}

// 기능 구현 완료 후에 리팩토링 적용되는 부분
function onComputerShoot() {
  if(!isComputerTurn) return;

  updateAI();

  let shootType = Math.random() < 0.5 ? 2 : 3;

  if(shootType === 2) {
    if(Math.random() < 0.5) {
      showText('C.team 2 Point🏀💦💦');
      updateComScore(2);

    }else {
      showText('C.team 2 Point Miss❗');
    }
  }else {
    if(Math.random() < 0.33) {
      showText('C.team 3 Point🏀💦💦💦');
      updateComScore(3);
    }else {
      showText('C.team 3 Point Miss❗❗');
    }
  }

  isComputerTurn = false;
  disabledComButton(true);
  disabledUserButton(false);
}

function onUserShoot(shootType) {
  if(isComputerTurn) return;

  if(shootType === 2) {
    if(Math.random() < 0.5) {
      showText('U.team 2 Point🏀🔥🔥');
      updateUserScore(2);

    }else {
      showText('U.team 2 Point Miss❗');
    }
  }else {
    if(Math.random() < 0.33) {
      showText('U.team 3 Point🏀🔥🔥🔥');
      updateUserScore(3);

    }else {
      showText('U.team 3 Point Miss❗❗');
    }
  }

  isComputerTurn = true;
  disabledComButton(false);
  disabledUserButton(true);

  shootLeft--;

  let shootLeftElement = document.getElementById('shoots-left')
  shootLeftElement.innerHTML = shootLeft;

  if(shootLeft === 0) {
    if(userScore > comScore){
      alert('U.team Win👑');
      showText('U.team Win👑');
    }else if(userScore < comScore){
      alert('C.team Win👑');
      showText('C.team Win👑');
    }else {
      alert('end in a draw');
      showText('end in a draw');
    }
  }
}
