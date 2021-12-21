

// 함수 선언
function doSomething(add){
    console.log(add);
    const result = add(2,5);
    console.log(result);
}

function add(a,b) {
    const sum = a+b;
    return sum;
}

// 함수 호출
doSomething(add);
// doSomething(add()); : NaN
