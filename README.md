# 🔮 TypeScript 입문기

> 요즘 핫한 TypeScript를 3개의 실습 프로젝트를 통해 공부하면서 이게 왜 잘나가는지 파악해보자 🤨

<br>

| 타입스크립트 핸드북 링크         | TypeScript 공식문서              |
| :------------------------------- | :------------------------------- |
| https://joshua1988.github.io/ts/ | https://joshua1988.github.io/ts/ |

<br>

- 실습할 때 설치하면 좋은 플러그인

| 문법 검사      | 파일 아이콘 테마    |
| :------------- | :------------------ |
| ESLint, TSLint | Material Icon Theme |

<br>

## 💜 타입스크립트란 ?

> 타입스크립트는 자바스크립트에 타입을 부여한 언어다. 자바스크립트의 확장된 언어라고 볼 수 있다. 타입스크립트는 자바스크립트와 다르게 브라우저에서 실행하기 위해 파일을 변환해주어야 한다. 이 변환 과정을 <b>컴파일</b>이라 한다.

## jsDoc의 표준 문법

먼저, 확장자 .js 파일에 타입스크립트를 선언해 줄 때는

```
/**
*
*
*/
```

> 이런꼴에다가 속성들을 선언 해주어야한다. 이걸 바로 jsDoc의 표준 문법이라 부른다.

```
/**
 * @typedef {object} Address
 * @property {string} street
 * @property {string} city
 */
👆 Address 객체에 대한 속성들 선언해주기. 어떤 타입인지도 지정해 줄 수 있다.
밑에 선언된 string의 address라는 객체에 속성들을 담아놓았다.
string : 문자열
object : 객체

/**
 * @typedef {object} User
 * @property {string} name
 * @property {string} email
 * @property {string} address
 */
User라는 객체 안에 담긴 속성들을 담아놓았다.
이름,이메일,주소 등등이 있다.

/**
 * @returns {Promise<User>}
 */
```

> 이런식으로 타입 객체에 대한 property를 정의하고나면

```
fetchUser().then(function (response) {
  response.address.city
});
```

> 이렇게 fetchUser로 불러와서 function()괄호 안에 response를 입력후, response. 만 입력해줘도 어떤 속성들이 들어있는지 리스트들이 쭈루룩 나온다. 파란색박스 아이콘이 그 속성들을 뜻한다.
> 그리고 address라는 객체에도 따로 속성들을 지정해주면 리스트들이 주루룩 나온다.

🗣 여기서 타입스크립트의 첫 번째 좋은점은 오타가 날 시, 없는 속성으로 인식하여 빨간줄이 생긴다. 그래서 에러를 금방 찾을 수 있다는 장점이 있다.

<br>

## 💜 타입스크립트의 장점들 살피기

먼저 타입스크립트는 확장자를 .ts 인 파일을 만들어줍니다.

```
function add(a: number, b: number):number {
  return a+b;
}
add(10, '20');
```

> add라는 함수 이름을 짓고, 숫자라는 타입을 받고싶으면 (a: number, b: number) 이렇게 선언해준다.
> 숫자 2개를 받아 반환해주는 것까지 타입스크립트에서 자동적으로 인식을 해서 반환해주는 것을 타입스크립트의 <추론>이라고 한다.
> add(10, 20); 라고 하면 a : 10, b : 20이라는 뜻이다. 🌹 좋은점은!!! 만약 add(10, '20'); 이렇게 했을 경우 20은 문자열로 표기되어있는데,
> 이것을 타입스크립트에서는 에러표시가 난다. 왜냐하면 우리가 정해놓은 타입을 number로 지정했기 때문에 <b>알아서 에러가 나므로 코딩을 할 때 에러를 최소화 할 수 있다.</b>

<br>

```
function add(a: number, b: number):number {
  return a+b;
}

var result = add(10, 20);
result.toLocaleString();
```

> 내가 지정한 타입을 Number라고 했으니 result라는 변수 다음에 result.만 찍어도 number에 관한 api 리스트가 주루룩 나온다.
> 그 중에서 toloca만 치고 tab키를 누르면 자동완성으로 toLocaleString이 나타난다. 일반 js의 경우 그런 속성들이 전혀 나타나지 않는데 타입스크립트라서 가능한 기능이다.
> 그리고 toLocaleString 이 속성은 꼭 이렇게 중간에 낙타법으로 대문자가 표기되어있는데 타입스크립트는 알아서 <b>자동완성 기능이 있기 때문에 오탈자도 방지</b>할 수 있다는 장점이 있다.
> 그래서 타입스크립트를 잘 활용하면 훨씬 더 정확한 코드를 작성해 나갈 수 있다.

