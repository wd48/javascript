//async & await
// clear style of using promise

// 1. async : promise를 간편하게 쓰는 synpatic sugar - 바로 promise 사용
async function fetchUser() {
    // return new Promise((resolve, reject) => {
    //     // do network request in 10 sec...
    //     resolve('kastrio');
    // });
    // promise 선언만 하면 비동기 불러옴

    // pending : 남아있음 - 결과값 없음
    return 'kastio';
}

const user = fetchUser();
user.then(console.log);
console.log(user);

// 한줄이 끝나야 다음으로 넘어가는 동기적 제출
// 함수 호출한 곳으로 이동 > 함수 실행 - 메서드 결과 성공 후에야 return 값 넘어감
// return값이 const user에 할당 > console.log로 이동

// 오래걸리는 일은 비 동기적으로 처리해야함


// 2. await
// delay 끝날 때까지 기다려줌
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function getApple() {
    await delay(2000);
    return '🍎';
}

async function getBanana() {
    await delay(1000);
    return '🍌';
}

// function pickFruits() {
//     return getApple().then(apple => {
//         return getBanana().then(banana => `${apple} + ${banana}`);
//     });
// }

// pickFruits().then(console.log);
// 많은 체이닝을 하면 시간이 오래걸림

async function pickFruits(){
    const applePromise = getApple();    // 만들자마자 실행 : 병렬적으로 실행됨
    const bananaPromise = getBanana();  // 동시에 기능을 수행할 수 있는 경우에는..
    const apple = await getApple();
    const banana = await getBanana();
    return `${apple} + ${banana}`;
}

pickFruits().then(console.log);

// 3. useful APIs ✨
// all : 모든 promise를 병렬적으로 될때까지 다 받아줌
function pickAllFruits() {
    return Promise.all([getApple(), getBanana()]).then(fruits =>
      fruits.join(' + ')
    );
  }
  pickAllFruits().then(console.log);
  // race : 가장 먼저 값을 return하는 메서드 결과를 내놓는다
  function pickOnlyOne() {
    return Promise.race([getApple(), getBanana()]);
  }
  console.log("================");
  pickOnlyOne().then(console.log);