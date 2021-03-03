// function logText(text) {
//   console.log(text);
//   return text;
// }
// logText(10); // 숫자 10
// logText('하이'); // 문자열 하이

// function logText<T>(text: T): T{ // text 받는 타입을 <T> 이렇게 정의했다.
//   console.log(text);
//   return text;
// }
// logText<string>('하이'); // 기본적으로 파라미터 타입은 문자열이 된다.
// // 반환 하는 것 까지도 문자열로 정의가 된다.


// 기존 타입 정의 방식과 제네릭의 차이점 - 함수 중복 선언의 단점
function logText(text: string) { // text라는 값을 파라미터로 받아서
  console.log(text); // 콘솔로 반환해준다.
  // text.split('').reverse().join('');
  return text;
}

function logNumber(num:number) {
  console.log(num);
  return num;
}

logText('a');
logNumber(10);
// logText(10);
// logText(true);

// logText는 파라미터 타입을 지정해주지 않았기 때문에 any로 인식되서 문자열, 숫자, 논리 타입 등등 전부 받아준다.
// 하지만 만약에 타입을 string으로 지정을 해준다면 text에서 split이라는 문자열에 내장 api를 쓰고
// 또 reverse라는 메서드를 사용해 역으로 join해줄 때 타입이 string이라 이 메서드들이 가능한것이다.
// 따라서, 나머지 숫자와 논리값은 빨간 에러가 생긴다.
// lognumber도 똑같이 타입을 number로 해줬다. 그래서 logNumber함수는 숫자로 넣으면 가능

// 👉🏻유니온 타입을 이용한 선언 방식의 문제점
//유니온타입을 이용하면 밑에 보다시피 string과 number를 둘 다 같이 사용할 수 있다.
function logText0(text: string | number) {
  console.log(text);
  return text;
}
// number가 들어오는 경우에는 split을 사용할 수 가 없다.
logText0('a');
logText0(10);

//타입스크립트의 fuction으로 시작하는 이 한 줄을 해석해보면 
//어떤 타입을 받을건지 먼저 정의하기 => <T>
//그랬을 때 받은 타입을 인자로 넘기겠다고 정의하기 => (text: T)
//그걸 리턴할 때도 그대로 쓰겠다는 의미 => : T
function logText1<T>(text:T) : T {
  console.log(text);
  return text;
}

const str = logText1<string>('a');
str.split('');
const login = logText1<boolean>(true); //이렇게 하면 로그인 값은 논리값으로 된다.
// 이렇게 문자열이라는 것을 타입스크립트도 알고 우리도 한 눈에 확인해서 알 수 있고
// 타입을 틀어지지 않게 잘 구성해나갈 수 있는 것이 바로 제네릭의 장점이다.
//그 타입에 뭐가 들어갈거다 라는 것을 호출한 시점에 정의하는 것이 제네릭이다.
