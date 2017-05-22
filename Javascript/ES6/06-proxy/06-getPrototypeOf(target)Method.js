// ================================
// getPrototypeOf (target) 메소드
// ================================
// Object.getPrototypeOf() 메소드나
// __proto__프로퍼티로 내부 [[prototype]]프로퍼티 값을 조회할 때 실행한다.
// 타깃 객체를 인자로 받는다.
//
// 이 메소드는 null 또는 객체를 반환한다. null값은 타깃 객체가
// 아무것도 상속하지 않은, 상속 체인의 끝부분에 있는 객체임을 뜻한다.
//

var proxy = new Proxy(
  {age: 12, __proto__: {name: "강아지"}},
  {
    getPrototypeOf: function(target){
      return Object.getPrototypeOf(target);
    }
  });

console.log(Reflect.getPrototypeOf(proxy).name); // 강아지

// getPrototypeOf 트랩 사용 규칙은 다음과 같다.
// * 반환값은 반드시 객체, null 중 하나다.
// * 타깃 객체가 확장 불가하면 실제 프로토 타입을 반환한다.
