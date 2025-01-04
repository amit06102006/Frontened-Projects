// // It is standard way to measure how long your code taken to run. -> performance.now()
// // fill(value, start, end) fills that specific value from given position
// let size = 1000;
// let arr = Array(size).fill(1);
// console.log(arr);


// // Iterate With Normal For Loop  
// let t1 = performance.now();
// for(let i = 0; i < size;i++){
//     console.log(arr[i]);
// }
// let t2 = performance.now();
// console.log(`Normal Loop Takes Time to Run ${t2-t1}ms`);

// // Iterate with for of 
// t1 = performance.now();
// for(let i of arr)
// {
//     console.log(i);
// }
// t2 = performance.now();
// console.log(`For Of Takes Time to Run ${t2-t1}ms`);


// // For Each Loop 
// t1 = performance.now();
// arr.forEach((value)=>{
//     console.log(value);
// });
// t2 = performance.now();
// console.log(`For Each Takes Time to Run ${t2-t1}ms`);

// // While Loop 
// t1 = performance.now();
// let i = 0;
// while (i < size) {
//     console.log(arr[i]);
//     i++;
// }
// t2 = performance.now();
// console.log(`While Loop Takes Time to Run ${t2-t1}ms`);


// ${} it allows you to nest a variable inside a string without doing concatenation using the + operator.

// Adding 100Para
// let t1 = performance.now();
// for(let i =1;i <= 100;i++)
// {
//     let newElement = document.createElement('p');
//     newElement.textContent = `This is Para ${i}`;
    
//     document.body.appendChild(newElement);
// }
// let t2 = performance.now();

// console.log(`1st way take time : ${t2-t1}ms`);

// Optimize it 

// t1 = performance.now();
// let myDiv = document.createElement('div');
// for(let i =1;i <= 100;i++)
// {
//     let newElement = document.createElement('p');
//     newElement.textContent = `This is Para ${i}`;
    
//     myDiv.appendChild(newElement);
// }
// t2 = performance.now();
// document.body.appendChild(myDiv);
// console.log(`2nd way take time : ${t2-t1}ms`);

// using document DocumentFragment 

// t1 = performance.now();
// let myDiv = document.createDocumentFragment('div');
// for(let i =1;i <= 100;i++)
// {
//     let newElement = document.createElement('p');
//     newElement.textContent = `This is Para ${i}`;
    
//     myDiv.appendChild(newElement);
// }
// t2 = performance.now();
// document.body.appendChild(myDiv);
// console.log(`3rd way take time : ${t2-t1}ms`);

// console.log("Hi");
// setTimeout(function() {
//     console.log("Hey");
// },5000);
// console.log("Hello");


// The setTimeout(function,delay) method of the Window interface sets a timer which executes a function or 
// specified piece of code once the timer expires -> delay in ms

// using document fragment is increase speed and optimise code
// let fruits = ["Mangoes","Oranges","Bananas","Strawberry","Apple"];

// let list = document.querySelector('ul');
// console.log(list);

// let t1 = performance.now();
// for(let key of fruits)
// {
//     let item = document.createElement('li');
//     item.textContent = key;

//     list.appendChild(item);
// }
// let t2 = performance.now();
// console.log(`Adding one by one takes time ${t2-t1}ms`);


// let listOL = document.querySelector('ol');
// console.log(listOL);

// t1 = performance.now();
// let fragment = document.createDocumentFragment();
// for(let key of fruits)
// {
//     let item = document.createElement('li');
//     item.textContent = key;

//     fragment.appendChild(item);
// }
// listOL.appendChild(fragment);
// t2 = performance.now();
// console.log(`Fragment takes time ${t2-t1}ms`);

// function a() {
//     console.log('hi');
// }

// function b() {
//     console.log('Hello');
// }

// a();
// b();

function a() {
    console.log('hi');
    b();
}

function b() {
    console.log('Hello');
}

a();

