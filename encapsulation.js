'use strict';

// obj how to do encapsulation in JS?
// 1. getter/setter
// 2. private met #
// 3. conventie
// 4. configuratie
// 5. closures
// 6. Proxy

// honorable mentions:
// - const func = () => {};
// - <script src="..." type="module"></script>

class Human {
  _birthYear;
//   private birthYear;
  constructor(birthYear) {
    this._birthYear = birthYear;
  }

  get age() {
    return new Date().getFullYear() - this._birthYear;
  }
}
let bart = new Human(2003);
console.log(structuredClone(bart));
console.log(bart);
console.log(bart._birthYear);

// Reflect.preventExtensions(bart);
// Object.seal();
// Object.defineProperty(bart, 'hallo', {
// })

Object.freeze(bart);

// bart._birthYear3 = 1994;
bart._birthYear = 1994;
console.log(bart);


console.log(bart.age);
// console.log(bart.#birthYear);


