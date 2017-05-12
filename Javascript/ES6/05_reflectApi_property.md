# 데이터 프로퍼티와 접근자 프로퍼티

Es5부터 모든 객체의 프로퍼티는

## 1. data property

*  쓰기 가능 또는 불가 상태의 값을 가진다.

*  속성

   *  value, writable, enumerable, configurable

      ​

## 2. accessor property

*  프로퍼티 값을 조회/지정하는 함수의 getter - setter쌍을 가진다.
*  속성
   *  set, get, enumerable, configurable



### descriptor | 서술자

-  property의 속성을 서술하는 객체
-  아래의 메소드로 프로퍼티를 생성할때 해당 프로퍼티의 서술자를 전달
   -  Reflect.defineProperty()
   -  Object.defineProperty()
   -  Object.defineProperties()
   -  Object.create()













