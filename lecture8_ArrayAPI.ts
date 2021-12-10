interface Array<T> {
    /**
     * Returns the value of the first element in the array where predicate is true, and undefined
     * otherwise.
     * :: 조건자 (predicate)가 참(true)인 경우 배열의 첫번째 요소를 반환
     * :: 그렇지 않으면 undefined 반환
     * 
     * @param predicate find calls predicate once for each element of the array, in ascending
     * order, until it finds one where predicate returns true. If such an element is found, find
     * immediately returns that element value. Otherwise, find returns undefined.
     * : find = predicate가 true 반환하는 항목을 찾을때까지 배열의 각 요소에 대해 
     * : 조건자를 오름차순(ASC)으로 한번 씩 호출한다
     * :: true를 반환하는 요소가 발견되면 find는 즉시 해당 요소값을 반환한다.
     * :: 그렇지 않으면 undefined 반환
     * 
     * @param thisArg If provided, it will be used as the this value for each invocation of
     * predicate. If it is not provided, undefined is used instead.
     * 
     * 
     */
    find<S extends T>(predicate: (this: void, value: T, index: number, obj: T[]) => value is S, thisArg?: any): S | undefined;
    find(predicate: (value: T, index: number, obj: T[]) => unknown, thisArg?: any): T | undefined;
}

/**
 * Array API :: lecture 8 homework
 */
interface Array<T>{
    /**
     * Gets or sets the length of the array : 배열의 길이를 가져오거나 설정한다.
     * This is a number one higher than the highest index in the array : 배열의 길이는 max(인덱스)+1
     */
    length: number;

    /**
     * Returns a string representation of an array.
     * 배열의 문자열 표현을 반환
     */
    toString(): string;

    /**
     * Returns a string representation of an array.
     * The elements are converted to string using their toLocaleString methods.
     * 요소(element)는 toLocaleString 메소드를 사용하여 문자열로 변환
     */
    toLocaleString(): string;

    /**
     * Removes the last element from an array and returns it.
     * 배열로부터 마지막 요소를 제거하고 반환한다
     * If the array is empty, undefined is returnd and the array is not modified.
     * 배열이 비었으면 undefined 반환하고 배열은 수정되지 않는다.
     */
    pop(): T | undefined;

    /**
     * Appends new elements to the end of an array, and returns the new length of the array
     * 배열의 마지막에 새 요소를 추가시키고, 추가된 새로운 길이를 가지는 배열을 반환한다
     * @param items New elements to add to the array
     */
    push(...items: T[]): number;

    /**
     * Combines two or more arrays.
     * 다수의 배열을 합친다
     * This method returns a new array without modifying any existing arrays.
     * 이미 존재하는 어떤 배열도 수정하지 않고 새로운 배열을 반환한다
     * @param items Additional arrays and/or items to add to the end of the array.
     * 배열 끝에 추가할 아이템 or 추가 배열
     */
    concat(...items: ConcatArray<T>[]): T[];

    /**
    * Combines two or more arrays.
    * 다수의 배열을 합친다
    * This method returns a new array without modifying any existing arrays.
    * 이미 존재하는 어떤 배열도 수정하지 않고 새로운 배열을 반환한다
    * @param items Additional arrays and/or items to add to the end of the array.
    * 배열 끝에 추가할 아이템 or 추가 배열
    */
    concat(...items: (T | ConcatArray<T>)[]): T[];

    /**
     * Adds all the elements of an array into a string, separated by the specified separator string.
     * 배열의 모든 요소를 string으로 추가시키고, 특별한 구분자 (specified separator string)로 나뉘어진다
     * @param separator A string used to separate one element of the array from the next in the resulting string.
     * :: 결과 문자열에서 배열의 한 요소를 다음 요소와 분리하는 데 사용되는 문자열
     * If omitted, the array elements are separated with a comma.
     * :: 생략 시 쉼표로 구분된다.
     */
    join(separator?: string): string;

    /**
     * Reverses the elements in an array in place.
     * :: 배열 안에 있는 요소를 제자리에서 뒤집는다
     * This method mutates the array and returns a reference to the same array.
     * :: 이 메서드는 배열을 변경하고, 같은 배열에 대한 참조를 반환한다
     */
    reverse(): T[];

    /**
     * Removes the first element from an array and returns it.
     * :: 배열 첫번쨰 요소를 제거하고 반환함
     * If the array is empty, undefined is returned and the array is not modified.
     * :: 배열이 비었으면 undefined 반환, 배열 수정되지 않음
     */
     shift(): T | undefined;    

    /**
     * Returns a copy of a section of an array.
     * : 배열 섹션의 복사본을 반환
     * For both start and end, a negative index can be used to indicate an offset from the end of the array.
     * : 시작과 끝에 음수 인덱스(negative index)를 사용, 배열 끝에서 오프셋(갈라짐?)을 나타 낼 수 있다
     * For example, -2 refers to the second to last element of the array.
     * : -2 는 마지막에서 두번째 요소를 의미함
     * 
     * @param start The beginning index of the specified portion of the array.
     * If start is undefined, then the slice begins at index 0.
     * :: 배열에서 지정된 부분의 시작 인덱스 값, 없으면 0으로 시작
     * 
     * @param end The end index of the specified portion of the array. This is exclusive of the element at the index 'end'.
     * If end is undefined, then the slice extends to the end of the array.
     * : 배열에서 지정된 부분의 끝 인덱스 값, 이것은 인덱스 끝에 있는 요소를 제외한다
     * :: end가 정의되지 않으면 slice 메소드는 배열의 끝까지 범위로 잡아 확장한다
     */
     slice(start?: number, end?: number): T[];

    /**
     * Sorts an array in place.
     * : 배열을 제자리에 정렬함
     * This method mutates the array and returns a reference to the same array.
     * : 배열을 변형하고 동일 배열에 대한 참조를 잔환함
     * 
     * @param compareFn Function used to determine the order of the elements. It is expected to return
     * a negative value if first argument is less than second argument, zero if they're equal and a positive
     * value otherwise. If omitted, the elements are sorted in ascending, ASCII character order.
     * :: 요소의 순서 정하는 데 쓰이는 함수
     * :: 1번 인수가 2번 인수보다 작으면 음수(-) 반환, 같으면 0, 크면 양수(+) 반환
     * :: 생략 시 요소는 오름차순, ASCII 문자 순서로 정렬
     * 
     * ```ts
     * [11,2,22,1].sort((a, b) => a - b)
     * ```
     */
    sort(compareFn?: (a: T, b: T) => number): this;

}

/**
     * Split a string into substrings using the specified separator and return them as an array.
     * @param splitter An object that can split a string.
     * @param limit A value used to limit the number of elements returned in the array.
     */
 split(splitter: { [Symbol.split](string: string, limit?: number): string[]; }, limit?: number): string[];