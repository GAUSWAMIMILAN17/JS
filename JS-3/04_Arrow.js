// chai()

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);
// }

const chai =  () => {
    let username = "hitesh"
    console.log(username);
}


// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )

// const addTwo = (num1, num2) => ({username: "hitesh"})


// console.log(addTwo(3, 4))

//********Set Timeout */
// setTimeout(function, timeout)

// console.log("hi there!");

// setTimeout( () => {
//     console.log("Milan")
// }, 5000);

// console.log("Welcome To")

// *********Set Interval******************//
//setInterval(function,timeout)

// setInterval( () => {
//     console.log("milan")
// }, 2000)

// let id = setInterval( () => {
//     console.log("milan")
// }, 2000)

// console.log(id)

// let id2 = setInterval( () => {
//     console.log("MR")
// }, 2000)

// console.log(id2)
// clearInterval(id) // this is perticuler interval ne stop karva mate upayog thay se
// clearInterval(id2)

//-------------this with arrow functions--------------
// arrow => 1. lexicalscop => yani perent ko kisne call kiya hai wohh
// function scope => this => calling object

const student = {
    name: "aman",
    marks: 95,
    prop: this, //global scop
    getName: function(){
        console.log(this)
        return this.name;
    },
    getMarks: () => {
        console.log(this); //parent's scope -> window
        return this.marks;
    },
    getInfo1: function(){
        setTimeout( () => {
            console.log(this) //student
        }, 2000)
    },
    getInfo2: function(){
         setTimeout(function (){
            console.log(this) //window
         },2000)
    }
};

// console.log(student.getInfo1());
// console.log(student.getInfo2());

// console.log(student.getName());
// console.log(student.getMarks());

// const a = 5; // global scope

