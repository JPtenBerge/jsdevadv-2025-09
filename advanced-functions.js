

test();
test(14, 28);
test(4, 8, 15, 16, 23, 42);



// 5 manieren om een variabele te maken

// console.log('i voor for:', i);
// for (let i = 0; i < 5; i++) {
//     console.log('i:', i);
// }
// console.log('i buiten for:', i);

// window // in de browser
// global     // op de server Node.js Deno Bun

// globalThis

console.log(window === globalThis);

window.muhaha = 'auw';
console.log(muhaha);


function hoi() {
    bla = 'wow!';
}
hoi();

console.log(bla);


function test() {
    console.log('hallo vanaf test');
}
function test(p1, p2, ...rest) {
    console.log('hallo vanaf test met params', p1, p2, rest);

    // console.log(arguments);
}

window.test(4, 'qwertgyh');


// hoisting