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

const numberOfProucts:{value:number; selected: boolean}[] = [
  {value: 1, selected: true},
  {value: 2, selected: false},
  {value: 3, selected: false},
]

//이 함수에 배열의 값들을 넘겨받는다.
//이 함수 괄호에 있는 item은 옵션을 뜻한다.
function createDropdownItem(item: {value: string; selected: boolean}) {
  const option = document.createElement('option');
  option.value = item.value.toString();
  option.innerText = item.value.toString();
  return option;
}

// NOTE: 이메일 드롭 다운 아이템 추가
emails.forEach(function(email) {
  const item = createDropdownItem(email);
  const selectTag = document.querySelector('#email-dropdown');
  selectTag.appendChild(item);
})