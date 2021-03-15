//인터페이스
interface Developer {
  name: string;
  skill: string;
}
interface Person {
  name: string;
  // skill: string;
}

var developer: Developer;
var person : Person;
// developer = person; 이렇게 되면 에러가난다.
person = developer;
//에러가 나는 이유는 왼쪽에 있는 객체가 더 많은 
/*
person은 속성이 name밖에 없다. 그 반면에 developer는 name과 skill이라는 속성이 총 2개나 있다. 이렇게 되었을때 오른쪽에 있는 타입이 왼쪽으로 할당이 될 수가 없다.
더 객체가 많은 속성들, 구조적으로 더 큰 관계를 갖고 있기 때문에 이런 부분 들 때문에 타입 호환에 대해서 알고있으면 좋다.

오른쪽에 있는 타입이 더 많은 속성을 가지고 있거나 더 큰 관계를 갖고 있을때에 왼쪽과 호환이 된다. 
*/

// 타입호환 : 구조적으로 더 큰 타입에서는 작은 타입을 지원 할 수 없다.
class Person {
  name: string;
  skill: string;
}

//함수
var add = function(a: number) {
  console.log(a);
}

var sum = function(a: number, b: number) {
  return a + b;
}
// 이 둘의 차이점은, 일단 밑에가 파라미터 한 개가 더 들어있다.
// sum이라는 함수 자체가 add라는 함수보다 더 크다. 
// 크다라는 의미는 추가적으로 옵션들을 더 제공한다.

sum = add;
// 얘는 호환이 가능하다. 타입이 더 커서

// 제네릭
interface Empty<T> {

}
var empty1: Empty<string>;
var empty2: Empty<number>;
empty1 = empty2;
empty2 = empty1;
//위에 인터페이스는 안에 값이 비어있어서
//어떤 값이 들어와도 동일한 타입이라고 간주한다.

interface NotEmpty<T> {
  data:T;
}
var notEmpty1: NotEmpty<string>; // 첫번째는 스트링
var notEmpty2: NotEmpty<number>; // 두번째는 문자열
notEmpty1 = notEmpty2;
notEmpty2 = notEmpty1;
// 그래서 계속 타입이 바뀌기 때문에 서로 타입 호환이 되지 않는다.

