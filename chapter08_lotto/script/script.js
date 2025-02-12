// let num1, num2, num3, num4, num5, num6;

// num1 = Math.floor(Math.random() * 45)+1;
// num2 = Math.floor(Math.random() * 45)+1;
// num3 = Math.floor(Math.random() * 45)+1;
// num4 = Math.floor(Math.random() * 45)+1;
// num5 = Math.floor(Math.random() * 45)+1;
// num6 = Math.floor(Math.random() * 45)+1;

// while (num2 === num1) {
//   num2 = Math.floor(Math.random() * 45)+1;
// }

// console.log(num1,num2,num3,num4,num5,num6);

// let arr02 = [];

// // 배열에 요소 대입 방식 -> java 와 차이가 있음. 유심히 보도록
// // element를 추가하는 method -> .push(값)
// arr02.push('사과');
// arr02.push('오렌지');
// arr02.push('바나나');
// arr02.push('키위');
// arr02.push('수박');

// console.log(arr02);

// // 배열에 있는 요소 삭제 method -> .pop(값)

// console.log(arr02.pop()); // 수박, 출력됨
// console.log(arr02);     // 수박 제외하고 동일한 배열이 출력됨

// // 특정 index에 element 넣기
// arr02[1] = '딸기';

// console.log(arr02);
// // ['사과', '딸기', '바나나', '키위']
// // 이상의 코드에서 확인해 봤을 때 '오렌지'가 '딸기'로 대체되었음
// // 즉, index를 한칸씩 민다거나 하는건 아님

// 로또 번호 생성기 구현 예정

// 1. lottoArray 배열을 선언
let lottoArray = [];

// 2. 해당 배열 내에 1~45까지의 number 값을 대입
for(let i = 0; i < 45; i++){
  lottoArray.push(i+1);
}

// console.log(lottoArray);
// 위에서 고려한 방식은 기본적으로 1 ~ 45까지의 int를 생성하는 방식, 이미 배열에 다 만들어둔 상태

// Math.floor(Math.random()) 관련 코드를 어디다가 쓸거나면
// index number 를 산출할 때

// 3. 그리고 .pop() 해서 하나씩 출력하면 어느 정도 구현되지 않을 까요.
// lottoNumbers 라는 배열을 선언,
// lottoArray에서 .pop() 적용한 애를 대입하면 중복의 염려 없이 한게임 출력

let index = Math.floor(Math.random() * 45);

// 임의적으로 선택한 인덱스의 값
let num = lottoArray[index];
// 이상의 코드를 사용했을 경우 배열에서의 특징 element가 num에 저장됨

// 그렇다면 이제 lottoArray에서 그 num과 일치하는 값을 삭제

// 배열에서 특정한 element를 제거하기 위한 method -> .splice()

// lottoArray.splice(index, 1);

// console.log(num, lottoArray);

lottoNumbers=[];

// 여기에 반복문 적용해서 6개의 숫자를 lottoNumbers에 대입할 예정

for(let i = 0; i < 6; i++) {
  let index2 = Math.floor(Math.random() * lottoArray.length);
  // 이상의 코드에서 45 안쓴 이유는 -> 리터럴을 쓰기 지양

  let num2 = lottoArray[index2];

  // 배열에서 인덱스 값 제거
  lottoArray.splice(index, 1);

  lottoNumbers.push(num2);
}
// console.log(lottoNumbers);
// console.log(lottoArray);

// 이상에서의 코드가 Java와의 약간 차이점은 있지만 이전에 웹1에서 구현했던 로또 번호 생성기와 별 차이 없음 -> 구현 방식은 다름

// script.js에 코드 검증하는 부분들 작성 -> main은 script2.js

let list = ['abc', 123, true, false, 'ABC'];

list.sort();

console.log(list); // 결과값 : [123, 'ABC', 'abc', false, true]

// 결과값을 확인했을 때, 숫자 1이 가장 작고, 숫자 t가 가장 크다고 정리
// .sort() 함수의 기본 정렬 방식은 -> 유니코드(Unicode)의 코드값을 기반으로 함.

// 특징 : .sort()를 실행하게 되면, 일단 모든 데이터를 str으로 전환한 후에 크기를 비교하여 정렬하고, 다시 원래의 자료형으로 변환하여 제시 -> 이상을 이유로 서로 다른 자료형을 가진 list가 정렬이 가능

// 이상으 ㅣ특징 때문에 1, 11 ,2 와 같은 방식으로의 정렬이 이루어집니다.

// 이는 JS 뿐만 아니라 대부분의 프로그래밍 언어에서 채택하고 있는 정렬 방식이라서
// 숫자를 오름차순 / 내림차순으로 정렬해야 할 때는 다른 방식을 사용

// 여기서 부터 다른 방식 제시

// 물론 숫자를 정렬하는 경우도 많기 때문에 sort() 함수는 비교함수(Comparator)를 argument로 받을 수 있습니다.