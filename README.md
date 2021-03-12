## 📃 TypeScript 입문

<br>

> START 2021.02.22 <br>
https://1eemember.tistory.com/

<br>

## 📃 목차

### 👉🏻 [자주 사용하는 기본타입 알아보기](./class-note/1_type-basic.ts)

### 👉🏻 [함수타입 알아보기 (파라미터, 반환값, 파라미터를 제한하는 특성)](./class-note/2_functions.ts)

### 👉🏻 [과제01 - 타입스크립트로 TODOLIST 만들기](./quiz/1_todo/src/index.ts)

### 👉🏻 [인터페이스 자세히 알아보기](./class-note/3_interface.ts)

-------------------

<br>

## 💜 Union 과 InterSection 타입 알아보기

<br>

- 유니온타입 : var seho : string | number | boolean; // 얘는 OR
- 인터섹션타입 : var capt : string & number & boolean; // 얘는 AND

```
interface Developer {
  name: string;
  skill: string;
}

interface Person {
  name: string;
  age: number;
}

function askSomeone(someone: Developer | Person ) {
  someone.name;
}
askSomeone({ name: '디벨로퍼', skill: '웹 개발'});
askSomeone({ name: '캡틴', age: 100});
```

> 유니온타입은 Developer와 Person의 인터페이스를 만들 었을 때 둘 다 공통으로 들어간 name 값만 뽑아내준다. 그리고 askSomeone으로 출력해줄 때는 각각 지정해준 타입의 속성들만 빼서 호출 해줄 수 있다.

```
function askSomeone1(someone: Developer & Person ) {
  // 인터섹션 : Developer 과 Person이 합친 하나의 타입
  someone.name;
  someone.skill;
  someone.age;
}
askSomeone1({ name: '디벨로퍼', skill: '웹 개발', age: 34});
```

> 인터섹션은 Developer 과 Person이 합친 하나의 타입으로 공통인 name뿐만 아니라 skill과 age도 someone이 속성들을 제공해준다. 그리고 호출할 땐 반드시 name, skill, age라는 파라미터를 지정했으니 모두 한 번에 출력해주어야 빨간 에러가 발생하지 않는다.

### 👉🏻 [Union 과 InterSection 코드 자세히 보기](./class-note/5_operator.ts)

<br>

## 💜 이넘

<br>

> 이넘은 특정 값들의 집합을 의미하는 자료형입니다.
> 이넘은 다른 프로그래밍 언어를 다뤄본 사람들에게 친숙한 타입입니다. 타입스크립트에서는 문자형 이넘과 숫자형 이넘을 지원합니다.
> (아래와 같은 목록이 이넘이 될 수 있습니다.)

```
나이키
아디다스
뉴발란스
```

### 👉🏻 [ENUM 자세히 보기](./class-note/6_enum.ts)

<br>

## 💜 제너릭 (중요)

<br>

> 제네릭은 C#, JAVA등의 언어에서 <B> 재사용성이 높은 컴포넌트를 만들 때</B> 자주 활용되는 특징입니다. 특히, 한가지 타입보다 여러 가지 타입에서 동작하는 컴포넌트를 생성하는데 사용됩니다.

### 제너릭 기본 문법

```
function logText<T>(text: T): T{
  console.log(text);
  return text;
}
logText<string>('하이');
```

반환해주는 값을 '하이'라고 <string>문자열로 지정했으면, logText에서 받은 값과 반환되는 값 모두 문자열로 지정해준다.

```
function logText 👉🏻 <T>(text: T): T{
```

이것이 그걸 의미해준다 .

```
function logText1<T>(text:T) : T {
  console.log(text);
  return text;
}

const str = logText1<string>('a');
str.split('');
const login = logText1<boolean>(true);
```

> 이렇게 하면 로그인 값은 논리값으로 된다. 이렇게 <b>문자열이라는 것을 타입스크립트도 알고 우리도 한 눈에 확인해서 알 수 있고 타입을 틀어지지 않게 잘 구성해나갈 수 있는 것이 바로 제네릭의 장점</b>이다.
> 그 타입에 뭐가 들어갈거다 라는 것을 호출한 시점에 정의하는 것이 제네릭이다.

<br>

### 👩🏻‍🦳 인터페이스 제너릭 사용하기

<br>

```
=>인터페이스에서 제너릭 선언방법
interface Dropdown<T> {
  value: T;
  selected: boolean;
}

const obj: Dropdown<string> = {value: '123', selected: false };
```

> 인터페이스 제너릭을 이용하여 코드를 최적화 시켜보았다. 원래는 인터페이스 선언할 때 기본 value값을 타입으로 정의해줘야 했다면 제너릭을 이용하면 const 함수 선언할 때와 동시에 타입을 정의해주면 된다. 이처럼 타입스크립트의 제너릭은 편리하고 코드도 최적화 시킬 수 있어서 큰 장점이다.

### 👩🏻‍🦳 제네릭의 타입 제한(2) - 정의된 타입 이용하기

[방법01]

```
function logTextLength<T>(text:T[]):T[] {
  console.log(text.length);
  text.forEach(function (text) {
    console.log(text);
  })
  return text;
}
logTextLength<string>(['hi', 'abc']);
```

