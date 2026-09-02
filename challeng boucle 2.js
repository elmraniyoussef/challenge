const prompt = require ('prompt-sync')();
let A = Number (prompt ( "nombre de participants :"));
for (let i = 1; i <= A; i++) {
    if (i % 2 ==0) {
    console.log(i);}}