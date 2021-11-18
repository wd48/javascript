// 1. Use Strict
// add in ES 5
// use this for Valina JS
'use strict';

// 2. Variable
// let (added in ES6) - mutable type
let globalNm = 'global name';
{
    let name = 'kastrio';
    console.log(name);
    name = 'hello';
    console.log(name);
}
console.log(name);
console.log(globalNm);

// var (don't ever use this)
// hoisting (move declaration from bottom to top)
// has no block scope
age = 4;
var age;
console.log(age);

// const : Mutable data type
// favor immutable data type always for a few reasons:
// - security
// - thread safety : multi thread environment
// - reduce human mistakes
// 값 선언과 동시에 다시 값을 변경할 수 없음
const daysInWeek = 7;
const maxNum = 5;

// 4. Variable types
// primitive, single item: number, string, boolean, null, undefined, symbol
// object, box container
// function, 1st-class function -> 함수도 다른 데이터타입처럼 변수 할당 가능, 파라미터, 리턴 타입으로 사용가능

const count = 15; // integer
const size = 123.4; // decimal number
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);

// number - speicla numeric values: infinify, -infinity, NaN(Not a Number)
const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = 'not a number' / 2;
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

// bigInt (fairly new, don't use it yet)
const bigInt = 1234567890123456789012345678901234567890n; // over (-2**53) ~ 2*53)
console.log(`value: ${bigInt}, type: ${typeof bigInt}`);

// string
const char = 'c';
const brendan = 'brendan';
const greeting = 'hello ' + brendan;
console.log(`value: ${greeting}, type: ${typeof greeting}`);
const helloBob = `hi ${brendan}!`; //template literals (string)
// `` (grave) : 문자열이 다 나온다
console.log(`value: ${helloBob}, type: ${typeof helloBob}`);
console.log('value: ' + helloBob + ' type: ' + typeof helloBob);

// boolean
// false: 0, null, undefined, NaN, '' (비어있는 String)
// true: any other value
const canRead = true;
const test = 3 < 1; // false
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`);

// null
// 명확하게 지정해주는 값
let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`);

// undefined
// 선언은 됐지만 아무런 값이 들어가지 않았다
let x;
console.log(`value: ${x}, type: ${typeof x}`);

// symbol, create unique identifiers for objects
// 동일한 String 작성했어도 고유한 식별자를 만들 때 사용가능
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2);
const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id');
console.log(gSymbol1 === gSymbol2); // true
console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`);

// object, real-life object, data structure
const ellie = { name: 'ellie', age: 20 };
ellie.age = 21;

// 5. Dynamic typing: dynamically typed language
// 변수를 선언할 때 어떤 타입인지 선언하지 않고 동작할 때 할당된 값에 따라 타입이 변경될 수 있다는 것
let text = 'hello';
console.log(text.charAt(0)); //h
console.log(`value: ${text}, type: ${typeof text}`);
text = 1;
console.log(`value: ${text}, type: ${typeof text}`);
text = '7' + 5;
console.log(`value: ${text}, type: ${typeof text}`);
text = '8' / '2';
console.log(`value: ${text}, type: ${typeof text}`);
console.log(text.charAt(0)); // Uncaught TypeError
// 에러가 run-time으로 발생한다...

// TypeScript : JS 위에 type이 올려진 언어
