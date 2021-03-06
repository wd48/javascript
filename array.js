'use strict';
// ์๋ฃ๊ตฌ์กฐ

// Array๐

// 1. Declaration
const arr1 = new Array();
const arr2 = [1,2];

// 2. Index position
// ์ธ๋ฑ์ค๋ฅผ ํตํ ๋ฐฐ์ด ์ ๊ทผ ๋ฐฉ๋ฒ

const fruits = ['๐', '๐'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits['key']); // key์ ์์ํ๋ value๋ฅผ ๊ฐ์ ธ์จ๋ค
console.log(fruits[0]);     // ๋ฐฐ์ด์ 1๋ฒ์งธ ๊ฐ
console.log(fruits[1]);
console.log(fruits[2]);     // undefined
console.log(fruits[fruits.length - 1]);     // ๋ฐฐ์ด์ ๋ง์ง๋ง ๊ฐ


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
// forEach : ์ฝ๋ฐฑ ํจ์๋ฅผ ๋ฐ์์จ๋ค
// array ์ ๋ค์ด์๋ ๊ฐ๋ง๋ค ์ ๋ฌํ callback ํจ์๋ฅผ ์ํํ๋ค
// 1. callbackfn : ๊ฐ ํ๋ํ๋ ๋ง๋ค ํธ์ถํด์ค๋ค
// value: T - ๊ฐ, index - ์ธ๋ฑ์ค, array - ๋ฐฐ์ด ์ ์ฒด
// 2. thisArg? (์ ํ์ฌํญ) : 
fruits.forEach((fruit) => console.log(fruit));

fruits.forEach((fruit, i, array) => console.log(fruit, i, array));
// ๋ฐฐ์ด ์์ ๋ค์ด์๋ value ๋ง๋ค ๋ด๊ฐ ์ ๋ฌํ ํจ์๋ฅผ ์ถ๋ ฅํ๋ ๊ตฌ๋

// 4. Addition, Delete, copy
// push: add an item to the end (๋์์๋ถํฐ ๋ฃ๋๋ค)
fruits.push('๐', '๐');
console.log(fruits);

// pop: remove an item from the end
fruits.pop();
fruits.pop();
console.log(fruits);

// ์์์ ์ถ๊ฐ
// unshift: add an item to the beginning
fruits.unshift('๐', '๐');
console.log(fruits);

// shift: remove an item from the benigging
fruits.shift();
fruits.shift();
console.log(fruits);

// note!! shift, unshift are slower than pop, push
// pop & push >>> shift & unshift
// ๋น ๊ณต๊ฐ์ ๋ฐ์ดํฐ ์์ ํ๊ธฐ ๋๋ฌธ์ ๋น ๋ฅด๋ค : fast
// ๊ธฐ์กด ๋ฐ์ดํฐ๋ฅผ ์ฎ๊ธฐ๊ณ  ์ฑ์์ ์ ๋ฐ์ดํฐ๋ฅผ ๋ฃ๋๋ค : slow
// ๋ฐฐ์ด์ด ๊ธธ๋ฉด ๊ธธ์๋ก shift & unshift ๋ณด๋ค pop & push

// big-O ๋ฑ ์ ๋ ฌ...

// splice: remove an item by index position
fruits.push('๐', '๐', '๐');
console.log(fruits);
fruits.splice(1, 1);    // ์ง์ ํ ์ซ์๋ถํฐ ๋ค ์ง์ฐ๋๊น, ๋ช๊ฐ ์ง์ธ ๊ฒ์ธ์ง ์ง์ 
console.log(fruits);
// splice ํ ์ํ๋ ๋ฐ์ดํฐ ์ถ๊ฐ ๊ฐ๋ฅ
fruits.splice(1,1,'๐', '๐');
console.log(fruits);

// combine two arrays
const fruits2 = ['๐', '๐ฅฅ'];
const newFruits = fruits.concat(fruits2);
console.log(newFruits);

// 5. Searching
// ๋ฐฐ์ด ์์ ์ํ๋ ๊ฐ์ด ๋ช๋ฒ์งธ index์ ์๋์ง ํ์ธํ๊ธฐ
// indexOf: find the index
console.clear();
console.log(fruits);
console.log(fruits.indexOf('๐'));


// includes
console.log(fruits.includes('๐'));
console.log(fruits.includes('๐ฅฅ'));


// lastIndexOf
console.clear();
fruits.push('๐');
console.log(fruits);
console.log(fruits.indexOf('๐'));      // ์ ์ผ ๋จผ์  ๋์ค๋ ๊ฐ ์ถ๋ ฅ
console.log(fruits.lastIndexOf('๐'));  // ์ ์ผ ๋์ค ๋์ค๋ ๊ฐ ์ถ๋ ฅ