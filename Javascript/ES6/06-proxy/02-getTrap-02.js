
// ================================
// get 트랩
// ================================

var proxy = new Proxy(
  {age: 13},
  {
    get: function(target, property, receiver){

      console.log('receiver:',receiver);

      if(property in target){
        console.log('-receiver:', receiver);

        return target[property];

      }else{

        return "찾지 못함";
      }
    }
  }
);

var temp = proxy.name;

var obj = {
  age: 12,
  __proto__: proxy
}

temp = obj.name;

// {age: 13}
// {age: 12}
