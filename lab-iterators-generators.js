const createCustomer = (id, name, city) => {
  let bills = new Map([
    [true, new Set()], // paid
    [false, new Set()], // unpaid
  ]);

  return {
    id,
    name,
    city,
    bills: {
      add(bill) {
        bills.get(false).add(bill);
      },
      pay(billNr) {
        let unpaidBills = [...bills.get(false)];
        let bill = unpaidBills.find((x) => x.number === billNr);
        bills.get(false).delete(bill);
        bills.get(true).add(bill);
      },
      *unpaid() {
        yield* bills.get(false);
      },
      *paid() {
        yield* bills.get(true);
      },
    },
  };
};

let c1 = createCustomer(1, "Mario", "Roma");
console.log(`${c1.id} - ${c1.name}, ${c1.city}`);

c1.bills.add({ number: "ab123", amount: 123 });
c1.bills.add({ number: "cd456", amount: 456 });
c1.bills.add({ number: "ef789", amount: 789 });
c1.bills.add({ number: "gh012", amount: 128 });
c1.bills.add({ number: "ij386", amount: 946 });

console.log("*********unpaid***********");
for (const b of c1.bills.unpaid()) {
  console.log(b.number, b.amount);
}

c1.bills.pay("ef789");
c1.bills.pay("cd456");

console.log("*********unpaid***********");
for (const b of c1.bills.unpaid()) {
  console.log(b.number, b.amount);
}

console.log("**********paid************");
for (const b of c1.bills.paid()) {
  console.log(b.number, b.amount);
}
