//TS문자열
let str: string = 'hello';

//TS숫자
let num: number = 10;

//TS배열
let arr: Array<number> = [1,2,3];
//array는 다른 타입과 다르게 첫 글자가 대문자여야 되고
//그 다음 괄호에는 어떤 타입만 들어올 수 있는지 선언하면 된다.

let heroes: Array<string> = ['Capt', 'Thor', 'Hulk', 10];
//만약 이렇게 문자열 타입으로 선언했는데 숫자 10이 들어오면 빨간 줄로 에러표시가 생긴다.

let items: number[] = [1,2,3];
// 또다른 타입 설정 방법
// [] 이거는 배열 리터럴이란 뜻이다. 그리고 그 앞에 number라는 타입을 지정해주면 된다.

//TS튜플
let address01: [string, number] = ['gangnam', 100];
// 배열의 각각 인덱스에 타입이 정의되어 있다고 보면된다.

//ts객체
let obj : object = {};
let person01: object = {
  name: 'capt',
  age: 100
}
//객체 속성은 어떤 타입이 들어오던 크게 신경 쓰지 않는다.

let person: { name: string, age: number } = {
  name: 'thor',
  age: 1000
}
// 각 인자마다 타입을 지정해주면, 이렇게 객체 함수를 나타낼 수도 있다.

// ts 진위값
let show: boolean = true;