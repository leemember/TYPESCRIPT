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
그리고 address라는 객체에도 따로 속성들을 지정해주면 리스트들이 주루룩 나온다. 

🗣 여기서 타입스크립트의 첫 번째 좋은점은 오타가 날 시, 없는 속성으로 인식하여 빨간줄이 생긴다. 그래서 에러를 금방 찾을 수 있다는 장점이 있다.

## 타입스크립트의 장점들 살피기

먼저 타입스크립트는 확장자를 .ts 인 파일을 만들어줍니다.

```
function add(a: number, b: number):number {
  return a+b;
}
add(10, '20');
```
> add라는 함수 이름을 짓고, 숫자라는 타입을 받고싶으면 (a: number, b: number) 이렇게 선언해준다.
숫자 2개를 받아 반환해주는 것까지 타입스크립트에서 자동적으로 인식을 해서 반환해주는 것을 타입스크립트의 <추론>이라고 한다.
add(10, 20); 라고 하면 a : 10, b : 20이라는 뜻이다. 🌹 좋은점은!!! 만약 add(10, '20'); 이렇게 했을 경우 20은 문자열로 표기되어있는데,
이것을 타입스크립트에서는 에러표시가 난다. 왜냐하면 우리가 정해놓은 타입을 number로 지정했기 때문에 <b>알아서 에러가 나므로 코딩을 할 때 에러를 최소화 할 수 있다.</b>

<br>

```
function add(a: number, b: number):number {
  return a+b;
}

var result = add(10, 20);
result.toLocaleString();
```

> 내가 지정한 타입을 Number라고 했으니 result라는 변수 다음에 result.만 찍어도 number에 관한 api 리스트가 주루룩 나온다.
그 중에서 toloca만 치고 tab키를 누르면 자동완성으로 toLocaleString이 나타난다. 일반 js의 경우 그런 속성들이 전혀 나타나지 않는데 타입스크립트라서 가능한 기능이다.
그리고 toLocaleString 이 속성은 꼭 이렇게 중간에 낙타법으로 대문자가 표기되어있는데 타입스크립트는 알아서 <b>자동완성 기능이 있기 때문에 오탈자도 방지</b>할 수 있다는 장점이 있다.
그래서 타입스크립트를 잘 활용하면 훨씬 더 정확한 코드를 작성해 나갈 수 있다.
