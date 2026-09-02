const prompt = require ('prompt-sync')();
let n = Number(prompt ("nombre de participants :"));
for (let XM = 1; XM <= n; XM++) {
    console.log("participant " + XM);
}