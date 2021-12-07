'use strict';
// Objects
// one of the JavaScript's data types.
// a collection of related data and/or functionality.
// Nearly all objects in JavaScript are instances of Object
// object = { key : value };

console.log("======== 1. Literals and properties ========");
// 1. Literals and properties
const obj1 = {}; // 'object literal' syntax
const obj2 = new Object(); // 'object constructor' syntax


function print(person) {
    console.log(person.name);
    console.log(person.age);
}

// 클래스 없어도 object 생성 가능
const kastrio = {
    name: 'kastrio',
    age: 4
};
print(kastrio);

// dynamic clip type language
// 동적으로 정할 수 있음
// ~유지보수 어려움, 생각치 못한 오류 발생
kastrio.hasJob = true;
console.log(kastrio.hasJob);

// 삭제 가능
delete kastrio.hasJob;
console.log(kastrio.hasJob); //undefined

console.log("======== 2. Computed properties ========");
// 2. Computed properties
// key(=property) should be always string

// 1) . (dot) :: 코딩하는 순간, 키에 해당하는 값을 가져올 떄
console.log(kastrio.name);
// 2) computed property :: 정확하게 어떤 키가 필요한 지 모를 때 (runtime에서 정해질 때)
console.log(kastrio['name']);

kastrio['hasJob'] = true;
console.log(kastrio.hasJob); // true

function printValue(obj, key) {
    // console.log(obj.key);
    console.log(obj[key]);
}
printValue(kastrio, 'name'); // console.log(obj.key); undefined
printValue(kastrio, 'age');


console.log("======== 3. Property value shorthand ========");

// 3. Property value shorthand
const person1 = {
    name: 'bob',
    age: 2
};
const person2 = {
    name: 'steve',
    age: 3
};
const person3 = {
    name: 'dave',
    age: 4
};
const person4 = new Person('elile', 30);

console.log("======== 4. Constructor Function ========");
// 4. Constructor Function
// class :: template!
function Person(name, age) {
    // this = {};
    this.name = name;
    this.age = age;
    // return this;
}

console.log(person4);


// 5. in operator: property existence check (key in obj)
console.log("======== 5. in operator: property existence check (key in obj) ========");

console.log('name' in kastrio);
console.log('age' in kastrio);
console.log('random' in kastrio);
console.log(kastrio.random);


console.log("======== 6. for..in vs for..of ========");
// 6. for..in vs for..of
// for (key in obj)

console.clear();    // 이전 로그 지우기
for (let key in kastrio) {
  console.log(key);
}

// for (value of iterable) :: 배열, 리스트 등 순차적인 것을 사용
const array = [1,2,4,5];
for(let i = 0; i < array.length; i++){
    console.log(array[i]);
}

for (let val of array){
    console.log(val);
}


console.log("======== 7. Fun cloning ========");
// 7. Fun cloning
// Object.assign(dest, [obj1, obj2, obj3...])
const user = { name: 'ellie', age: '20' };
const user2 = user;
user2.name = 'coder';
console.log(user);

// old way
const user3 = {};
for (let k in user){
    user3[k] = user[k];
}
console.clear();
console.log(user3);

// Object :: 기본 탑재된 기본 Object, 다 상속하는 최상위 부모
// const user4 = {};
// Object.assign(user4, user);

const user4 = Object.assign({}, user);;
console.log(user4);

// another example
const fruit1 = { color: 'red', size: 'small' };
const fruit2 = { color: 'blue', size: 'big' };
const mixed = Object.assign({}, fruit1, fruit2);    // blue, big
// assign :: 값을 계속 덮어쓴다 (over-write)
console.log(mixed);
console.log(mixed.color);
console.log(mixed.size);