//
// ================================
// preventExtensions(target) 메소드
// ================================
// Objext.preventExtensions()로 프로퍼티를
// 추가하지 못하게 차단할 때 실행된다. 인자를 target 객체 하나다.
// 확장 방지 성공 여부를 true/false로 반환한다.
//

var proxy = new Proxy({},
  {
    preventExtensions: function(target){
      Object.preventExtensions(target);
      return true;
    }
  });

  Reflect.preventExtensions(proxy);
  proxy.a = 12;
  console.log(proxy.a);
