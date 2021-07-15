// 타입스크립트는 확장자를 .ts 로 만들어준다.
function add(a: number, b: number): number {
  // 여기서 마지막에 :number는 반환값이다.
  return a + b;
}

var result = add(10, 20);
// add에 마우스를 올리면 선언해줬던 타입들이 잘 반환된 것을 확인할 수 있다.
result.toLocaleString();
