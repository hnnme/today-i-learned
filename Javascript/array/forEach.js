
/*
-------------
    forEach()
    배열의 모든 요소에 인자로 받은 함수를 호출
-------------
 */
function square(num){
    console.log(num, num*num);
}

var nums = [1,2,3,4,5,6,7,8,9,10];
nums.forEach(square);

// 1 1
// 2 4
// 3 9
// 4 16
// 5 25
// 6 36
// 7 49
// 8 64
// 9 81
// 10 100



