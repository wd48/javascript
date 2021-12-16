'use script'

// promise is a JS object for asynchronous operation
// state : pending (수행중) -> fulfilled(수행 완료) or rejected(문제)
// Producer vs Consumer


// 1. Producer
// When new Promise is created, the executor runs automatically.

// promise 만드는 순간 excuter 가 바로 실행됨
// > 네트워크 통신 코드를 작성하면, 만들어지는 순간 네트워크 통신을 수행한다

// 1. 네트워크 요청을 사용자가 요구했을 경우에만 수행해야 하는 경우
// ~ promise로 구현하면 불필요한 통신이 된다.

const promise = new Promise((resolve, reject) => {
    // doing some heavy work (network, read files)
    // 불러오는 데이터가 큰 작업을 동기적으로 불러오면 시간이 오래 걸린다
    // 비동기적으로 처리하는게 효율적
    console.log('doing something...');
    setTimeout(() => {
        // resolve('kastrio');
        reject(new Error('no network..'));
        // uncaught : 잡히지 않는 에러
    }, 2000);
});

// 2. Consumers (promise 사용하기) : then, catch, finally

// then : promise 정상 수행하여 최종적으로 resolve 콜백함수를 통해 전달된 값을 불러온다
promise
    .then((value) => {
        // value :: resolve 콜백함수에서 전달된 값
        console.log(value);
    })
    .catch(error => {
        console.log(error);
    })
    .finally(() => {
        console.log('finally!');
    });
// then : 똑같은 promise 리턴 -> 리턴된 promise 에 catch를 호출 가능 => 체이닝


// 3. Promise chaining
const fetchNumber = new Promise((resolve, reject) => {
    setTimeout(() => resolve(1), 1000);
});

fetchNumber
.then(num => num * 2)
.then(num => num * 3)
.then(num => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(num - 1), 1000);
    });
})
.then(num => console.log(num))


// 4. Error Handling


const getHen = () =>
    new Promise((resolve, reject) => {
        setTimeout(() => resolve('🐓'), 1000);
    });

const getEgg = hen =>
    new Promise((resolve, reject) => {
        // setTimeout(() => resolve(`${hen} => 🥚`), 1000);
        setTimeout(() => reject(new Error(`Error! ${hen} => 🥚`)), 1000);
        // 에러 핸들링을 하지 않았을 경우 Exception 함
    });

const cook = egg =>
    new Promise((resolve, reject) => {
        setTimeout(() => resolve(`${egg} => 🍳`), 1000);
    });

getHen()
// .then(hen => getEgg(hen))
// .then(egg => cook(egg))
// .then(meal => console.log(meal));
    .then(getEgg) // 한가지만 받아서 전달하는 경우에는 생략 가능
    // .catch(error => {
    //     return '🍞';
    //     // 일부가 문제가 생겨도, 대신 전달해줘서 Promise 체인이 실행되도록 하는 처리
    // })
    .then(cook)
    .then(console.log)
    .catch(console.log);
    // catch : 에러가 발생했지만 에러를 처리해서 마지막으로 내림
/**
 * 닭 받음 > 계란 만듦 > 계란으로 계란 후라이 만듦
 */

