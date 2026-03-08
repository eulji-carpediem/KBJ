function solution(num1, num2) {
    var answer = 0;
    answer = num1 / num2;
    return Math.trunc(answer);
}
console.log(solution(10,5));
console.log(solution(7,2));
// solution 함수 첫줄은 초기화 구문 같고,  2번째는 파라미터 2개끼리의 연산이기에 그냥 붙이고, 검색을 통해서 소숫점을 띄어내는
// Math.trunc 함수 사용.