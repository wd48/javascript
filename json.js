'use strict';

// JSON
// JavaScript Object Notation
// Callback 함수

// 1. Object to JSON
// stringify : string으로 만들기
let json = JSON.stringify(true);
console.log(json);

json = JSON.stringify(['apple', 'banana']);
console.log(json);

// JSON 으로 변경시키려는 Object
const rabbit = {
    name: 'tori',
    color: 'white',
    size: null,
    birthDate: new Date(),
    jump: function () {
        console.log(`${this.name} can jump!`);
    },
};

json = JSON.stringify(rabbit);
console.log(json);

// replacer : string , array
// 반환을 원하는 property만 골라서 정의한다
json = JSON.stringify(rabbit, ["name", "color", "size"]);
console.log(json);

// key-value
json = JSON.stringify(rabbit, (k, v) => {
    console.log(`key: ${k}, value: ${v}`);
    // return v;
    return k === 'name' ? 'kastrio' : v;
});
console.log(json);

// 2. JSON to Object
// parse : object로 변환할 수 있다

console.clear();
json = JSON.stringify(rabbit);
const obj = JSON.parse(json, (k,v) => {
    console.log(`key: ${k}, value: ${v}`);
    return k === 'birthDate' ? new Date(v) : v;
});
console.log(obj);

// 
rabbit.jump();
// 변환한 object(string화 되어진)인 곳에는 JSON 만들 때 함수가 포함되지 않아서,
// JSON 을 다시 object로 변환해도 나올리가 없다
// obj.jump();

console.log("Object 원형 :: ",rabbit.birthDate.getDate());
console.log("JSON을 다시 Object으로 변환함 :: ",obj.birthDate.getDate()); // string 임

/**
 * rabbit : Object 자체.
 * 
 */