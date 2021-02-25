//타입스크립트는 확장자를 .ts 로 만들어준다.

function add(a: number, b: number):number {
  return a+b;
}

var result = add(10, 20);
result.toLocaleString();