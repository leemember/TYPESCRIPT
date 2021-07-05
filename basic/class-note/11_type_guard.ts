interface Developer {
  name: string;
  skill: string;
}

interface Person {
  name: string;
  age: number;
}

//유니온 타입으로 지정해주기
function introduce(): Developer | Person {
  //introduce함수는 Developer | Person 이 두가지를 가지고 올 수 있다.
  return { name: 'Tony', age: 33, skill: 'Iron Making'}
}
var Tony = introduce();
console.log(Tony.name);
// 여기서 왜 빨간줄이 쳐지냐면 유니온 타입을 썻기 때문에  Developer | Person 의 공통 속성만 불러올 수 있다. 그래서 공통인 name만 출력받아올 수 있다.

// 하지만 위에서 타입단언을 배워왔으니 이걸 써먹어보면 다른것들도 접근할 수 있다.
if ((Tony as Developer).skill) {
  var skill = ((Tony as Developer).skill);
  console.log(skill);
} else if ((Tony as Person).age) {
  var age = (Tony as Person).age;
  console.log(age);
}

//위처럼 공통된 name 뿐만 아니라 다른 것들을 사용하기 위해서
//타입 단언을 해주었다. 하지만 이렇게 가독성도 떨어지고
//여러번 선언해야 된다는 점이 불편해서 이를 보완한 것이 타입 가드이다.


// 🚩 타입가드 정의
//타입가드 함수는 is라는 패턴을 많이 쓴다.
function isDeveloper(target: Developer | Person): target is Developer {
  return (target as Developer).skill !== undefined; //skill이라는 값이 있을때
}
if (isDeveloper(Tony)) {
  console.log(Tony.skill) // 토니가 Developer면 skill이 제공이 된다.
} else {
  console.log(Tony.age) // 그렇지 않으면 토니는 age가 제공이된다.
  //위에 스킬에서는 developer의 토니이고
  //밑에는 Person으로써의 토니이기 때문에
  //각각의 필요한 속성을 접근할 수 있다.
}