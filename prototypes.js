// prototypes?
// - overerving
// - extension methods

function Mammal() {
  this.name = "Frank";
  this.speak = function () {
    console.log("wwwwwwwwwooooooooahh", this.name);
  };
}

function Human(name) {
  //   this.name = name;
  //   this.speak = function () {
  //     console.log("Hoi ik ben " + name);
  //   };
}
Human.prototype = new Mammal();
// Human.prototype = new Insect();

let sebas = new Human("Sebas");
sebas.speak();

// Object.setPrototypeOf(sebas, new Insect());

// class B {}

function B() {

}

class A extends B {
    hoi() {
        super.hoi();
    }
}

console.log(new A());

////////

