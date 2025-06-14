// const square = (n) => n*n;
// console.log(square(4));

// let id = setInterval( () => {
//     console.log("Hello World")
// },2000)
// setTimeout(() => {
//     clearInterval(id)
// },12000);

//avg of array
const arrAverage = () => {
     
    let arr = [1,2,3,4,5]
    let sum = 0;
    for(let i=0; i<arr.length;i++){
        sum+=arr[i];
    }
    let avg = sum/arr.length;
    return avg;
}

console.log(arrAverage());

//even or not even
const isEven = (n) => {
    if(n%2==0){
        console.log("even")
    }
    else console.log("not even")
}

console.log(isEven(4));