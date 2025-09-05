//! DOM SELECTORS

//! 1) document.getElementById()
let box1 = document.getElementById("box1")
console.log(box1);

//! 2) document.getElementsByClassName()
let box2 = document.getElementsByClassName("box2")
console.log(box2);// HTMLCollection(3) [div.box2, div.box2, div.box2]

//! 3) document.getElementsByTagName()
let sections = document.getElementsByTagName("section")
console.log(sections);// HTMLCollection(3) [section, section, section]

// NOTE : HTMLCollection[] is an impure array

//! Array.isArray() : to check weather array is pure or not, returns boolean
console.log(Array.isArray(sections));// false

//! Array.from() : to convert impure array to pure
let pureArr = Array.from(sections)
console.log(pureArr);
console.log(Array.isArray(pureArr));// true

//! 4) document.querySelector()
let ele1 = document.querySelector("#box1")
console.log(ele1);

let ele2 = document.querySelector(".box2")
console.log(ele2);

let ele3 = document.querySelector("section")
console.log(ele3);

// priority => 1)id  2)class 3)tagname
let x = document.querySelector("section , #box1 , .box2")
console.log(x);

//! 5) document.querySelectorAll()
let y = document.querySelectorAll("section , .box2 , #box1")
console.log(y); //NodeList(8) [div#box1, div#box1, div.box2, div.box2, div.box2, section, section, section]

// NOTE : NodeList is an impure array

console.log(Array.isArray(y));// false

//! difference between NodeList and HTMLCollection
//----- diff 1
// HTMLCollection : we cannot use any of the array methods
// NodeList : we can use only 1 array method i.e, forEach()

//----- diff 2
// HTMLCollection : its known as Live Collection
// NodeList : its known as Static Collection

//---- code for diff 2
let collection = document.getElementsByTagName("footer")
let lists = document.querySelectorAll("footer")
 
console.log("collection : ", collection.length); // 3
console.log("lists : ", lists.length);// 3

let footerTag = document.createElement("footer")
footerTag.innerText = "created using js"
console.log(footerTag);// <footer>created using js</footer>
document.body.appendChild(footerTag)

console.log("collection : ", collection.length); // 4 (live)
console.log("lists : ", lists.length);// 3 (static)














