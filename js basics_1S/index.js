console.log('namste dunia version 2');

// var rectangle={
//     length:1,
//     breadth:2,
//     draw:function() {
//         console.log('drawing rectangle')

//     }
// };

// -------------------------------------------------------------------------------------------------------------------
// factory function

// function createRectangle(len,bre) {
//     return rectangle= {
//         length:len,
//         breadth:bre,

//         draw: function() {
//             console.log('drawing rectangle');
//         }
//     };
// }


// let rectangleObj1 = createRectangle(5,4);
// console.log(rectangleObj1)

// ----------------------------------------------------------------------------------------------------------------

//  camelcase -> numberOfStudents
//  constructor function -> pascal notation -> first letter of every word is capital -> NumberOfStudents
// constructor funtion -> prop/methods -> initialise/define

// function Rectangle() {
    // this.length=1;
    // this.breadth=2;
    // this.draw= function() {
    //     console.log('drawing');
//     }
// }

// object creation using consrtuctor function 

// let rectangleObject = new Rectangle();

// rectangleObject.color='yellow';
// console.log(rectangleObject);

// delete rectangleObject.breadth;
// console.log(rectangleObject)


// this -> refers the current object you are working

// new -> isse ek empty object create hota hai aur is empty object ko this object se call kr rhe hai


// --------------------------------------------------------------------------------------------------------------------\

// below is constructor of function how js creates function into objects
let rectangle = new Function('length','breadth',`
this.length=length;
this.breadth=breadth;
this.draw= function() {
console.log('drawing')};`
    
    );

let rec = new rectangle(9,6)    

console.log(rec)



// --------------------------------------------------------------------------------------------------------------

//  for - in loop

let rectangle2 = {
    length:4,
    breadth:5
}

// for(let key in rectangle2) {
//     console.log(key,rectangle2[key]);
// }


// ------------------------------------------------------------------------------

//  for -of loop


for(let key of Object.entries(rectangle2)) {
    console.log(key);
}

// ---------------------------------------------------------------------------
//  to know if a property is present in object
if('color' in rectangle2){
    console.log('present');

}
    
else {
    console.log('absent');
}

// object cloning by iteration 
let dest={};
for(let key in rectangle2){
    dest[key]=rectangle2[key];
   

}
console.log(dest);


// object align by object-assign function

let src = { value:50};
let dest2 = Object.assign({},rectangle2,src);
console.log(dest2);


// object clooning by spread

let src3 = {
    p:60,
    q:80,
    r:90,
};

let dest4 = {...src3};
console.log(dest4)

// --------------------------------------------------------------
// String is object also

let firstName = 'amit';

let lastName = new String('yadav');

console.log(typeof firstName);

console.log(typeof lastName);

// ----------------------------------------------------------------------------------------------
//  in arrays to add elements in 
// end -> push
// beginning -> unshift
// middle -> splice

// searching

let numbers = [1,5,4,7,9,2];

console.log(numbers);

console.log(numbers.indexOf(9));  

//  gives output -1 if the given input does not present in array

//  we want to check if a number exist in an array
if(numbers.indexOf(4) !=-1)
    console.log("present");


console.log(numbers.includes(9));

let courses = [
    {no:1, name:'love'},
    {no:2,name:'babbar'}
];

console.log(courses);

// we cant use methods of primtive srting methods in objects

let course = courses.find(function(course) {
    return course.name === 'love';
}
);

console.log(course);

// using arrow functions

// steps to use arrow function
// step 1 remove function keyword with =>
// step 2 if there is one parameter then we can remove paranthesis of parameter
//  step 3 if there is single line of code in between {} then remove (), return keyword


let course1 = courses.find(course => course.name === 'babbar');

console.log(course1);

// to remove elements
// end -> pop
// beginning -> shift
// middle -> splice

numbers.pop();

numbers.shift();

numbers.splice(1,1);

console.log(numbers);

// emptying an array


let numbers2 = numbers;
// numbers = [];
// numbers.length = 0;
// numbers.splice(0,numbers.length);

console.log(numbers);
console.log(numbers2);

// combining arrays

let first = [1,2,3];
let second = [4,5,6];

// let combined = first.concat(second);
// console.log(combined);

// //  slicing arrays
// let sliced = combined.slice(2,4);
// //  in first parameter include but second para does not include
// console.log(sliced);

//  using spread operator we can combine arrays 
let combined = [...first,'a',...second,'b'];
console.log(combined);
 

// copy kaise create kare

let another = [...combined];

// iterating in array

let arr = [10,20,30,40,50];

for(let value of arr) {
    console.log(value);
}

//  iterating by using forEach 
arr.forEach(function(number) {
    console.log(number);
});


// Joining arrays

let numberss = [10,20,30,40,50];
const joined = numberss.join(' ');

console.log(joined);

let message  = 'This is a message ';
let parts = message.split(' ');

console.log(parts);

let joined1 = parts.join('_');
console.log(joined1);


// sorting
 
let num2 = [2,10,50,76,5,20];
let num2sor = num2.sort()

console.log(num2sor);

// filtering

let num3 = [1,-1,4,-2,0];
let filtered = num3.filter(value => value >= 0  );
console.log(filtered);


//  mapping arrays

let items = num3.map(value =>  'student_no' + value );

console.log(items);

// mapping in objects 

// let num4 = [1,-1,4,-2,0];
// let filtered1 = num4.filter(value => value >= 0  );

// let items1 = filtered1.map(function(num) {
//     return {value:num};
// });

// console.log(items1);

// chaining method

let num4 = [1,-1,4,-2,0];

let items1 =  num4.filter(value => value >= 0  );

console.log(items1);
let items2 = items1.map(num => {
    return {value:num};
}  );


console.log(items2);