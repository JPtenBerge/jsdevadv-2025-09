// 'use strict'; // backwards compatibility  IE6

// this? MYSTERY OF THIS

// this wijst standaard naar de eigenaar van de functie
// - bij globale functies is dat dus het globale object (window/globalThis)
//   - behalve bij de stricte modus, dan wijst hij naar undefined
// - je kan hem instellen!
// - nested
// - () => {} is een stuk voorspelbaar qua this. blijft wijzen waar hij al naar wees.

function Customer(name) {
  // constructor function
  console.log("this:", this);

  this.name = name;

  this.buy = () => {
    console.log("this in buy:", this);
    console.log(`Ik, ${this.name}, ga kopen kopen kopen`);

    // nested();

    // function nested() {
    //   console.log("nested this:", this);
    // }
  };
}
let cust = new Customer("Sebas");
// cust.name = 'iets anders';
cust.buy();

let qwerty = cust.buy;
qwerty();
qwerty.call({ name: "Bart" }, 4, 8, 15);
// qwerty.apply({ name: "Bartqqqqqqqqqq" }, [4, 8, 15]);

// let gebindeFunc = qwerty.bind({ name: "Sebasssssssss" });
// gebindeFunc();
// gebindeFunc();
// gebindeFunc();
// gebindeFunc();


// arrow function vs function?
// - AF gaat voorspelbaar met this om
// - kan this niet instellen bij AF
// - AF is nieuwer (2015)
// - AF heeft geen arguments
// - geen new met AF
// - gebruik gerust zoveel mogelijk AF

let func = () => {};
new func();