// let meraPromise = new Promise(function(resolve,reject) {
//     setTimeout(function() {
//         console.log('i am inside promise');
//     },5000);
//     resolve(2);

//     reject(new Error('bhaisaab error aaya hai'));
// });

// meraPromise.then((value) => {console.log(value)} , (error) => {console.log("Received an error")}
// ) ;
// console.log('pehla');

// let waada1 = new Promise (function(resolve,reject) {
//     setTimeout(() => {
//         console.log('settimeout1 started');
//     },2000);
//     resolve(true);
// })

// let output = waada1.then(() => {
//     let waada2 = new Promise(function(resolve,reject) {
//         setTimeout(() => {
//             console.log('settimeout2 started');
//         },3000);
//         resolve('waada2 resolved');
    
//     })
//     return waada2;
// })

// output.then((value) => console.log(value));


// async function utility() {

//     let delhiMausam = new Promise((resolve,reject) => {
//         setTimeout(() => {
//             resolve('delhi me bhot garmi hai');
//         },500)
//     });

//     let hydMausam = new Promise((resolve,reject) => {
//         setTimeout(() => {
//             resolve('hydrabad me  thand hai');
//         },10000)
//     });


//     let dM =  delhiMausam;
//     let hM =  hydMausam;

//     return [dM,hM];


    
// }

// let obj = {
//     heading:'head'
// };
// async function utility() {
//     let content = await fetch('https://jsonplaceholder.typicode.com/posts/1');
//     let output = await content.text();
//     console.log(output);
    
// }
// utility();

async function helper() {

    let options = {
       method: 'POST',
       body: JSON.stringify({
        title:'Babbar',
        userID: 1998,
        body:'Tagdi body',
       }),
       headers:{
        'Content-type': 'application/json; charset=UTF-8',
       },

    };

    let content = await fetch('https://jsonplaceholder.typicode.com/posts',options);
    let response = content.text();
    return response;
    
}

async function utility() {
    let ans = await helper();
    console.log(ans);
    
}

utility();


//  nested functions -> closure -> reference

function init() {
    let name = 'amit';
    function displayName() {
        // displayName() is the inner function , that forms the closure 
        console.log(name);  // use variable declared in the parent function 
    }
    return displayName();
}

let func1 = init();
func1();