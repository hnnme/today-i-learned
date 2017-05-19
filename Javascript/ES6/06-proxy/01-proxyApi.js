
// Proxy API
// 프록시는 Proxy 생성자로 생성하며, 2개의 인자를 받는다.
// -------------------------------------
// target : 프록시로 감쌀 객체
// 처리기  : target 객체에 쓸 트랩이 있는 객체
// -------------------------------------
// 트랩은 타깃 객체에 가능한 어떤 작업이라도 정의할 수 있으며,
// 정의하지 않을 경우 기본 동작을 수행한다.
//
// 프록시 생성과 타깃 객체에 여러 가지 작업을 어떻게 수행하는지 살펴보자.
//
// Example - 아직 트랩을 사용하지 않은 예제

var target  = { age: 12 };
var handler = {};
var proxy   = new Proxy(target, handler);

proxy.name = "수지";

console.log(target.name); // 수지
console.log(proxy.name); // 수지
console.log(target.age); // 12
console.log(proxy.age); // 12



var proxy = new Proxy({
  age: 12
}, {});

proxy.name = "수지";
