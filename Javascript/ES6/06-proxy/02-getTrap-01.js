
// ================================
// get 트랩
// ================================
// get(target, property, receiver)
// 점 또는 중괄호 기호를 사용해서 프로퍼티 값을 조회할 때 사용한다.
// 타겟 객체, 프로퍼티명, 프록시 3개의 인자를 받는다.

var proxy = new Proxy({
  age: 12
},{
  get: function(target, property, receiver){

    if(property in target){
      return target[property];

    }else{
      return "찾지 못함";
    }
  }
});

console.log(Reflect.get(proxy, "age"));  // 12
console.log(Reflect.get(proxy, "name")); // 찾지 못함
