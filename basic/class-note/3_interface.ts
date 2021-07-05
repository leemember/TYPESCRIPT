//🌟 유저라는 인터페이스를 생성하고 각각의 속성을 지정해줌. (반복되는 코드에 대해서 인터페이스로 중복제거 하여 코드 관리하기)
interface User {
  age: number;
  name: string;
  }

//🌟 변수에 활용한 인터페이스
var seho: User = {
  age: 33,
  name: '세호'
}

//상호관계를 유지하며 위에 생성된 인터페이스의
//age, name을 타입을 적용시켜 사용해줘야한다.

//🌟 함수에 인터페이스 활용
//인자 옆에 User라는 인터페이스를 넣는다. (특정 형식만 받겠다는 정의)
function getUser(user : User) {
  console.log(user);
}

//그리고 함수를 호출할 때 파라미터에 정의한 인터페이스의 규칙을 잘 따르는지
//검사해주는 것이 타입스크립트다. 그래서 이렇게 인터페이스 규칙에 따라
//age,name속성도 넣어준 것이다. 안그러면 에러남
const capt = {
  age: 5,
  name: '캡틴',
}
getUser(capt);

//🌟 함수의 스펙(구조)에 인터페이스 활용
interface SumFunction {
  (a: number, b: number) : number;
} //sum이라는 함수의 규칙 정의

let sum : SumFunction;
sum = function(a: number, b: number) : number {
  return a+b;
}

//🌟 인덱싱
interface StringArray {
  [index: number] : string;
  //index는 숫자를 받고, 반환되는 값은 문자열로
}

var arr : StringArray = ['a','b','c','d'];
// arr[0] = 10; // 'a'


//🌟 인터페이스 딕셔너리 패턴
interface StringRegexDictionary {
  [key:string] : RegExp;
} //왼쪽에는 속성이 되고, 오른쪽은 정규표현식

var obj : StringRegexDictionary = {
  // sth: /abc/,
  //cssFile: 'css', 라고 할 경우 에러표시가 나는데 왜냐면 정규표현식이 와야되는데 'css'라는 문자열이 왔기 때문이다.
  cssFile : /\.css$/,
  jsFile : /\.js$/
}

//이런식으로 정규표현식을 사용해줘야한다.

// obj['cssFile']='a' 이렇게해도 오류가 난다.
//RegExp라는 정규표현식을 사용해줘야되는데 문자열을 사용했기 떄문이다.

Object.keys(obj).forEach(function(value) {

}) //여기서 value는 string을 뜻한다.

//🌟 인터페이스 확장
//사람 인터페이스
interface Person {
  name: string;
  age: number;
}

//개발자 인터페이스
interface Developer extends Person {
  language: string;
}

//이렇게 하면 Person이라는 인터페이스를 확장했기 때문에,

/*
  name: string;
  age: number;
  이 속성들은 굳이 입력하지 않아도 된다.
  왜냐면 extends Person 이렇게 확장해서
  Person에 대한 속성들을 다 가지고 왔다.
*/

var captain : Developer = {
  language: 'ts',
  name: '캡틴',
  age: 100,
}