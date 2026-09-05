const prompt = require('prompt-sync')();
let nomber = prompt("nommber :");
let n = 100;
for(let i =1;i<= n ;i++) {
    if (i % 3 ===0){
        console.log(i);
    }
}