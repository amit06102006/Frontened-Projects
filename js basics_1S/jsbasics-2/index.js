// // // function declaration 
// // function run() {
// //     console.log("running");
// // }

// // // function call or invoke
// // run();

// // //named  function assignment

// // // let stand = function walk() {
// // //     console.log('walking')
// // // };

// // // // anonymous function assignment
// // // let stand2 = function() {
// // //     console.log('walking')
// // // };

// // // stand();

// // // stand2();

// // // function sum(a,b) {
// // //     console.log(arguments);
// // //     let total = 0;
// // //     for(let value of arguments)
// // //         total = total + value;
// // //     return total;
// // // }
// // // arguments are objects of parameters passed to function 

// // let ans = sum(1,2,3,4,5,6);
// // console.log(ans);

// // rest operator

// // function sum(num,value,...args) {
// //     console.log(args);
// // }

// // sum(1,2,3,4,5,6);

// // default parameter

// // function interest(p,r=6,y=9) {
// //     return p*r*y/100;
// // }

// // console.log(interest(1000,undefined,8));

// // getter -> to access properties
// // setter -> to change or mutate properties

// let person = {
//     fName : 'Love',
//     lName : 'Babbar',
//     get fullName() {
//         return `${person.fName} ${person.lName}`;
//     },
//     set fullName(value) {
//         if(typeof value != String) {
//             throw new Error('you have not sent a string');

//         }
            
//         let parts = value.split(' ');
//         this.fName = parts[0];
//         this.lName = parts[1];
//     }
// };



// // try and catch 
// // jis code m bhi tumhe shanka h ki ye shi h usse try m dal do 

// try {
//     person.fullName = true;

// }

// catch(e)  {
//     alert(e);
// }

// console.log(person.fullName);

//  reducing an array

let arr = [1,2,3,4];
let total = 0;

for(let value of arr)
    total += value;

console.log(total);

let totalSum = arr.reduce((accumulator,currentValue) => accumulator + currentValue,0);

console.log(totalSum);