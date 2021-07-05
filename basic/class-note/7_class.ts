//타입스크립트의 클래스 문법
class Person {
  private name: string;
  public age: number;
  readonly log: string;


  constructor(name:string, age:number) {
    this.name = name;
    this.age = age;
  }
}

// 클래스 문법은 리액트 예전 문법이다.
//클래스 많이 안봐두됨 
class App extends React.Component {

}

//리액트 최신 문법 - 훅 기반의 함수형 코드
function App() {
  return <div>Hello World</div>
}