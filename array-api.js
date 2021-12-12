// Q1. make a string out of an array

/**
 * join()
 * 배열의 모든 요소를 string으로 추가시키고, 
 * 특별한 구분자 (specified separator string)로 나뉘어진다.
 */
{
  const fruits = ['apple', 'banana', 'orange'];
  const result = fruits.join('|');
  console.log(result);
}

// Q2. make an array out of a string

/**
 * split()
 * 지정된 구분 기호를 사용하여 문자열을 부분 문자열로 분할하고 배열로 반환한다.
 */
{
  const fruits = '🍎, 🥝, 🍌, 🍒';
  const result = fruits.split(',');
  console.log(result);
}

// Q3. make this array look like this: [5, 4, 3, 2, 1]

/**
 * reverse()
 * 배열 안에 있는 요소를 제자리에서 뒤집는다.
 */
{
  const array = [1, 2, 3, 4, 5];
  const result = array.reverse();
  console.log(result);
}

// Q4. make new array without the first two elements

/**
 * slice()
 * 배열 섹션의 복사본을 반환
 * 시작과 끝에 음수 인덱스(negative index)를 사용, 배열 끝에서 오프셋(갈라짐?)을 나타 낼 수 있다
 */
{
  const array = [1, 2, 3, 4, 5];
  const result = array.slice(2,5);
  console.log(result);
}

class Student {
  constructor(name, age, enrolled, score) {
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
  }
}
const students = [
  new Student('A', 29, true, 45),
  new Student('B', 28, false, 80),
  new Student('C', 30, true, 90),
  new Student('D', 40, false, 66),
  new Student('E', 18, true, 88),
];

// Q5. find a student with the score 90

/**
 * find()
 * - 조건자 (predicate)가 참(true)인 경우 배열의 첫번째 요소를 반환
 * 그렇지 않으면 undefined 반환
 * - find = predicate가 true 반환하는 항목을 찾을때까지 배열의 각 요소에 대해 
 * 조건자를 오름차순(ASC)으로 한번 씩 호출한다
 */
{
    const result = students.find((student) => student.score === 90);
    console.log(result);
}

// Q6. make an array of enrolled students

/**
 * filter()
 * - 콜백 함수(callback function)에 지정된 조건을 충족하는 배열의 요소를 반환
 */
{
  console.clear();
  const result = students.filter((student) => student.enrolled);
  console.log(result);
}

// Q7. make an array containing only the students' scores
// result should be: [45, 80, 90, 66, 88]

/**
 * map()
 * - 배열 각 요소에 대해 정의된 콜백 함수를 호출, 결과가 포함된 배열 반환
 */
{
  console.clear();
  const result = students.map((student) => student.score);
  console.log(result);
}

// Q8. check if there is a student with the score lower than 50

/**
 * every() : boolean false 반환
 * some() : boolean true 반환
 */
{
  console.clear();
  const result = students.some((student) => student.score < 50);
  console.log(`50점 미만이 있다는 말은 ${result} 입니다.`);

  const result2 = !students.every((student) => student.score >= 50);
  console.log(`50점 미만이 있다는 말은 ${result2} 입니다.`);
}

// Q9. compute students' average score

/**
 * reduce()
 * 콜백과 시작값을 전달함
 * > 배열의 모든 요소들의 값을 누적할 때 쓰면 좋다
 * curr : 배열 하나씩 전달됨
 * prev : return 값이 prev로 순차적 전달됨
 */
{
  const result1 = students.reduce((prev, curr) => {
    console.log('------------------');
    console.log(prev);
    console.log(curr);
    return prev + curr.score;
  },0);
  console.log(`result1 결과 : ${result1}`);
  // initial value 

  const result = students.reduce((prev, curr) => prev + curr.score, 0);
  console.log(result / students.length);
  // 호출1 reduce(prev, curr) => prev + curr.score, 0
  // 1 prev = 0 + 45 (0번째 배열 요소의 score값 :: curr.score[0])
  // 2 prev = 45 + 80 (1번째 요소의 score :: curr.score[1])...
}

// Q10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
{
  // 1 학생들의 요소에서 점수를 배열로 만든다 : map - 새로운 배열로 return
  // 1-1. (50점 이상만 나온다) : filter
  // 2 join : 구분하여 원하는 출력형태를 갖춰서 return
  
  const result = students
    .map((student) => student.score)
    .join(', ');
  console.log(result);
}

// Bonus! do Q10 sorted in ascending order
// result should be: '45, 66, 80, 88, 90'
{
  const result = students
    .map((student) => student.score)
    .sort((a,b) => a-b)
    .join(',');
  console.log(result);
}