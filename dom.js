// //! DOM SELECTORS

// //! 1) document.getElementById()
// let box1 = document.getElementById("box1")
// console.log(box1);

// //! 2) document.getElementsByClassName()
// let box2 = document.getElementsByClassName("box2")
// console.log(box2);// HTMLCollection(3) [div.box2, div.box2, div.box2]

// //! 3) document.getElementsByTagName()
// let sections = document.getElementsByTagName("section")
// console.log(sections);// HTMLCollection(3) [section, section, section]

// // NOTE : HTMLCollection[] is an impure array

// //! Array.isArray() : to check weather array is pure or not, returns boolean
// console.log(Array.isArray(sections));// false

// //! Array.from() : to convert impure array to pure
// let pureArr = Array.from(sections)
// console.log(pureArr);
// console.log(Array.isArray(pureArr));// true

// //! 4) document.querySelector()
// let ele1 = document.querySelector("#box1")
// console.log(ele1);

// let ele2 = document.querySelector(".box2")
// console.log(ele2);

// let ele3 = document.querySelector("section")
// console.log(ele3);

// // priority => 1)id  2)class 3)tagname
// let x = document.querySelector("section , #box1 , .box2")
// console.log(x);

// //! 5) document.querySelectorAll()
// let y = document.querySelectorAll("section , .box2 , #box1")
// console.log(y); //NodeList(8) [div#box1, div#box1, div.box2, div.box2, div.box2, section, section, section]

// // NOTE : NodeList is an impure array

// console.log(Array.isArray(y));// false

//! difference between NodeList and HTMLCollection
//----- diff 1
// HTMLCollection : we cannot use any of the array methods
// NodeList : we can use only 1 array method i.e, forEach()

//! ----- diff 2
// HTMLCollection : its known as Live Collection
// NodeList : its known as Static Collection

//! ---- code for diff 2
// let collection = document.getElementsByTagName("footer")
// let lists = document.querySelectorAll("footer")

// console.log("collection : ", collection.length); // 3
// console.log("lists : ", lists.length);// 3

// let footerTag = document.createElement("footer")
// footerTag.innerText = "created using js"
// console.log(footerTag);// <footer>created using js</footer>
// document.body.appendChild(footerTag)

// console.log("collection : ", collection.length); // 4 (live)
// console.log("lists : ", lists.length);// 3 (static)

//! DOM MANIPULATIONS

// // ! how to create an element from JS :- document.createElement()
// const h2tag = document.createElement("h2");
// const h1tag = document.createElement("h1");

// //! how to add text
// // 1) innerText
// h1tag.innerText = "I am h1 <mark>Tag</mark>"

// // 2) innerHTML
// h2tag.innerHTML = "I am h2 <mark>Tag</mark>"

// console.log(h1tag); // <h1>I am h1 Tag</h1>
// console.log(h2tag); // <h2>I am h2 Tag</h2>

// //! appendChild() can accept one node as an arguement
// // document.body.appendChild(h1tag,h2tag)

// //! append() can accept multiple node as an arguement
// document.body.append(h1tag,h2tag)

//! how to add styles using JS
// const div1 = document.createElement("div")
// const div2 = document.createElement("div")

// div1.innerText = "I am Div 1"
// div2.innerText = "I am Div 2"

// //! way 1
// div1.style.backgroundColor="red"
// div1.style.color="white"

// //! way 2
// div2.className = "box"
// console.log(div2);

// document.body.append(div1 , div2)

// ! HOW TO SET ATTRIBUTE TO AN ELEMENTS :- setAttribute()

// const section = document.createElement("section")
// const imgTag = document.createElement("img")

// // ! 1-way using property
// section.id = "container"
// section.className = "sectionContainer"

// // ! 2-way using method
// imgTag.setAttribute("src","image_path")
// imgTag.setAttribute("alt","User Image")

// console.log(section);
// console.log(imgTag);

// document.body.append(section,imgTag)

// const users = [
//   {
//     id: 1,
//     username: "John Doe",
//     email: "john@gmail.com",
//     company: { companyName: "HCL", designation: "Dev" },
//   },
//   {
//     id: 2,
//     username: "Jane Doe",
//     email: "jane@gmail.com",
//     company: { companyName: "Wipro", designation: "Tester" },
//   },
//   {
//     id: 3,
//     username: "Henry Doe",
//     email: "henry@gmail.com",
//     company: { companyName: "Mind", designation: "HR" },
//   },
// ];

// const mainTag = document.querySelector("main");

// users.map((ele) => {
//   let {
//     username,
//     email,
//     company: { companyName, designation },
//   } = ele;

//   const cardContainer = document.createElement("article");

//   cardContainer.innerHTML = `
//     <h2>Username : ${username}</h2>
//     <p>Email : ${email}</p>
//     <p>Company : ${companyName}</p>
//     <p>Designation : ${designation}</p>
//    `;
//   mainTag.append(cardContainer);
// });

//! create a table

// const tableTag = document.createElement("table")
// tableTag.border = "2px"

// const tr1 = document.createElement("tr")
// const tr2 = document.createElement("tr")
// const tr3 = document.createElement("tr")

// const td1 = document.createElement("td")
// const td2 = document.createElement("td")
// const td3 = document.createElement("td")
// const td4 = document.createElement("td")
// const td5 = document.createElement("td")
// const td6 = document.createElement("td")
// const td7 = document.createElement("td")
// const td8 = document.createElement("td")
// const td9 = document.createElement("td")

// td1.innerText = "A"
// td2.innerText = "B"
// td3.innerText = "C"
// td4.innerText = "D"
// td5.innerText = "E"
// td6.innerText = "F"
// td7.innerText = "G"
// td8.innerText = "H"
// td9.innerText = "I"

// tr1.append(td1,td2,td3)
// tr2.append(td4,td5,td6)
// tr3.append(td7,td8,td9)

// tableTag.append(tr1,tr2,tr3)
// mainTag.append(tableTag)

// let tableData = [
//   ["A", "B", "C"],
//   ["D", "E", "F"],
//   ["G", "H", "I"],
// ];
// const mainTag = document.querySelector("main");
// const tabletag = document.createElement("table");

// tabletag.border = "2px";
// for (let row of tableData) {
//   const tr = document.createElement("tr");

//   for (let cell of row) {
//     const td = document.createElement("td");
//     td.innerText = cell;
//     tr.append(td);
//   }

//   tabletag.append(tr);
// }
// mainTag.append(tabletag);

// const formTag = document.createElement("form")
// const emailInput = document.createElement("input")
// const passwordInput = document.createElement("input")
// const submitButton = document.createElement("button")
// const brTag1 = document.createElement("br")
// const brTag2 = document.createElement("br")

// emailInput.type = "text"
// emailInput.placeholder = "Email"

// passwordInput.type = "password"
// passwordInput.placeholder = "Password"

// submitButton.innerText = "Submit"

// formTag.append(emailInput , brTag1 , passwordInput, brTag2, submitButton)
// document.body.append(formTag)


// ! DOM EVENTS
function singleClick(){
    console.log("single click");
}

function doubleClick(){
    console.log("double click");
}

function mouseEntered(){
    console.log("mouse entered");
}

function mouseLeft(){
    console.log("mouse left");
}

function mouseMoved(){
    console.log("mouse moved");
}

function keyPressed(){
    console.log("key is pressed");
}

function keyReleased(){
    console.log("key is released");
}

function inputChange(){
    console.log("input is changed");
}