'use strict'

// JavaScript is synchronous 
// Execute the code block by orger after hoisting
// hoisting : var, function declaration
/**
 * 동기적 : hoisting 된 후부터 코드가 나타나는 순서대로 실행
 */

console.log('1');
setTimeout(()=> console.log('0'), 1000);
// 요청 보냄 - 브라우저에서 요청한 시간 후에 콜백함수 실행 - 콜백함수 내 코드가 수행됨
// 만든 함수를 전달해준다 :: 1초 후에 내가 만든 함수를 나중에 다시 불러줘 = callback
console.log('2');
console.log('3');
console.log('4');

// Synchronous callback
function printImmediately(print) {
    print();
}

printImmediately(() => console.log('hello'));

/**
 * JS engine 어케?
 * 1 함수 선언 위로 hoisting
 * 2 함수 선언
 * 3 브라우저 요청
 * 4 출력
 */

// Asynchronous callback
// setTimeout rapping
function printWithDelay(print, timeout){
    setTimeout(print, timeout);
}

printWithDelay(()=> console.log('async callback'), 2000);

/**
 * JS 실제 실행 순서
 * 
 * // Synchronous callback
    function printImmediately(print) {
        print();
    }

    // Asynchronous callback
    function printWithDelay(print, timeout){
        setTimeout(print, timeout);
    }

    console.log('1');
    setTimeout(()=> console.log('0'), 1000);
    console.log('2');
    console.log('3');
    console.log('4');

    printImmediately(() => console.log('hello'));
    printWithDelay(()=> console.log('async callback'), 2000);
 */

// JS : 동기 , 비동기
// 함수를 callback 인자로, 변수에도 할당할 수 있다
// : 언어마다 callback 쓰는 방법이 다르다


// Callback Hell example
class UserStorage{
    // 2 API
    // 1. 사용자 로그인
    // onSuccess : 성공 시 callback fn.
    // onError : 실패 시 callback fn.
    loginUser(id, password, onSuccess, onError){
        setTimeout(() => {
            if(
                (id === 'kastrio' && password === 'dream') ||
                (id === 'coder' && password === 'academy')
            ){
                onSuccess(id);
            } else {
                onError(new Error('not found'));
            }
        }, 2000);
    }

    // 2. 사용자마다 가진 권한 서버에 요청해서 정보 받아옴
    getRoles(user, onSuccess, onError){
        setTimeout(() => {
            if(id === 'kastrio' && password === 'dream') {
                onSuccess({name : 'kastrio', role: 'admin'});
            } else {
                onError(new Error('no access'));
            }
        }, 1000);
    }
}

// 1. 사용자 입력받기 : id, pw
// 2. id, pw login
// 3. 성공 : 받아온 id를 이용한 role
// 4. 성공 : 사용자 object 출력하기

const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');

// callback 체인
// 1. 가독성 떨어짐
// 2. 로직 분석이 어려움
// 3. 에러, 디버깅 처리가 복잡함
userStorage.loginUser(
    id,
    password,
    user => {
        userStorage.getRoles(
            user, 
            userWithRole => {
                alert(
                    `hello, ${userWithRole.name}, you have a ${userWithRole.role}`
                );
        },
        error => {
            console.log(error);
        });
    },
    error => {console.log(error);}
);