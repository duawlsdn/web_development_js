// 컴퓨터 관련 오브젝트
let computer = {
  score: 0,
  percent2: 0.5,
  percent3: 0.33
};

// 사용자 관련 오브젝트
let user = {
  score: 0,
  percent2: 0.5,
  percent3: 0.33
};

// 게임 관련 오브젝트
let game = {
  isComputerTurn: true,
  shootLeft: 15
};


function showText(s) {
  let textElement = document.getElementById('text');
  textElement.innerHTML = s;
}

function updateComScore(score) {
  let comScoreElement = document.getElementById('computer-score');

  computer.score += score;
  comScoreElement.innerHTML = computer.score;
}

function updateUserScore(score) {
  let userScoreElement = document.getElementById('user-score');

  user.score += score;
  userScoreElement.innerHTML = user.score;
}

function disabledComButton(flog) {
  let computerButtons = document.getElementsByClassName('btn-computer');

  for(let i = 0; i < computerButtons.length; i++) computerButtons[i].disabled = flog;
}

function disabledUserButton(flog) {
  let userButtons = document.getElementsByClassName('btn-user');

  for(let i = 0; i < userButtons.length; i++) userButtons[i].disabled = flog;
}

// 여기에 시나리오 관련한 함수를 작성할 예정
function updateAI() {
  let difference = user.score - computer.score

  if(difference > 11) {
    computer.percent2 = 0.7;
    computer.percent3 = 0.43;
  }else if(difference > 7){
    computer.percent2 = 0.6;
    computer.percent3 = 0.38;
  }else if(difference < -11){
    computer.percent2 = 0.3;
    computer.percent3 = 0.23;
  }else if(difference < -7){
    computer.percent2 = 0.4;
    computer.percent3 = 0.28;
  }
}

function onComputerShoot() {
  if(!game.isComputerTurn) return;

  updateAI();

  let shootType = Math.random() < 0.5 ? 2 : 3;

  if(Math.random() < computer['percent' + shootType]) { 
    // 결과값은 'percent2' 거나 'percent3' 가 되므로 computer['percent2'] / computer['percent3']의 value가 산출됨
    showText('C.team' + shootType + 'Point🏀💦')
    updateComScore(2);
  }else{
    showText('C.team' + shootType + 'Point Miss❗')
  }

  game.isComputerTurn = false;
  disabledComButton(true);
  disabledUserButton(false);
}

function onUserShoot(shootType) {
  if(game.isComputerTurn) return;

  if(shootType === 2) {
    if(Math.random() < user.percent2) {
      showText('U.team 2 Point🏀🔥🔥');
      updateUserScore(2);

    }else {
      showText('U.team 2 Point Miss❗');
    }
  }else {
    if(Math.random() < user.percent3) {
      showText('U.team 3 Point🏀🔥🔥🔥');
      updateUserScore(3);

    }else {
      showText('U.team 3 Point Miss❗❗');
    }
  }

  game.isComputerTurn = true;
  disabledComButton(false);
  disabledUserButton(true);

  game.shootLeft--;

  let shootLeftElement = document.getElementById('shoots-left')
  shootLeftElement.innerHTML = game.shootLeft;

  if(game.shootLeft === 0) {
    if(user.score > computer.score){
      alert('U.team Win👑');
      showText('U.team Win👑');
    }else if(user.score < computer.score){
      alert('C.team Win👑');
      showText('C.team Win👑');
    }else {
      alert('end in a draw');
      showText('end in a draw');
    }
  }
}