<br>

## 💜 타입스크립트 시작하기

<br>

> 타입스크립트 확장자의 파일을 만들고 컴파일 해줘야 한다.

```
function sum(a: number, b: number) : number {
  return a + b;
}

sum(10, 20);
```

이런 코드가 index.ts 라는 확장자 파일에 담겨있을 때 브라우저로 인식 할 수 있도록 컴파일을 해주어야한다. <br>
💫 여기서 언급한 컴파일은 .ts => .js 로 변환해주는 과정을 뜻한다.

<br>

<b>1. 노드 버전을 확인해준다. ver 10 이상이어야 한다</b>

```
$node -v
```

<b>2. 타입스크립트 라이브러리를 설치해준다.</b>

```
$npm i typescript -g
```

<b>3. 타입스크립트의 파일을 js파일로 변환해준다.</b>

```
$tsc [변환할 ts 파일명]
👉🏻 $tsc index.ts
```

> 이 과정 까지 하고나면 같은 폴더 경로 안에 index.ts가 index.js라는 파일로 변환되어 나타난다. 하지만 매번 tsc라는 명령어를 통해 파일을 컴파일 시켜 줄 수는 없으니 <b>'웹팩' 또는 ' 걸프' 같은 모듈 번들러</b>를 사용해서 자동화 시켜주면 좋다.
> <b>🤙🏻 웹팩도 공부해야 좋으니 타입스크립트 입문 공부 끝나면 웹팩도 공부하기 </b>

<br>

<b>4. 타입스크립트 환경세팅 속성 알아보기</b>

> https://www.typescriptlang.org/tools

위 사이트에 들어가서 TSConfig Reference 라는 페이지에 들어가면 tsconfig.json 파일에 환경 세팅 해줄 속성들이 많이 나오니, 필요한 속성들을 이 공식문서를 보고 찾아서 사용하면 된다.

<br>

<b>5. 타입스크립트 플레이 그라운드 소개</b>

> https://www.typescriptlang.org/play

타입스크립트 공식문서에 들어가면 Playground라는 메뉴가 있다. 이 페이지에 들어가보면 왼쪽에 타입스크립트로 코드를 작성했을 때 오른쪽에 변환 된 코드 내용들을 확인해 볼 수 있다.

