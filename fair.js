var maxNumberOfPlays = 10;
//초기화 함수 가위,바위,보
let data;
//나중에 입력으로 바꿈 현재는 가위로 고정
let my;

let result = new Array(maxNumberOfPlays);


function init () {
  data = 3;
  my = 0;
  // 0 = 가위
  // 1 = 바위
  //2 = 보
}
//컴퓨터의 선택
function getComputerResult(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
//나와 컴퓨터의 승패 결정
function calculate(i) {
  result[i] = {};
  let computer = getComputerResult(data);

  if (computer === 0 && my === 0) {
    result[i]['my'] = '가위'
    result[i]['computer'] = '가위';
    result[i]['res'] = '비겼습니다.'
  } else if (computer === 1 && my === 0) {
    result[i]['my'] = '가위'
    result[i]['computer'] = '바위';
    result[i]['res'] = '졌습니다..'
  } else if (computer === 2 && my === 0) {
    result[i]['my'] = '가위'
    result[i]['computer'] = '보';
    result[i]['res'] = '이겼습니다..'
  }
  return result;
}
//결과를 출력
function print(i) {
  console.log(i);
  console.log(result);
  console.log(result[i]["my"]);
  console.log(result[i]["computer"]);
  console.log(result[i]["res"]);
}

// init()
// print(calculate())
init();
for (var i=0; i<maxNumberOfPlays; i++) {
  calculate(i);
  setTimeout(print.bind(null,i), i*1000);
}