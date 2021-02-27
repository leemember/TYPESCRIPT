//🌟타입함수를 정의할 때 중복되는 코드들을 제거하기 위해서 '타입별칭'을 선언해주는 방법이 있다
type Todo = {
  id: number;
  title: string;
  done: boolean;
}

let todoItems: Todo[];
//할일 목록을 받는 배열의 성격을 가지고 있다.
//객체object 배열로 선언해주었다.
//todos 함수에 담긴 객체 배열들의 타입들을 미리미리 지정해두어야 한다.
//그래야 에러가 안생긴다.

// api
function fetchTodoItems():{ id: number; title: string; done: boolean; }[] {
  //{ id: number; title: string; done: boolean; }이렇게 생긴 배열의 반환값을 원한다.
  //구체적으로 나타내주는 것이 타입스크립트의 킬포임 🌟 
  const todos = [
    { id: 1, title: '안녕', done: false }, //이것들이 다 object다
    { id: 2, title: '타입', done: false },
    { id: 3, title: '스크립트', done: false },
  ];
  return todos;
} //배열을 반환한다.

// crud methods
function fetchTodos(): object[] {
  const todos = fetchTodoItems();
  return todos;
} // 리턴했을 때  object[] 를 반환하다.

//할 일 추가하기
function addTodo(todo: { id: number; title: string; done: boolean; }): void {
  //이렇게 구체적으로 타입을 정의해주어야 todo에 대한 에러가 안생긴다.
  todoItems.push(todo);
} //함수의 반환값(return)이 없을 때 void를 해줘야한다.

//할 일 지우기
function deleteTodo(index : number):void {
  todoItems.splice(index, 1);
} // index는 배열의 index이기 때문에 타입은 number로 지정해주는 것이 좋다.
// 그리고 이것 또한 반환값이 없으므로 void를 선언해준다.

//할 일 완료하기
function completeTodo(
  index:number,
  todo: { id: number; title: string; done: boolean; }
):void {
  todo.done = true; //done의 타입은 boolean으로 나타냈기 때문에 꼭 true/false로 나타내줘야한다.
  todoItems.splice(index, 1, todo);
}

// business logic
function logFirstTodo(): object{
  return todoItems[0];
} // 할 일 목록에서 가장 첫 번째꺼를 반환한다는 목적의 함수이다.
//그러니 이것도 object로 해준다.

function showCompleted() : object[] {
  return todoItems.filter(item => item.done);
} //특정함수만 걸러내는 것을 filter라고 한다.
//할 일 목록 중에서 done처리를 한다.
//filter해줄 때 오브젝트들이 배열로 되어있어 그 중에서 걸러주는 것이니
//타입은  object[] 이렇게 [] 배열표시까지 해주어야한다.

// TODO: 아래 함수의 내용을 채워보세요. 아래 함수는 `addTodo()` 함수를 이용하여 2개의 새 할 일을 추가하는 함수입니다.
function addTwoTodoItems() : void {
  // addTodo() 함수를 두 번 호출하여 todoItems에 새 할 일이 2개 추가되어야 합니다.
  const item1 = {
    id: 4,
    title: '아이템 4',
    done: false,
  }

  addTodo(item1);
  addTodo({ //이렇게 직접적으로 넣어두 된다.
    id: 5,
    title: '아이템 5',
    done: false,
  });
} // addTodo에 item1이라는 객체 하나가 추가됐기 때문에 빨간 줄 에러가 안생긴다.
//이렇게 함으로써 addTodo에 아이템을 2개 추가한 것을 볼 수 있다.

// NOTE: 유틸 함수
function log() : void {
  console.log(todoItems);
}

//todoItems에 fetchTodoItems를 집어넣는다.
todoItems = fetchTodoItems();
addTwoTodoItems();
log();