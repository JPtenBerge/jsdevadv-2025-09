// closure: functie die een stukje interne state bijhoudt

function counter() {
  let tellertje = 0;

  return function () {
    return ++tellertje;
  };
}

let myFirstCounter = counter();
console.log(myFirstCounter());
console.log(myFirstCounter());
console.log(myFirstCounter());

console.log(counter.tellertje);

function objCounter() {
  let tellertje = 0;

  return {
    increment() {
      return ++tellertje;
    },
    decrement() {
      return --tellertje;
    },
  };
}
let mySecondCounter = objCounter();
console.log(mySecondCounter.increment());
console.log(mySecondCounter.increment());
console.log(mySecondCounter.decrement());
console.log(mySecondCounter.decrement());
console.log(mySecondCounter.increment());

// React geen classes meer
// Vue ook geen classes meer
// Angular
// - route guard: function
// - HTTP interceptor: function

class Ding {}


var self = this;
var local = this;
var _this = this;
let _thisss = this;


