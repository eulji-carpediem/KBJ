const username = "";
if (username === "") {
    console.log("사용자명을 입력하세요"); // 빈 문자열인지 확인하여 경고 메시지 출력
}

const num = 11;
if (num % 2 === 0) {
    console.log("even");
} else {
    console.log("odd"); // 짝수면 even , 아니면 (홀수)odd 출력
}

const temp = 8;
if (temp >= 30) {
    console.log("무더위");
} else if (temp >= 10) {
    console.log("보통");
} else if (temp >= 0) {
    console.log("쌀쌀"); // 온도가 0도 이상 10도 미만일 때 '쌀쌀' 출력  그외는 각각
} else {
    console.log("한파");
}

const pwd = "abc123";
if (!pwd) {
    console.log("비밀번호 없음");
} else {
    if (pwd.length < 8) {
        console.log("너무 짧음"); // 비밀번호가 존재하지만 8자 미만이면 '너무 짧음' 출력
    } else {
        console.log("사용 가능");
    }
}

const signal = "yellow";
switch (signal) {
    case "red":
        console.log("정지");  //각각 break 문을 넣어야하는게 중요.
        break;
    case "yellow":
        console.log("주의"); // signal 값이 "yellow"일 때  "주의" 실행 후 중단
        break;
    case "green":
        console.log("진행");
        break;
    default:
        console.log("알 수 없음"); // 아무것도 아니면  알 수 없음 출력..
}

const month = 4;
let season = "";
switch (month) {
    case 12:
    case 1:
    case 2:
        season = "겨울"; break;
    case 3:
    case 4:
    case 5:
        season = "봄"; break; //  switch 이후 case 중복사용으로 3, 4, 5월에 해당하면 '봄'을 할당 할 수 있는 예제.
    case 6:
    case 7:
    case 8:
        season = "여름"; break;
    default:
        season = "가을";
}
console.log(season);

const isLoggedIn = false;
const msg = isLoggedIn ? "환영합니다" : "로그인이 필요합니다."; // 삼항 연산자, 조건연산자로 조건이 false이므로 뒤의 문자열 반환
console.log(msg);  // 이처럼 먼저 환영합니다. 이후 디폴트로 로그인이 안되어있게 false로 했기에 로그인이 필요합니다가 뜰것이고 오히려 조건에 맞으면 환영합니다가 뜸.

const price = 42000;
let fee = "";
if (price >= 50000) {
    fee = "무료배송";
} else if (price >= 30000) {
    fee = "배송비 2500원"; // 3만 원 이상 5만 원 미만일 때 배송비 설정
} else {
    fee = "배송비 3000원";
}
console.log(fee);       //else if  활용 예.