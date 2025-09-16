// how to clone an object?

// 1. ...

let obj = {x: 24n };
let clone = { ...obj }; // shallow copy newObj.prop = oldObj.prop


let clone2 = structuredClone(obj); // deep copy

// let clone3 = JSON.parse(JSON.stringify(obj)); // deep copy, maar wel beperkt qua datatypen
console.log(clone2);