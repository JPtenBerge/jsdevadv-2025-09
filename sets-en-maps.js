

let setje = new Set();
setje.add(5);
setje.add(5);
setje.add('5');
setje.add('5');
setje.add('5');
setje.add('5');
setje.add('5');
setje.add(5);
console.log(setje.size)
console.log(setje);

let mapje = new Map();
mapje.set('hoi', 'doei');
mapje.set('uuhh', 'wat');
mapje.set('hoi', 42);
mapje.set({}, 42);
mapje.set([], 42);
console.log(mapje);
console.log(mapje.size);
console.log(...mapje.values());

let obj = { hoi: 'doei', uuhh: 'wat' };
console.log(Object.keys(obj).length)
// map vs native obj?
// - size vs Object.keys(obj).length
// - optimalisatie/performance
// - iterable by default
// - gemak?
// - 

// WeakSet WeakMap

// FinalizationRegistry