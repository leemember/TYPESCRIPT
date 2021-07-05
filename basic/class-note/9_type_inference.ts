//var a; //타입을 정의하지 않았기 때문에 알아서 any라는 타입으로 자동 정의가 된다.
// var a = 123 는 number, var a = 'abc' 는 string으로 알아서 타입을 추론해줌


// 💫 타입추론 기본
var a = 'abc';

function getB(b = 10) {
  var c = 'hi'// c의 타입은 string으로 추론
  return b + c; //이런 경우에는 b라는 값은 number인데 반환값은 string으로
  //파라미터 b로 b가 retrun된다. 
  //b의 타입이 정의됐지 않았기 때문에
  //알아서 any라는 타입으로 정의되었다.
  //하지만 b = 10을 해주면
  //알아서 number라는 타입이 정의된다.
}

//----------------------------------------------------------------
// 💫 타입추론 기본 2 : 인터페이스와 제너릭을 이용한 타입 추론 방식
interface Dropdown<T> {
  value: T; // T에 따라서 value값이 변경될 수도 있고
  title: string; // title은 고정시켜놓을 수도 있다.
}

//변수를 초기화하면서 타입도 초기화가 된다.
var shoppingItem: Dropdown<string> = {
  value: 'abc',
  title: 'hello',
}

// 💫 타입추론 기본 3 : 복잡한 구조에서의 타입 추론방식
interface Dropdown<T> {
  value: T; 
  title: string;
}

// 제너릭 선언은 무조건 <T>라고 안해도 되서 <K>로 입력해줬다.
// 여기서 쓰인 extends는 확장 메서드로 위에 선언된
// 인터페이스 Dropdown을 불러왔기 때문에 밑에있는 인터페이스에
// 암묵적으로 value값과 title객체가 들어와있다.
interface DetailedDropdown<K> extends Dropdown<K> {
  description: string;
  tag: K;
}

//타입방식이 변경됨에 따라 모든 K의 타입들이 다 알아서 변동된다.
//지금은string이지만 number값으로 바꾸면 알아서 value값과 위에 선언된 애들 다
//number로 바뀌게된다. 이게 바로 제너릭의 특징이다.
//함수를 선언함과 동시에 타입을 정의하는거
var DetailedItem: DetailedDropdown<string> = {
  //객체 초기화 시키기
  title: 'hello',
  description: 'ab',
  value: 'a',
  tag: 'a'
}

//----------------------------------------------------------------
//💫가장 적절한 타입 (Best Common Type 추론 방식)

var arr = [1,2,true]; //이렇게 선언하면 arr값 위에 마우스 커서를 올렸을때 number | boolean 값으로 알아서 추론해준다. (배열에 있는 타입들을 유니온 타입으로 추론해줌)

// 가장 근접한 타입을 추론한다 (유니온방식으로)
