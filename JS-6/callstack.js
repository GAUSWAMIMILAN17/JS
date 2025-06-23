// js is single threaded 

// js ek time ma ek j function execute kre ch nichena je be fns se e ne browser
// execute kre se and same time thata nathi minor gap hoy se

//js ek time pr ek j kaam kre se single threaded se

//asynchrous nature => not line by line
// setTimeout(function(){
//     console.log("apna")
// },2000)
// setTimeout(function(){
//     console.log("hello world")
// },2000)

// console.log("hello.....")

//synchrous nature => line by line 
// let a = 25;
// console.log(a);
// let b = 30;
// console.log(b);
// console.log(a+b);