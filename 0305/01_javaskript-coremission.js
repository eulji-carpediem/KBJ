// 1. 

// 사용자가 입력한 숫자가 홀수인지 짝수인지 판별하는 함수를 작성하세요.

// (if - else 문 이용하기)

// ==========================================================================
var input = 3;
if(input%2 ===0){
    console.log(`${input} 는 짝수입니다.`);
} else {console.log(`${input} 는 홀수입니다.`)}
// 2. 

// 아래의 객체를 for in 반복문을 사용하여, 객체의 모든 키와 그에 해당하는 값을 출력하는 코드를 작성하세요.

var person = {
    firstName: 'GilDong',
    lastName: 'Hong',
    age: 20
};

for (var key in person) {
    console.log(key + ": " + person[key]);   //person 안의 key를 통해서 value값과 동시에 콘솔로 띄운다.
}
//==========================================================================

//3.

//두 개의 숫자를 매개변수로 받아서 그 합을 반환하는 함수를 작성하세요.
const n1 = 3;
const n2 = 45;
function sumsum(num1,num2){
    console.log(num1+num2);
}
sumsum(n1,n2);
//==========================================================================

//4.

//아래의 함수들을 화살표 함수로 변환해보세요.

greet = ()=> {
    return "Hello!";
}


getInfo = (name, age)=> {
    return `name: ${name}, age: ${age}`;
}
//==========================================================================

//5.

//아래의 코드를 실행했을 때 출력결과가 나오도록 Person 생성자 함수를 정의하세요.
function Person(name,age){
    this.name = name;
    this.age = age;
    this.sayHello = function() {
        console.log(`안녕하세요, 제 이름은 ${name} 이고 나이는 ${age}세입니다.`);
    }
    
};

const person = new Person("홍길동", 20);

person.sayHello();

// ------- 출력 결과 --------
// 안녕하세요, 제 이름은 홍길동 이고 나이는 20세입니다.

//==========================================================================

// 6.

// (1) user 객체에 email 프로퍼티를 추가하고 "hong@gmail.com" 값을 넣으세요.
// (2) age 값을 21로 수정하세요.
// (3) name 값을 삭제하세요.

const user = {
   name : "gildong",
   age : 20
};

user.email = "hong@gmail.com";
user.age = 21;
delete user.name;
//==========================================================================

7.

// car 객체와 fireCar 객체 정의하기
// -------------------------------------------------------------------------------
// - car 객체는 brand 프로퍼티를 갖고있다.
// - fireCar 객체는 brand, color 프로퍼티를 갖고 있고 car객체를 상속받는다.
// - fireCar 객체에서 brand는 상속받은 프로퍼티이고, color는 자기 자신의 프로퍼티이다.
// -------------------------------------------------------------------------------
// 위의 예제에서 자기 자신의 프로퍼티와 상속된 프로퍼티를 구분하세요.

const car = {
   brand : "KIA"

};

const fireCar = {
    color : "Black"
};

Object.setPrototypeOf(fireCar,car);

console.log(Object.getPrototypeOf(fireCar));  // Object.getPrototypeOf(객체 )객체에 작성된부모가 누군지 알려준다.



for(let prop in fireCar){
    let isOwn =fireCar.hasOwnProperty(prop);              // 자신이 상속받은 프로퍼티 각각을 표기해주는 예시.

    if(isOwn){
        console.log(`객체 자신의 프로퍼티 ${prop}`);
    
    } else {
        console.log (`상속 프로퍼티 ${prop}`);
    }
}
