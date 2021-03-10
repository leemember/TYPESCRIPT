//이전에 긴 코드의 타입선언들을 인터페이스에 담아놓기
interface Email {
  value: string;
  selected: boolean;
}


//이 처럼 함수를 선언해줄때 타입을 정확하게 구체적으로 입력해주었다.
// value = 문자열 , selected = 논리형태
//그리고 배열 함수니까
//const emails: {value: string; selected: boolean}[] 이렇게 [] 배열 표시도 빠트리면 안된다.
const emails: {value: string; selected: boolean}[] = [
  //value와 텍스트가 같은 값을 쓰인다.
  //selected의 옵션값도 true/false로 구분한다.
  {value: 'naver.com', selected: true},
  {value: 'google.com', selected: false},
  {value: 'hanmail.net', selected: false},
];

interface ProductNumber {
  value: number;
  selected: boolean;
}

//향후에 어떤 타입이 오던간에 다 수용할 수 있도록
//매번 타입에 대한 타입정의를 인터페이스를 통해서 하는 것이 아니라
//타입이 어떤게 오던간에 그때그때마다 유연하게 갖다쓰겠다고 하는 것을
// 🧔🏻 제네릭을 변환해서 사용할 수 있게 된다 !!!!!!!!
interface TrueFalse {
  value: boolean;
  selected: boolean;
}

const numberOfProucts:ProductNumber[] = [
  {value: 1, selected: true},
  {value: 2, selected: false},
  {value: 3, selected: false},
]

//이 함수에 배열의 값들을 넘겨받는다.
//이 함수 괄호에 있는 item은 옵션을 뜻한다.
function createDropdownItem(
  item: Email | ProductNumber
  // | {value: number; selected: boolean} // item에는 얘도 받을 수 있고
  // | {value: string; selected: boolean} // 얘도 받을 수 있다.
  // 이 2개 다 수용할 수 있다. 이것을 유니온타입이라고 한다.
) {
  const option = document.createElement('option');
  option.value = item.value.toString();
  option.innerText = item.value.toString();
  return option;
}

// NOTE: 이메일 드롭 다운 아이템 추가
// forEach : 반복문을 돌려준다.
emails.forEach(function(email) {
  const item = createDropdownItem(email); 
  // createDropdownItem는 value : number
  // createDropdownItem 함수에 item에 타입을 넣으니 에러가 안생긴다
  // 그냥 타입은 코드수가 길어서 인터페이스로 만들어 넣었다.
  const selectTag = document.querySelector('#email-dropdown');
  selectTag.appendChild(item);
})

// forEach : 반복문
numberOfProucts.forEach(function (product) {
  const item = createDropdownItem(product);
  //각각 product를 넘겨도 에러가 나지 않는다.
})