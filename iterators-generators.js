
// iterators?
// - itereren over een lijstje
// - pattern

let jp = { 
    name: 'JP',
    favorieteDranken: ['Sprite', 'Coca-cola vanille'],
    favorieteChips: ['Nibb-it rings', 'Mama Mias'],
    *[Symbol.iterator]() {
        let alles = [...this.favorieteDranken, ...this.favorieteChips];

        yield* alles;

        // let index = 0;
        // return {
        //     next() {
        //         return {
        //             value: alles[index],
        //             done: ++index > alles.length
        //         }
        //     }
        // }
    }
};
for (let item of jp) {
    console.log(item);
}



// generators?
// - implementeert ook iterator pattern, maar dan mooi

function* gen() {
    console.log('eerste');
    yield 4;
    console.log('tweede');
    yield 8;
    console.log('derde');
    yield 15;
    console.log('vierde');
    yield 16;
    console.log('vijfde');
    yield 23;
    console.log('zesde');
    yield 42;
}

let source = gen();
console.log(source.next());
console.log(source.next());
console.log(source.next());

// for (let item of gen()) {
//     console.log('gen item:', item);
// }


function* traverseNode(node) {
    yield* node.left;
    yield node.value;
    yield* node.right;
}

