//
// ================================
// setPrototypeOf (target) 메소드
// ================================
// setPrototypeOf 트랩은
// Object.setPrototypeOf() 메소드나
// __proto__프로퍼티로 내부 [[prototype]]프로퍼티 값을
// 지정할 때 지정할 때 실행된다. 타깃 객체, 할당 할 프로퍼티 값을 인자로 받는다.
// 지정 성공 여부를 true/false로 반환한다.
//
// [[ 규칙 ]]
// setPrototypeOf 트랩 사용 규칙은 다음과 같다.
// * 타깃 객체가 확장 불가하면 false를 반환한다.
//

var proxy = new Proxy({},
{
  setPrototypeOf: function(target, value){
    Reflect.setPrototypeOf(target, value);
    return true;
  }
});

Reflect.setPrototypeOf(proxy, {name: '강아지'});

console.log(Reflect.getPrototypeOf(proxy).name); // 강아지
