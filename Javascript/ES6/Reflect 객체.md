# Reflect 객체

-  객체 reflection에 관한 모든 method가 있다.

   ​

# Reflect는

*  함수 객체가 아니므로 호출할 수 없음
*  new 연산자를 붙여 사용할 수 없다.



# Reflect 객체 : method

-  상당수 기능 면에서 전역 Object 객체의 method와 중복된다.



## Reflect.apply(function, this, args)

-  주어진 this 값으로 target 함수를 호출하는 메소드
-  Function.prototype.apply() 메소드와 같다.
-  target 함수의 반환값을 그대로 반환



### parameter - (function, this, args)

1. function - target 함수


2. this - target function 내부의 this 값

3. args - target 함수의 인자를 지정한 배열 객체

   ​





