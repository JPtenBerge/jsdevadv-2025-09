import { readFile } from "fs";

console.log("begin");

// readFile("./boek.txt", "utf8", (err, content) => {
//   console.log("content:", content);
// });

setTimeout(() => {
  console.log("timeout klaar!");
}, 0);

for (let i = 0; i < 50000; i++) {
  console.log("i:", i);
}

console.log("eind");
