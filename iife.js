

// Immediately Invoked Function Expression


!function() {
    hoi = 'wauw';
    console.log('werkt woehoe!');
}();

(() => {
    console.log('werkt woehoe!');
})();

const func = function() { }; // function expression

function bla() {} // function declaration


console.log(hoi);