//💜함수의 파라미터에 타입을 정의하는 방식
function sum2(a: number, b: number) {
  return a + b;
}
//파라미터의 타입을 지정해준다. 둘 다 number로 지정함
sum(10, 20);


//💜함수의 반환 값에 타입을 정의하는 방식
function add02(): number {
  //return 10;  
}
// 반환값을 정의하고 나면 number라는 값이 리턴되야하는데
// 리턴해주는 함수 로직에 리턴 될 값이 없으면
// number에 에러줄이 생긴다.


//💜함수에 타입을 정의하는 방식
function sum3(a: number, b: number): number {
  return a + b;
}

sum(10, 20, 30, 40);

//파라미터에 각 인자에 어떤 타입이 들어갈지 선언해주고,
//어떤 타입이 반환될지도 지정해주고, 리턴값도 넣어줘야 가장 기본적인 베스트 방식이다.
//sum3(a: number, b: number): number
//여기서 맨 마지막에 있는 number가 반환될 타입이다.
// 그리고 sum(10, 20, 30, 40);에 30,40은 허용되는 인자 갯수가 2개 뿐이라 에러가 난다.
