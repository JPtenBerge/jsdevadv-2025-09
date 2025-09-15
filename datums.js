Date.prototype.toPrettyString = function() {
  return `${this.getFullYear()}-${this.getMonth() + 1}-${this.getDate()}`;
};


let nu = new Date();
console.log(nu.getDate());
console.log(nu.getMonth() + 1);
console.log(nu.getFullYear());

console.log(new Date("2022-03-04"));
console.log(new Date("2022/03/04"));

console.log(nu.toPrettyString());

// <time>
