// ES6 

//클래스는 함수 문법이 그냥 클래스로 바꿔쓴것이다.
function Person(name, age) {
  this.name = name;
  this.age = age;
}

var capt = new Person('캡틴', 100);

class Person {
  //클래스 로직
  constructor(name, age) {
    console.log('생성되었습니다.');
    this.name = name;
    this.age = age;
  }
}

var seho = new Person(); // 생성되었습니다. 출력됨
//결과물을 보고싶다면 타입스크립트 공식문서에 있는 플레이그라운드에다가 고대로 출력해보면 된다.

