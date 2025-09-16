
// waarom TypeScript:
// - encapsulatie met private/protected keyword
// - types voor betere ondersteuning
// - deftig  voorspelbaar - JS is nogal dynamisch
//   - de dynamiek wat in te perken
// - refactorbaarheid


// params zonder types
function bla(x: string, y) {
    
}

let ding = {
    muhahah: 24,
    y: 'hoi'
};
delete ding.y;
console.log(ding);

let prop = 'x';
console.log(ding.muhahah);
console.log(ding['muhahah']);
console.log(ding[prop]);



// ding.