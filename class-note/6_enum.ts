enum Shoes {
  Nike ='나이키', // 이렇게 문자열로 지정했을 경우 console.log에는 나이키가 나온다.
  Adidas = '아디다스' //1
}
// 계속해서 enum에 새로운 값이 들어갔을 때 배열처럼 첫번째는 0으로 불린다.

var myShoes = Shoes.Nike;
console.log(myShoes); //0
//왜냐면 Nike는 Shoes 이넘에 첫 번째에 지정됐기 때문이다.

//🤨 이넘 활용 사례
//예제
enum Answer {
  Yes = 'Y',
  No = 'N',
}

function askQuestion(answer: Answer) {
  if (answer == Answer.Yes) {
    console.log('정답입니다.');
  }
  if (answer == Answer.No) {
    console.log('오답입니다.')
  }
}

askQuestion(Answer.Yes);