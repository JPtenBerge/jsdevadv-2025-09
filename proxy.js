let target = {
    x: 24,
    y: 'hoi'
};
let proxy = new Proxy(target, {
    get(target, prop) { 
        console.log('get op', prop);
        return target[prop];
    },
    set(target, prop, value) {
        target[prop] = value;    
    },
});

console.log(proxy.x);
proxy.x = 569;
console.log(proxy.x);

// use cases?
// - unit testing - mocken GEEN jasmine Vitest Jest Mocha
// - Vue - change detection
//     data verandert => HTML opnieuw renderen
// Angular - complex algoritme. hij merkt op wanneer een event optreedt (click, keydown), na jouw functie gaat hij ervanuit dat iets van data verandert is.
// Svelte 4 - assignment detection.  bla = 42; products = products
// Vue - Proxy
// React - setState()

// Reflect.

