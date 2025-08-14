console.log("External JS");

//! TOKENS : smallest unit of every programming lang.
// 1) keywords : reserved words which has some specific meaning.  ex - for, while, switch, var, let, const ....

// 2) identifiers : name given to a class, variables, methods ..

// 3) literals / values : data which is stored in a variable

// 4) operators : symbols which is used to perform some specific operation between two or more operands.

//! DATATYPES

//! 1) PRIMITIVE -> 7 TYPES

// a) number
// var a1 = 10.896
// console.log(a1);
// console.log(typeof a1);// number

// b) string
// var a2 = "Hello"
// var a3 = 'javascript'
// console.log(a2,a3);
// console.log(typeof a2);// string

// c) boolean
// var a4 = true
// console.log(a4);
// console.log(typeof a4);// boolean
// console.log(typeof typeof a4);// string //! interview que

// d) undefined
// var a5
// console.log(a5);
// console.log(typeof a5);// undefined
// // console.log(x); //! Error: Not Defined, bcoz variable doesn't exists

// e) null
// var a6 = null
// console.log(a6);
// console.log(typeof a6);// object

// f) bigInt
// var a7 = 1n
// console.log(a7);
// console.log(typeof a7);

// g) symbol
// var s1 = Symbol("ABC")
// var s2 = Symbol("ABC")
// console.log(s1);
// console.log(s2);
// console.log(s1 == s2);

//! 2) NON-PRIMITIVE -> 3 TYPES

// a) array
// b) object
// c) function

//! 3 WAYS OF CREATING VARIABLES

//! 1) var

// var a // declaration

// a = 10 // initialization

// console.log(a); //10

// var a // re-declare

// a = 20 // re-initialize

// console.log(a); //20

// var a2 = 30 // declare and initialize

// console.log(a2);//30

// var a2 = 40 // re-declare and re-initialize

// console.log(a2);// 40

// //! 2) let

// let b ; // declare

// b = 100; // initialize

// console.log(b);// 100

// // let b //! CANNOT RE-DECLARE

// b = 200

// console.log(b);// 200

// let b1 = 300 // declare & initialize

// console.log(b1); // 300

// // let b1 = 400 //! CANNOT RE-DECLARE AND RE-INITALIZE

// //! 3) consT

// const c = 1000

// console.log(c);

//! HOISTING : moving declaration part at the top of the original code internally

// var x1 = undefined //! HOISTED, JS ENGINE STORED UNDEFINED VALUE TO VARAIBLE
// console.log(x1)
// var x1 = "Hello JS"
// console.log(x1); // Hello JS

// // let x2 //! HOISTED,BUT JS ENGINE DIDN'T STORED UNDEFINED VALUE TO VARAIBLE
// // console.log(x2);
// let x2 = "Hello React"
// console.log(x2); //Hello React

// //let x3 //! HOISTED,BUT JS ENGINE DIDN'T STORED UNDEFINED VALUE TO VARAIBLE
// let x3
// console.log(x3);
// x3 = 100
// console.log(x3);
debugger;
console.log("Start");//  start
console.log(a); // ud
let b = 10;
var a;
console.log(b, a); // 10 ud
a = 800;
console.log(c); // ud / not defined
b = 90;
console.log(a, c, b); // 800 ud 90
var c = 60;
const d = 200;
console.log(c, d, b);// 60 200 90
console.log("End");// end 
