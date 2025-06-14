// const square = (n) => n*n;
// console.log(square(4));

let id = setInterval( () => {
    console.log("Hello World")
},2000)
setTimeout(() => {
    clearInterval(id)
},12000);