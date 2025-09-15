

// symbol is primitief datatype - bedoeld om iets uniek te adresseren
// - GUID


let sym = Symbol.for('sym1'); // globale browser symbol registry  get or create: create
let sym2 = Symbol.for('sym1'); // get or create: get
console.log(sym);
console.log(sym2);
console.log(sym === sym2);

let suffix = 'name';
let obj = {
    x: 'hoi',
    y: 24,
    ['first' + suffix]: 'JP',
    ['sur' + suffix]: 'tB',
    [sym]: 'my sym value'

};
console.log(obj);
console.log(obj.surname);
console.log(obj[sym]);

// voorgedefinieerde symbols:
// Symbol.toPrimitive