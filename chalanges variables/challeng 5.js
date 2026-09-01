//let duree = 100;
//if (duree < 60) {
//    console.lo<
//
//} else if (duree >= 120) {
  //  console.log("film standard");
//} else {
  //  console.log ("film long ");>
//}




var prompt = require('prompt-sync')();
var n = prompt('film duree? ');
if (n < 60) {
    console.log("corte metrage");
} else if (n <= 120 && n >= 60) {
    console.log("film standard");
} else if (n > 120) {
    console.log("film long");
}