
// ================================
// set 메소드
// ================================
// set(target, property, value, receiver)
//
// set 트랩은 할당 연산자, 또는 Reflect.set() 메소드로
// 프로퍼티 값을 지정할 때 실행된다.
// 타겟 객체, 프로퍼티명, 새 프로퍼티명, 수신자를 인자로 받음

var proxy = new Proxy({}, {
  set: function(target, property, value, receiver){
    target[property] = value;
    return true;
  }
});

Reflect.set(proxy, "name", "수지");
console.log(proxy.name);
