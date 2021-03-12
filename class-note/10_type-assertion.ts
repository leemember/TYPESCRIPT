// 타입 단언
//변수 선언
var a;
a = 20;
a = 'a';
var b = a as string; //타입 number

/* 
타입스크립트보다 개발자가 타입을 더 잘 알고 있다.
타입스크립트 너는 신경쓰지말고 내가 정한 타입에 간주를 해라.
*/

//DOM API 조작
//웹페이지에 태그를 조작해준다.
//querySelector 가장 많이 사용하는 API
// <div id="app">hi</div>

var div = document.querySelector('div');
if (div) {
  div.innerText
}