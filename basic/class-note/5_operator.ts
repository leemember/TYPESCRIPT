// function logMessage(value: any) {
//   console.log(value);
// }
// //value타입을 any로 하면 어떤 타입이든
// //전부 다 소화를 할 수 있게 된다.
// logMessage('hello'); //string
// logMessage(100); // number
// logMessage(false); //boolean




/*
💜유니온 타입의 장점

한 가지 이상의 타입을 사용하고 싶을 때 |(파이프)를 사용하면 된다.
*/

//여기서 쓰는 | 이거는 타입스크립트 상에서 유니온 타입이라 부른다.
//특정 타입 이상을 쓰게 해준다.
// string과 number 둘 다 사용하게 해줌
var seho: string | number | boolean; 

function logMessage(value: string | number) {
  //이렇게 if문에다가 value값을 number로 지정해주면
  //value값은 자동으로 number로 인식된다.
  //이런 거를 구체적으로 타입가드라고 한다.
  //*타입가드 : 특정 타입으로 타입의 범위를 좁혀나가는(필터링하는) 과정
  if(typeof value == "number") { 
    value.toLocaleString();
  }
  if(typeof value == 'string') {
    value.toString();
  }
  //에러가 나면 TypeError를 던져준다.
  throw new TypeError('value must be string or number');
}
logMessage('hello');
logMessage('100');


/*
💜유니온 타입의 특징
*/

interface Developer {
  name: string;
  skill: string;
}

interface Person {
  name: string;
  age: number;
}

// askSomeone함수를 유니온 타입으로 지정
// someone이라고 하는 파라미터는,
// 접근 할 수 있는 속성이 name 뿐이다.
// skill과 age도 접근 할 수 있게 해줄줄 알았는데 공통되는 부분인 name만 제공해준다.
// 💜그 이유 : Developer도 되야되고 Person도 되야되기 때문에 타입스크립트는 someone이 어떤 값이 들어오는 지 모르기 때문에, Developer에 스킬이라던가 someone에 age가 타입 검증도 없이 바로 써버리게 되면 안전하지 않아 이 코드상 에러가 날 수 있다고 한다.
//👉🏻인터페이스 구조체에 공통된 속성만 제공한다고 생각하면 된다.
function askSomeone(someone: Developer | Person ) {
  // someone.name;
  // someone.skill;
  // someone.age;
}
askSomeone({ name: '디벨로퍼', skill: '웹 개발'});
askSomeone({ name: '캡틴', age: 100});
// 어떤 데이터를 받아서 넘기는 작업이다.


//결론 : 유니온 타입은 공통된 속성만 접근 할 수 있도록 제공해준다.

// 💜 & 연산자를 사용한 인터섹션 타입 소개


var seho : string | number | boolean; // 얘는 OR
var capt : string & number & boolean; // 얘는 AND 이 세 조건을 다 만족시킨다.
// 이걸 바로 인터섹션 타입이라고 한다.

function askSomeone1(someone: Developer & Person ) {
  // 인터섹션 : Developer 과 Person이 합친 하나의 타입
  someone.name;
  someone.skill;
  someone.age;
}
// askSomeone1({ name: '디벨로퍼', skill: '웹 개발'});
// askSomeone1({ name: '캡틴', age: 100});
//이렇게 했을 경우, 빨간줄로 에러가 생긴다.
askSomeone1({ name: '디벨로퍼', skill: '웹 개발', age: 34});
//Developer과 Person이 속한 타입까지 전부 다 넘겨야된다.
// 그래서 name, skill, age 셋 다 출력해줘야함 !

/*
유니온타입같은 경우에는 공통된 타입만 제공이 가능헀던 반면에
인터섹션 코드같은 경우에는, Developer & Person 이 가지고 있는 모든 속성과 타입을
다 포함한 하나의 타입이라고 정의 했기 때문에 에러가 안나고 전부 제공해준다.
🤨 하지만 두 가지 중에서 유니온 타입이 훨씬 더 자주쓰인다.
*/
