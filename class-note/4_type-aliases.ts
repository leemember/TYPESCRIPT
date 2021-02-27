interface Person {
  name: string;
  age: number;
} //인터페이스를 이용한 타입정의

type Person = {
  name: string,
  age: number,
} // 타입별칭을 이용한 정의

var seho : Person = {
  name:'세호',
  age: 40
}

type MyString = string;
var str: MyString = 'hello';

type Todo = { id: string; title: string; done: boolean };
//이렇게 타입별칭을 사용하면 코드의 가독성도 높아지고, 코드량도 줄어든다.
function getTodo(todo: Todo) {

}