
// ================================
// isExtensible(target) method
// ================================
// isExtensible 트랩은 Object.isExtensible()메소드로
// 특정 프로퍼티의 확장 가능 여부를 확인할 때 실행된다.
// 타깃 객체를 인자로 받아 확장 가능 여부를 불리언 값으로 반환한다.

var proxy = new Proxy(
  {age: 12},
  {
    isExtensible: function(target){
      return Object.isExtensible(target);
    }
  });

  console.log(Reflect.isExtensible(proxy)); // true

  
