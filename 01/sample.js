// function sum(a,b) {
//   return a + b;
// }

// sum(10, '20');
// // 타입스크립트가 아닌 기본 자바스크립트에서는 이렇게 함수를 만들 때, 이런 함수는
// // 숫자와 문자열을 더하기 때문에
// // 자바스크립트 특성상 전부 문자열로 인식해서 결과가 아마 1020으로 나올 것으로 예상한다.

// @ts-check

/**
 * 
 * @param {number} a 첫번째 숫자
 * @param {number} b 두번째 숫자
 */

 function sum(a,b) {
   return a + b;
 }

 sum(10, '20');
