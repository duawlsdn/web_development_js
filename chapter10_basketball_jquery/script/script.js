let comScore = 0;
let userScore = 0;
let isComputerTurn = true;
let shootLeft = 15;

// 컴퓨터
function onComputerShoot() {
  if(!isComputerTurn) return;

  let shootType = Math.random() < 0.5 ? 2 : 3;

  let textElement = document.getElementById('text');
  let comScoreElement = document.getElementById('computer-score');

  if(shootType === 2) {
    if(Math.random() < 0.5) {
      textElement.innerHTML = 'C.team 2 Point🏀💦💦'
      comScore += 2;

      comScoreElement.innerHTML = comScore;

    }else {
      textElement.innerHTML = 'C.team 2 Point Miss❗'
    }
  }else {
    if(Math.random() < 0.33) {
      textElement.innerHTML = 'C.team 3 Point🏀💦💦💦'
      comScore += 3;

      comScoreElement.innerHTML = comScore;
    }else {
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

  let textElement = document.getElementById('text');
  let userScoreElement = document.getElementById('user-score');

    
  if(shootType === 2) {
    if(Math.random() < 0.5) {
      textElement.innerHTML = 'U.team 2 Point🏀🔥🔥'
      userScore += 2;

      userScoreElement.innerHTML = userScore;

    }else {
      textElement.innerHTML = 'U.team 2 Point Miss❗'
    }
  }else {
    if(Math.random() < 0.33) {
      textElement.innerHTML = 'U.team 3 Point🏀🔥🔥🔥'
      userScore += 3;

      userScoreElement.innerHTML = userScore;
    }else {
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

  shootLeft--;

  let shootLeftElement = document.getElementById('shoots-left')
  shootLeftElement.innerHTML = shootLeft;

  if(shootLeft === 0) {
    if(userScore > comScore){
      alert('U.team Win👑');
      textElement.innerHTML = 'U.team Win👑'
    }else if(userScore < comScore){
      alert('C.team Win👑');
      textElement.innerHTML = 'C.team Win👑'
    }else {
      alert('end in a draw');
      textElement.innerHTML = 'end in a draw'
    }
  }
}
