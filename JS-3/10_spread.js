//expand an irerable into multiple values

// function func (...arr){
// //do something}

// let arr = [1,2,5,3,4,8,3,6,8,9]
// Math.min(...arr); //1   

// console.log("milan") //milan
// console.log(..."milan") //m i l a n => this output give with spread 

// ...  => this syntax is spread

//**************spread with array literals */

let arr = [1,2,3,4,5,];
let newarr = [...arr]; // newarr is dupliicate of arr so creat a old arr copy 

//same i will creat a copy in string

let chars = [..."milan"]
let newchar = [...chars]

let odd = [1, 3, 5, 7]
let even = [2, 4, 6, 8]

let oddeven = [...odd, ...even]

//**********Spread with object literals */

let data ={
    email: "milan@gmail.com",
    password: "abcd",
    age:19
}

let datacopy = {...data, id:123,dob:17}