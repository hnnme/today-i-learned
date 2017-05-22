
// ================================
// has (target, property) 메소드
// ================================
// has 트랩은 in 연산자로 특정 프로퍼티가 있는지
// 확인할 때 실행된다. 타깃 객체, 프로퍼티명을 인자로 받아
// 존재 여부를 불리언 값으로 반환한다.

var proxy = new Proxy(
  {age: 12}, {
    has: function(target, property){
      if(property in target){
        return true;
      } else {
        return false;
      }
    }
  });

  console.log(Reflect.has(proxy, "name")); // false
  console.log(Reflect.has(proxy, "age")); // true
