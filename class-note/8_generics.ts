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

// -----------------------------------------------------

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

// -------------------------------------------------------------------------------------
// 👼🏻 인터페이스에 제네릭을 선언하는 방법

// interface Dropdown {
//   value: string,
//   selected: boolean;
// }

// const obj: Dropdown = { value: 'abc', selected: false};

//-----------------------------------------------------------------

// 👩🏻 인터페이스에 제너릭을 선언해서 얼마든지 value 타입을 바꿀 수 있다는 것을 알아보자
// 제너릭 선언법 <T>해주기
interface Dropdown<T> {
  value: T;
  selected: boolean;
}
//제너릭 타입
//타읩정의를 string으로 하면 value값이 알아서 문자열로 정의된다.
const obj: Dropdown<string> = {value: '123', selected: false };
//Dropdown 뒤에 타입을 선언해준다. 그러면 value값이 string으로 바뀌게 된다.
//이렇게 제네릭은 굳이 인터페이스에 타입을 선언하지 않고도
//그때 그때마다 필요한 타입들을 함수 뒤에 <string>이런식으로 선언해서 사용하면 된다.

// -----------------------------------------------------

//제너리를 좀 더 엄격하게 하고 더 많은 옵션들을 보기위한
// 👩🏻‍🦳 제네릭의 타입 제한

function logTextLength<T>(text:T[]):T[] {
  console.log(text.length); //length를 찍게 하려면 T제너릭 타입을 좀 더 힌트를 준다면 T뒤에 [] 배열 표시를 넣어주면된다.
  text.forEach(function (text) {
    //text를 forEach 반복문을 받아서 출력한다.
    console.log(text);
  })
  return text;
}
logTextLength<string>(['hi', 'abc']); //넘길 때도 배열형식으로 넘겨주어야한다.

//함수의 들어갈 수 있는 타입을 정의하고, text도 제너릭 타입으로 정의하고, 리턴값까지 제너릭으로 정의 T, T, T => 제너릭 정의
//그리고 리턴할 때는 굳이 또 선언하지 않아도 알아서 해주는데 가독성을 위해 써주는 것이 좋다.

// -----------------------------------------------------

// 👩🏻‍🦳 제네릭의 타입 제한(2) - 정의된 타입 이용하기
//인터페이스 정의
interface LengthType {
  length: number;
   
}
//위에처럼 [] 배열 기호를 안써주고 length타입이 선언됐다는 것을 표시하려면
//제너릭을 선언할 때 extends LengthType를 넣어도 된다.
function logTextLength01<T extends LengthType>(text:T):T {
  text.length;
  return text;
}
logTextLength([1,2,3,4,5]);

// -----------------------------------------------------

// 👩🏻‍🦳 제네릭의 타입 제한(3) - keyof
// ShoppingItem 인터페이스 생성
interface ShoppingItem {
  name: string;
  price: number;
  stock: number;
}

//위에 있는 속성 중 하나만 받겠다로 밑에 함수를 제약할 수 있다.
function getShoppingItemOption<T extends keyof ShoppingItem>(itemOption:T):T {
  //쇼핑 아이템에서 어떤 특정 옵션만 받을 수 있도록
  return itemOption;
}
// getShoppingItemOption(10);
// getShoppingItemOption<string>('a');
//기존에 정의된 인터페이스를 확장할 때 쓰는 것이 extends 키워드다.

getShoppingItemOption('name');
//컨트롤 스페이스를 누르면 받아올 수 있는 인자들이 목록으로 뜬다.
//제너릭을 사용할 때 extends 키워드를 호출해 keyof라는 예약어를 이용해서
//인터페이스로 선언해준 속성들을 불러가져 올 수 있다.


/*
🤍1. ShoppingItem 인터페이스를 선언하고, 그 안에 속성들을 정의해준다.
🤍2. getShoppingItemOption 함수를 만들면서 제너릭을 선언해준다.
🤍3. 제너릭 선언 시 extends 확장 키워드를 사용하고, keyof라는 예약어로
🤍4. ShoppingItem 인터페이스를 불러온다.
🤍5. 그리고 파라미터 값에는 itemOption만 넣어준다.
🤍6. 마지막, getShoppingItemOption 함수를 불러내고 [컨트롤+스페이스] 누르면 인터페이스 안에 담긴 속성들을 불러와줄 수 있다.
*/