> 콘솔로그 파라미터에 text.length를 선언했는데, length인지를 제대로 알게 해주려면 T제너릭 타입에 힌트를 줘야한다. 힌트는 T뒤에 [] 배열 표시를 넣어주면된다. 그리고 함수를 넘길 때도 배열형식으로 넘겨주어야한다.

[방법02]

```
interface LengthType {
  length: number;
}

function logTextLength01<T extends LengthType>(text:T):T {
  text.length;
  return text;
}
logTextLength([1,2,3,4,5]);
```

> [] 배열 기호를 안써주고 length타입이 선언됐다는 것을 표시하려면 제너릭을 선언할 때 extends 키워드를 사용하고 LengthType를 선언해도 된다.
> 그럼 더 구체적으로 length를 사용하는구나 라고 알 수 있다.

### 👩🏻‍🦳 제네릭의 타입 제한(3) - keyof

```
interface ShoppingItem {
name: string;
price: number;
stock: number;
}

function getShoppingItemOption<T extends keyof ShoppingItem>(itemOption:T):T {
return itemOption;
}
getShoppingItemOption('name');
```

🤍 선언된 인터페이스의 속성 중 하나만 받겠다로 밑에 함수를 제약할 수 있다.

### _사용방법_

1. ShoppingItem 인터페이스를 선언하고, 그 안에 속성들을 정의해준다.
2. getShoppingItemOption 함수를 만들면서 제너릭을 선언해준다.
3. 제너릭 선언 시 extends 확장 키워드를 사용하고, keyof라는 예약어로
4. ShoppingItem 인터페이스를 불러온다.
5. 그리고 파라미터 값에는 itemOption만 넣어준다.
6. 마지막, getShoppingItemOption 함수를 불러내고 [컨트롤+스페이스] 누르면 인터페이스 안에 담긴 속성들을 불러와줄 수 있다.

### 👉🏻 [제네릭 자세히 보기](./class-note/8_generics.ts)

<br>

## 💜 타입 추론

```
let x = 3;
```

> 위와 같이 x에 대한 타입을 따로 지정하지 않더라도 일단 x는 number로 간주된다. 이렇게 <b>변수를 선언하거나 초기화 할 때 타입이 추론</b>된다. 이외에도 <b>변수, 속성, 인자의 기본 값, 함수의 반환 값 등을 설정</b>할 때 타입 추론이 일어난다.

<br>

### 💫 타입추론 기본 예제 01

```
var a = 'abc';

function getB(b = 10) {
  var c = 'hi';
  return b + c;
}
```

> 변수 c의 속성은 'hi'가 들어있어 타입은 string으로 자동 추론된다. 그리고 반환값은 b + c 인경우, b : number이고 반환값은 c : 'hi' 즉 string이라 출력되는 값은 '10hi'이다. 그리고 getB파라미터에 타입을 정의되지 않은 채 b만 정의될 경우 알아서 any라는 타입으로 정의해준다.

<br>

### 💫 타입추론 기본 예제 02

```
interface Dropdown<T> {
  value: T;
  title: string;
}

var shoppingItem: Dropdown<string> = {
  value: 'abc',
  title: 'hello',
}
```

> 인터페이스와 제너릭을 이용한 타입 추론 방식이다. T에 따라서 value값이 변경될 수도 있고 title은 고정 시켜놓을 수도 있다. 그리고 다른 함수를 선언하면서 변수를 초기화하면 타입도 초기화가 된다. 위 코드처럼 value 값에 'abc'를 넣으면 자동으로 문자열로 변동되고 숫자를 넣으면 자동으로 number값으로 변동된다.

<br>

### 💫 타입추론 기본 3 : 복잡한 구조에서의 타입 추론방식

```
interface Dropdown<T> {
  value: T;
  title: string;
}

interface DetailedDropdown<K> extends Dropdown<K> {
  description: string;
  tag: K;
}

var DetailedItem: DetailedDropdown<string> = {
  title: 'hello',
  description: 'ab',
  value: 'a',
  tag: 'a'
}
```

> 처음에는 인터페이스로 제너릭을 선언해주고 value값도 제너릭 형태로 타입정의를 해준다. 그리고 또다른 인터페이스를 선언할 때는 Dropdown 인터페이스를 extends(확장)를 써서 데려오면 굳이 선언하지 않아도 암묵적으로 Dropdown에 속해있는 속성들이 들어와있다. (value, title 등등) 그리고 새로운 함수(DetailedItem)를 생성할 때 DetailedDropdown을 가져와 즉시 타입을 지정해주면 위에있는 인터페이스들 value값들이 자동으로 변동된다. 위 코드는 string으로 지정했으니 위에있는 인터페이스 value값들은 string으로 변동된다. 그리고 DetailedItem 변수에 담긴 속성들은 문자열로 나열해주어야 에러를 방지할 수 있다.

<br>

## 💜 가장 적절한 타입

```
let arr = [0, 1, null];
```

> 배열에 들어가는 값들이 한 타입으로 통일되지 않았다. 2개는 number, 1개는 boolean값으로 들어가있다. 위 코드처럼 선언후 arr 변수 위에 마우스커서를 올려놓으면 number | boolean 값으로 알아서 추론해준다. 이렇게 유니온 방식으로 알아서 추론해준다 👍🏻

## 💜 타입 단언
