// promises zijn eager/lazy/foutmelding?
// => EAGER
// => altijd 1 resultaat (data/error)

let prom = new Promise((resolve, reject) => {
  // async werk
  setTimeout(() => {
    console.log("timeout klaar!");
    reject('wow!');
    resolve(4);
    resolve(8);
    resolve(15);
    resolve(16);
    resolve(23);
    resolve(42);
    console.log('klaar');
    // reject("Ga weg");
  }, 2000);
});

// setTimeout(() => {
//     console.log('ik ga nu thennen');
//     prom
//         .then(result => result * 100)
//         .then(result => console.log('async werk klaar, result:', result))
//         .catch(err => console.log('Ohoh', err));
// }, 5000);

try {
  let result = await prom;
  console.log("awaited result:", result);
} catch (err) {
  console.log("oei!", err);
}

// let response = await fetch('api/car'); // await headers
// let cars = await response.json(); // await body

// JSON.parse()



// fetch('api/car').then(x => x.json()).then(cars => {

// });

// Observable - RxJS
// - lazy
// - controle over lifecycle
// - operators map() filter() skip() take() 
// - stream van resultaten

// signal - versimpelde observable
// - stream van resultaten


// let prom1 = new Promise((res, rej) => setTimeout(() => rej('eerste'), 700));
// let prom2 = new Promise(res => setTimeout(() => res('tweede'), 1500));
// let prom3 = new Promise(res => setTimeout(() => res('derde'), 400));

// // try {
//     let results = await Promise.allSettled([prom1,prom2,prom3]);
//     console.log('results:', results);

// }
// catch(err) {
    // console.log('ohoh', err);
// }