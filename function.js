// Function
// - fundamental building block in the program
// - subprogram can be used multiple times
// - performs a task or calculates a value

// 1. Function declaration
// function name(param1, param2) { body... return; }
// one function === one thing
// naming: doSomething, command, verb
// 이름 짓기 어렵다면, 함수 기능을 많이 넣은 것일 수 있음 -> 나눌 수 있도록 한다
// e.g. createCardAndPoint -> createCard, createPoint
// **function is object in JS**
// 변수, 파라미터, 리턴 가능한 이유

function printHello() {
    console.log('Hello');
}
printHello();

function log(message) {
    console.log(message);
}
log('Hello@');
log(1234);
// 다른 함수에서 타입이 중요한 경우, JS로는 난해할 수 있다
// -> 인터페이스가 명확하지 않아서 공동 개발 시 헷갈릴 수 있음

// 2. Parameters
// primitive parameters: passed by value
// object parameters: passed by reference
function changeName(obj) {
    obj.name = 'coder';
}
const ellie = {
    name: 'ellie'
};
changeName(ellie);
console.log("changeName is ", ellie);

// 3. Default parameters (added in ES6)
function showMessage(message, from = 'unknown,,,') {
    console.log(`${message} by ${from}`);
}
showMessage('Hi!');

// 4. Rest parameters (added in ES6)
// ... => 배열 형태로 전달된다는 의미
function printAll(...args) {
    for (let i = 0; i < args.length; i++) {
        console.log(args[i]);
    }
    // for of 출력
    for (const arg of args) {
        console.log(arg);
    }
    // 배열 forEach : 함수형 언어
    args.forEach((arg) => console.log(arg));

}
printAll('dream', 'coding', 'ellie');

console.log("==========================");

// 5. Local scope
// 밖에서는 안이 보이지 않고 안에서만 밖을 볼 수 있다
let globalMessage = 'global'; // global variable
function printMessage() {
    // let : 지역변수 -> 함수 안에서만 접근 가능
    let message = 'hello';
    console.log(message); // local variable
    console.log(globalMessage);

    function printAnother() {
        console.log(message);
        let childMessage = 'hello';
    }
    // 자식은 부모에게서 정의된 메세지를 확인 가능
    // 자식에게서 정의된 메세지를 부모 상위에서 확인 불가
    // console.log(childMessage); //error
}
printMessage();
sum(4, 12);
console.log("============6. Return a value==============");
// 6. Return a value
function sum(a, b) {
    return a + b;
}
const result = sum(1, 2); // 3
console.log(`sum: ${sum(1, 2)}`);

console.log("============7. Early return, early exit==============");

// 7. Early return, early exit
// bad
function upgradeUser(user) {
    if (user.point > 10) {
        // long upgrade logic...
    }
}

// good
function upgradeUser(user) {
    // 조건 아닐 때 return
    if (user.point <= 10) {
        return;
    }
    // 필요 로직은 그 다음부터 처리
    // long upgrade logic...
}

console.log("============First-class function==============");

// First-class function
// functions are treated like any other variable
// can be assigned as a value to variable
// can be passed as an argument to other functions.
// can be returned by another function
console.log("============ 1. Function expression==============");

// 1. Function expression
// a function declaration can be called earlier than it is defined. (hoisted)
// a function expression is created when the execution reaches it.
// 이름 있는 함수 named function
const print = function () { // anonymous function
    console.log('print');
};
print();
const printAgain = print;
printAgain();
const sumAgain = sum;
console.log(sumAgain(1, 3));


console.log("============ 2. Callback function using function expression ==============");

// 2. Callback function using function expression
// 콜백 함수 :: 
// 2가지 콜백 함수가 파라미터로 전달되어서,
function randomQuiz(answer, printYes, printNo) {
    if (answer === 'love you') {
        printYes();
    } else {
        printNo();
    }
}

// anonymous function
const printYes = function () {
    console.log('yes!');
};

// named function
// better debugging in debugger's stack traces
// recursions
// 1 디버깅 할 경우 함수명이 나오도록 하게 함
// 2 함수 안에서 다른 함수를 호출하는 용도
const printNo = function print() {
    console.log('no!');
    // print(); : 재귀함수
    // call stack!
};
randomQuiz('wrong', printYes, printNo);
randomQuiz('love you', printYes, printNo);

console.log("============ Arrow function ==============");

// Arrow function :: always anonymous
// 
// const simplePrint = function () {
//   console.log('simplePrint!');
// };

const simplePrint = () => console.log('simplePrint');
simplePrint();
const add = (a, b) => a + b;

console.log("============ IIFE ==============");

// IIFE: Immediately Invoked Function Expression
// 선언과 동시에 표출하는 함수 표현법 :: 요즘에는 잘 안씀
(function hello() {
    console.log('IIFE');
})();



console.log("============ Fun quiz time❤️ ==============");

// function calculate(command, a, b)
// command: add, substract, divide, multiply, remainder
function calculate(command, a, b){
    switch(command){
        case 'add': 
            return a+b;
        case 'substract':
            return a-b;
        case 'divide':
            return a/b;
        case 'mutiply':
            return a*b;
        default:
            throw Error('Undefined command');
    }
}

console.log(calculate('substract',6,7));