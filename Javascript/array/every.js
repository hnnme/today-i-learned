/*
-------------
    every()
    불린 함수를 배열에 적용해 배열의 모든 요소가 참이면 true를 반환
-------------
 */

function isEven(num){
    return num%2 == 0;
}

// 모두 짝수일때
// var nums = [2,4,6,8,10];
// 홀수가 하나라도 있을때
var nums = [2,4,6,7,8,10];

var even = nums.every(isEven);
if(even){
    console.log('all numbers are even');
} else {
    console.log('not all numbers are even');
}

// var nums = [2,4,6,8,10];일때
// all numbers are even

//var nums = [2,4,6,7,8,10];일때
//not all numbers are even