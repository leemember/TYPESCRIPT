// 타입 단언
//변수 선언
var a;
//이 a함수에 대한 타입은 any가 된다.

a = 20;
//얘는 숫자로 추론이 된다.

a = 'a';
// 얘는 문자열로

//맨처음에 선언된 any타입이 b에 할당된다.
var b = a as string; //타입 number

/* 
타입스크립트보다 개발자가 타입을 더 잘 알고 있다.
타입스크립트 너는 신경쓰지말고 내가 정한 타입에 간주를 해라.
*/

//DOM API 조작
//웹페이지에 태그를 조작해준다.
//querySelector 가장 많이 사용하는 API
<div id="app">hi</div> // 이런태그가 있을때
var div = document.querySelector('div'); // div라는 변수에 담아 태그에 접근한다.
//그럼 알아서 또 HTMLElement라고 추론한다.
if (div) { 
  // div가 있는지 확인을 하고 그 다음에 조작을 해주는게 일반적인 타입단언의 패턴이다.
  //이 div라는 값이 null일 수도 있기 때문에 밑에호출된 div가 어떤걸 데려오는지 div가 있는지를 보는거다.
  div.innerText
}

// 쓰는키워드는 as다. as를 쓰는 시점에는 코드가 돌아갈 때 querySelector가 HTMLDivElement다. 라고 단언하는게 타입 단언이라고 볼 수 있다.
var div = document.querySelector('div') as HTMLDivElement;
div.innerText;