![Z](https://user-images.githubusercontent.com/71499150/109260378-5fc6bf00-7841-11eb-9bab-426f45b75a80.jpg)

> ts식 코드를 쳤는데 오른쪽에는 js로 컴파일 된 코드들을 확인 가능

🤍 바벨 : https://babeljs.io/ <br>
이것도 자바스크립트의 최신 문법을 많은 브라우저에서 호환 될 수 있게 해주는 도구이다.
왼쪽에 작성된 코드들을 오른쪽 화면에 JS로 변환해준다.

<br>

## 💜 타입스크립트 기초 - 변수와 함수 타입 정의

<br>

변수 타입에는 이렇게 12가지 타입들이 존재한다.

- Boolean
- Number
- String
- Object
- Array
- Tuple
- Enum
- Any
- Void
- Null
- Undefined
- Never

```
👉🏻일반 JS 문자열 선언방식
var str = 'hello';

👉🏻TS 문자열 선언방식
let str: string = 'hello';
```

### 👉🏻 [자주 사용하는 기본타입 알아보기](./class-note/1_type-basic.ts)

### 👉🏻 [함수타입 알아보기 (파라미터, 반환값, 파라미터를 제한하는 특성)](./class-note/2_functions.ts)

<br>

<b>일반 JS파일의 경우</b> 파라미터에 인자 2개를 넘길 수 있게 되어있는데,
sum() 안에 있는 10과 20에 대한 것만 값의 결과를 낼 수 있고, 그 외에 30,40,50은 자동으로 유연하게 무시된다.

<br>

<b>💜함수에 타입을 정의하는 방식</b>

```
function sum(a, b) {
  return a + b;
}

sum(10, 20, 30, 40, 50);

```

<br>

<b>TS파일의 경우</b>

```
function sum3(a: number, b: number): number {
  return a + b;
}

sum(10, 20, 30, 40, 50);
```

> 이렇게 작성하면 30, 40, 50에 빨간 에러 밑줄이 생긴다. JS에 비해 TS는 파라미터에 대해 엄격하게 체크해준다. 만약 인자개수보다 sum 파라미터 인자 개수가 적을 경우에도 에러가난다. 무조건 파라미터 인자 갯수와 리턴되는 인자 개수가 비례해야 된다.

<br>

<b>💜함수의 옵셔널 파라미터</b>

```
function log(a: string, b?:string) {

}
log('hello world');
log('hello ts', 'abc');
```
> 함수의 옵셔널 파라미터란 해당 값에 ? 물음표를 넣어주면 파라미터에 속한 인자값과 출력되는 값이 비례하지 않아도 된다. 예를들어 log를 두 줄을 넣었을 때 첫번째 log는 출력되는 값이 1개 일 때 function log(a: string, b?:string) 여기 b에 물음표가 없으면 첫번째 log에 빨간 에러표시가 생긴다. 그리고 다시 물음표를 넣어주면 빨간 에러표시가 사라진다. 이걸 바로 <b>함수의 옵셔널 파라미터(선택적 파라미터)</b>라고 부른다.


## 💜 타입스크립트를 통해 애플리케이션 만들기
>타입스크립트로 프로젝트를 할 때 타이핑을 해줘야 된다. 그리고 코드를 작성 할 때 원래 사용하던 자바스크립트의 타입을 좀 더 정확하게 명시적으로 나타내주는 것이 타입스크립트의 포인트다.
- 타이핑 : 타입이 정의되지 않은 코드에 타입을 입혀주는 행위

[tsconfig.json]
```
{
  "compilerOptions": {
    "allowJs": true,
    "checkJs": true,
    "noImplicitAny": true
  },
  "include": ["./src/**/*"]
}

```
> 여기서  "noImplicitAny": true 이것은 함수 타입을 any라도 지정해주어라 라는 뜻이다.
- void : 반환 값이 없다는 뜻이다.

### 👉🏻 [1번째 프로젝트:타입스크립트로 TODOLIST 만들기](./src/index.ts)
> 이 경로에 들어가면 TODOLIST 프로젝트 코드를 통해 어떤식으로 함수구현하고 오류 해결방안과 구체적인 타입정의 그리고 중복된 코드 제거를 살펴볼 수 있다.
코드 작성하다가 중복되는 코드들을 제거하기 위해서 <b>타입별칭 또는 인터페이스</b>를 이용하면 코드를 훨씬 간결하게 나타낼 수 있다.

<br>

## 💜 인터페이스란?

```
interface User {
  age: number;
  name: string;
  }

var seho: User = {
  age: 33,
  name: '세호'
}

function getUser(user : User) {
console.log(user);
}

```
> 중복된 코드들을 제거하기 위해 User라는 interface 만들어서 속성들을 넣어주고, 변수에 인터페이스를 활용한 다음 새로운 함수를 만들 때, 인터페이스를 넣는다.
그리고 변수를 만들 때는 인터페이스의 age, name을 타입 적용시켜 사용해줘야한다.

### 인덱싱 인터페이스

```
interface StringArray {
  [index: number] : string;
  //index는 숫자를 받고, 반환되는 값은 문자열로
}

var arr : StringArray = ['a','b','c','d'];
```

> index는 숫자를 받기 때문에 number로 지정하고, 반환되는 값은 문자열로 string 뽑아내준다.그리고 arr라는 변수를 만들 때 이미 만들어진 StringArray 인터페이스 속성 규칙대로 배열 값들은 string으로 입력해준다.

### 딕셔너리 패턴

```
interface StringRegexDictionary {
  [key:string] : RegExp;
}

var obj : StringRegexDictionary = {
  cssFile : /\.css$/,
  jsFile : /\.js$/
}


Object.keys(obj).forEach(function(value) {})
```
>StringRegexDictionary 인터페이스에 왼쪽에 있는 key값은 string으로 오른쪽은 RegExp라는 정규표현식으로 지정했기 때문에 obj라는 변수에 StringRegexDictionary를 불러왔으니 똑같이 왼쪽에는 string방식으로 오른쪽에는 정규표현식을 사용해줘야한다.
그리고 마지막에 Object로 시작하는 문장의 코드는 keys에 obj라는 key들만 배열로 만든다음에 forEach 돌려준다는 것이고 function 함수 파라미터 안에 들어있는 value는 string를 의미

### 인터페이스 확장

```
interface Person {
  name: string;
  age: number;
}

interface Developer extends Person {
  language: string;
}
```
> Person이라는 인터페이스 안에 속성들을 정의해두고 이걸 확장해서 코드 수를 줄이는 방법이다.
먼저 Person 인터페이스를 정의해 뒀으니 Developer라는 인터페이스에 Person를 extends를 써서 확장 시켰기 때문에, name과 age이란 속성은 알아서 가지고 가게 된다. 그리고 Developer라는 인터페이스에는 새로운 속성인 language만 추가시켜서 선언해줌

