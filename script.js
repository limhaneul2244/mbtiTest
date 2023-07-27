//문제를 눌렀을때 다음문제로 넘어가는것
let q = {
  1 : {"title": '문제 1번', 'type':'EI', 'A':'E', 'B':'I'},
  2 : {"title": '문제 2번', 'type':'EI', 'A':'E', 'B':'I'},
  3 : {"title": '문제 3번', 'type':'EI', 'A':'E', 'B':'I'},
  4 : {"title": '문제 4번', 'type':'SN', 'A':'S', 'B':'N'},
  5 : {"title": '문제 5번', 'type':'SN', 'A':'S', 'B':'N'},
  6 : {"title": '문제 6번', 'type':'SN', 'A':'S', 'B':'N'},
  7 : {"title": '문제 7번', 'type':'TF', 'A':'T', 'B':'F'},
  8 : {"title": '문제 8번', 'type':'TF', 'A':'T', 'B':'F'},
  9 : {"title": '문제 9번', 'type':'TF', 'A':'T', 'B':'F'},
  10 : {"title": '문제 10번', 'type':'JP', 'A':'J', 'B':'P'},
  11 : {"title": '문제 11번', 'type':'JP', 'A':'J', 'B':'P'},
  12 : {"title": '문제 12번', 'type':'JP', 'A':'J', 'B':'P'}
}
// mbti 결과
let result = {
  "ISTJ": {"animal": "하마", "explain": "ISTJ설명", 'img': './images/lion.jpg'},
  "ENFP": {"animal": "사자", "explain": "ENFP설명", 'img': './images/lion.jpg'},
  "ENTJ": {"animal": "하마", "explain": "ENTJ설명", 'img': './images/lion.jpg'},
}
let num = 1;

$('#sns').hide();
function start () {
  $('.start').hide();
  $('.question').show();
  nextNum();
}

// A버튼 눌렀을대
$('#A').click(function(){
  let type = $('#type').val();
  let preValue = $(`#${type}`).val();
  $(`#${type}`).val(parseInt(preValue)+1);
  nextNum();
});
// B버튼 클릭시
$('#B').click(function () {
  nextNum();
})

// 다음문제로 넘어가는 함수
function nextNum () {

  if(num === 13) { //13번째가 될때
    $('.question').hide();
    $('.result').show();
    // 동물의 결과가 나옴
    let mbti = '';
    // if($('#EI').val() < 2) {
    //   mbti = mbti + 'I'; //문항을 택한 값이 2보다 작으면 I가 된다.
    // } else {
    //   mbti = mbti + 'E';
    // }
    $('#EI').val() < 2 ? mbti += 'I' : mbti += 'E';
    $('#SN').val() < 2 ? mbti += 'N' : mbti += 'S';
    $('#TF').val() < 2 ? mbti += 'F' : mbti += 'T';
    $('#JP').val() < 2 ? mbti += 'P' : mbti += 'J';

    // 결과 설명
    $('#sns').show();
    $('#img').attr('src', result[mbti]['img']);
    $('#animal').html(result[mbti]['animal']);
    $('#explain').html(result[mbti]['explain']);
  } else {
    // 프로그래스 바 차오르게 만들기
    $('.progress-bar').attr('style', `width: calc(100/12*${num}%)`);
  
    $('#title').html(q[num]['title']);
    // 숨김처리되어있는 input의 value도 바꾼다.
    $('#type').val(q[num]['type']);
    $('#A').html(q[num]['A']);
    $('#B').html(q[num]['B']);
    //다음문제로 카운트
    num++;
  }
}


