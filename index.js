const { multiply, divide } = require('./calculator.js')

console.log(multiply(10,2));

console.log(divide(40,5));

const { add, remove } = require('./user.js')

let nn ="irving";
console.log(add(nn));

let rr ="pedro";
console.log(remove(rr));

const {  findById, findByEmail } = require('./user-controller.js')

let e ="irving@hotmail.com";
console.log(findByEmail(e));
let n ="Jesus@hotmail.com";
console.log(findByEmail(n));

let f ='1';
console.log(findById(f));
let x ='5';
console.log(findById(x));