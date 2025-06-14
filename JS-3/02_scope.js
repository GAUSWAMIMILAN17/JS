//function scope
//variable defines inside a fns are not visible frome outside the fns
//var c = 300
// let a = 300
// if (true) {
//     let a = 10
//     const b = 20
    // console.log("INNER: ", a);
    
// }



// console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        // console.log(username);
        // console.log(website); // yaha pe access ho jayega

    }
    // console.log(website);  // but ya pe nahi hoga kyuki curli bres k bahar hai is liye block scope

     two()

}

one()

// block scope
// variable  declared inside a{} block cannot be accessed from outside the block
let age =25;
if(age>=18){
    let str = "adult"
    // console.log(str)
}
// console.log(str) // yaha pe error aaye ga yaha pe ise access comdition ke andar hi kar sakte hai

//lexical scope 
//a veriable defined outside a fns can be accessible inside another fns defined after the variable declaration
// the opposite is not true
function outerFunc() {
    let x = 5;
    let y = 6;
    function innerFunc() { //function scope aane bahar use na kari sakie
        console.log(x);
    }
    // innerFunc(); 
}

// outerFunc();

// if (true) {
//     const username = "hitesh"
//     if (username === "hitesh") {
//         const website = " youtube"
//         console.log(username + website);
//     }
    // console.log(website);
// }

// console.log(username);


// ++++++++++++++++++ interesting ++++++++++++++++++


// console.log(addone(5))

function addone(num){
    return num + 1
}

// practice quetion

//what will be the output?

// let greet = "hello";

// function changeGreet(){
//     let greet = "namaste";
//     console.log(greet);
//     function innerGreet(){
//         console.log(greet);
//     }
// }

// console.log(greet); // hello
// changeGreet(); //namste

/***************************Function Expression ****************************/

// const variable = function(arg1 , arg2 ....){
    // sommething
// }

const sum = function(a, b) {
    return a+b;
}
// console.log(sum(2,3));
const addTwo = function(num){
    return num + 2
}
// console.log(addTwo(5));

//**********High Order Function  *******************/
//a function that does one or both:
//* takes one or multiple functions as arguments 
//* returns a function

function multipleGreet(func, n){
    for(let i=1; i<=n; i++){
        func();
    }
}
let greet = function(){
    console.log("hello");
}

// multipleGreet(greet,2);

//* returns a function


function oddEvenTest(request) {
    if(request == "odd"){
        let odd = function(n) {
        console.log(!(n%2 == 0));
    }
    return odd;
    }
    else if(request == "even"){
       let even = function(n) {
        console.log(n%2 == 0)
    }
    return even;
    }
    else{
        console.log("wrong request")
    }
}
// let request = "odd";

let func = oddEvenTest("even");
// func(4)

//*****************Methods ***************************/
//Action that can be performed on object

const calculator = {
    num: 55,
    add: function(a, b){
        return a + b;
    },
    sub: function(a, b){
        return a - b;
    },
    mul: function(a, b){
        return a * b;
    }
}