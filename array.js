'use strict';
// 자료구조

// Array🎉

// 1. Declaration
const arr1 = new Array();
const arr2 = [1,2];

// 2. Index position
// 인덱스를 통한 배열 접근 방법

const fruits = ['🍎', '🍌'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits['key']); // key에 상응하는 value를 가져온다
console.log(fruits[0]);     // 배열의 1번째 값
console.log(fruits[1]);
console.log(fruits[2]);     // undefined
console.log(fruits[fruits.length - 1]);     // 배열의 마지막 값


// 3. Looping over an array
// print all fruits
console.clear();
for (let i in fruits){
    console.log(fruits[i]);
}
// for
for (let i=0; i<fruits.length; i++){
    console.log(fruits[i]);
}
// for of
for (let fruit of fruits) {
    console.log(fruit);
}
// forEach : 콜백 함수를 받아온다
// array 에 들어있는 값마다 전달한 callback 함수를 수행한다
// 1. callbackfn : 값 하나하나 마다 호출해준다
// value: T - 값, index - 인덱스, array - 배열 전체
// 2. thisArg? (선택사항) : 
fruits.forEach((fruit) => console.log(fruit));

fruits.forEach((fruit, i, array) => console.log(fruit, i, array));
// 배열 안에 들어있는 value 마다 내가 전달한 함수를 출력하는 구나

// 4. Addition, Delete, copy
// push: add an item to the end (끝에서부터 넣는다)
fruits.push('🍓', '🍑');
console.log(fruits);

// pop: remove an item from the end
fruits.pop();
fruits.pop();
console.log(fruits);

// 앞에서 추가
// unshift: add an item to the beginning
fruits.unshift('🍓', '🍋');
console.log(fruits);

// shift: remove an item from the benigging
fruits.shift();
fruits.shift();
console.log(fruits);

// note!! shift, unshift are slower than pop, push
// pop & push >>> shift & unshift
// 빈 공간에 데이터 수정하기 때문에 빠르다 : fast
// 기존 데이터를 옮기고 채워서 새 데이터를 넣는다 : slow
// 배열이 길면 길수록 shift & unshift 보다 pop & push

// big-O 등 정렬...

// splice: remove an item by index position
fruits.push('🍓', '🍑', '🍋');
console.log(fruits);
fruits.splice(1, 1);    // 지정한 숫자부터 다 지우니까, 몇개 지울 것인지 지정
console.log(fruits);
// splice 후 원하는 데이터 추가 가능
fruits.splice(1,1,'🍏', '🍉');
console.log(fruits);

// combine two arrays
const fruits2 = ['🍐', '🥥'];
const newFruits = fruits.concat(fruits2);
console.log(newFruits);

// 5. Searching
// 배열 안에 원하는 값이 몇번째 index에 있는지 확인하기
// indexOf: find the index
console.clear();
console.log(fruits);
console.log(fruits.indexOf('🍑'));


// includes
console.log(fruits.includes('🍉'));
console.log(fruits.includes('🥥'));


// lastIndexOf
console.clear();
fruits.push('🍎');
console.log(fruits);
console.log(fruits.indexOf('🍎'));      // 제일 먼저 나오는 값 출력
console.log(fruits.lastIndexOf('🍎'));  // 제일 나중 나오는 값 출력