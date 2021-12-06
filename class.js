'use strict;'
// Object-oriendted programming
// class: template
// object: instance of a class
// JavaScript classes
//  - introduced in ES6
//  - syntactical sugar(문법상, 편리함을 제공하는) over prototype-based inheritance

// 바로 object를 만들었다 :: function

console.log("================== 1. Class declarations ==================");
// 1. Class declarations
class Person {
    // constructor
    constructor(name, age) {
        // fields
        this.name = name;
        this.age = age;
    }

    // methods
    speak() {
        console.log(`${this.name}: hello!`);
    }
}

const xydragon = new Person('kastrio', 32);
console.log(xydragon.name);
console.log(xydragon.age);
xydragon.speak();

console.log("================== 2. Getter and setters ==================");
// 2. Getter and setters
class User {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    get age() {
        // return this.age; // error :: this.age는 getter를 호출
        return this._age;
    }
    // setter : 개발자가 원하는 기본값을 설정해준다
    // 개발자만 접근가능하게 하는 것 (private) : 방어적으로 만든다
    set age(value) {
        // if (value < 0) {
        //   throw Error('age can not be negative');
        // }
        // this.age = value < 0 ? 0 : value; // error :: setter 정의하면 값을 할당할 때 setter에서 호출해온다
        // update가 아니라 setter를 call한다
        // this._age = value;
        this._age = value < 0 ? 0 : value;
    }
}

const user1 = new User('steve', 'Job', -1);
console.log(user1.age); // getter setter 이용하기 때문에 age, name을 콜할수 있음

console.log("================== 3. Fields (public, private) ==================");

// 3. Fields (public, private)
// Too soon! : 최신 기술
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Class_fields
class Experiment {
    publicField = 2; //
    // #privateField = 0; // 클래스 내부에서만 보여지고 값 변경 가능, 클래스 외부에서는 다 차단
}
const experiment = new Experiment();
console.log(experiment.publicField);
// console.log(experiment.privateField);


console.log("================== 4. Static properties and methods ==================");
// 4. Static properties and methods
// Too soon!
// object에 상관없이 class에서 호출 가능하다
class Article {
    static publisher = 'Dream Coding';
    constructor(articleNumber) {
        this.articleNumber = articleNumber;
    }

    static printPublisher() {
        console.log(Article.publisher);
    }
}

const article1 = new Article(1);
const article2 = new Article(2);
console.log(article1.publisher);
console.log(Article.publisher); // class에 박혀있기 때문에 class를 불러내야 함
Article.printPublisher();

console.log("================== 상속과 다형성 ==================");
// 공통점을 찾아서 한번에 정의하고 재사용하면 간편하다
// 재사용이 쉽다 : 유지보수 좋음
// 5. Inheritance
// a way for one class to extend another class.
class Shape {
    constructor(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }

    draw() {
        console.log(`drawing ${this.color} color!`);
    }

    getArea() {
        return this.width * this.height;
    }
}

class Rectangle extends Shape{}
class Triangle extends Shape{
    draw() {
        // super : 부모의 메소드 호출
        // this : 자식 메소드 호출
        super.draw();
        console.log('🔺');
    }

    getArea(){
        return (this.width * this.height) / 2;
    }

    toString(){
        return `Triangle: color: ${this.color}`;
    }


}

const rectangle = new Rectangle(20, 20, 'blue');
rectangle.draw();
console.log(rectangle.getArea());
const triangle = new Triangle(20, 20, 'red');
triangle.draw();
console.log(triangle.getArea());



console.log("================== 6. Class checking: instanceOf ==================");

// 6. Class checking: instanceOf
console.log(rectangle instanceof Rectangle);    // true
console.log(triangle instanceof Rectangle);     // false
console.log(triangle instanceof Triangle);      // true
console.log(triangle instanceof Shape);         // true
console.log(triangle instanceof Object);        // true
console.log(triangle.toString());