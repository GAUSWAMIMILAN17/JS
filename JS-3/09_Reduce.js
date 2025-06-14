//Reduce the array to a single value
//arr.reduce(reducer function with 2 variable for (accumalator,element))

// let finalval = [1,2,3,4].reduce((res,el)=>{
//     console.log(res);
//     return res + el;
    
// });

// let nums = [2, 3, 4, 5, 3, 4, 7, 8, 1, 2];

// let result = nums.reduce( (max,el) => {
//     if(el > max) return el;
//     else return max;
// })
// console.log(result)

// check if all number in our array are multiples of 10 or not
// let arr = [2, 10, 20, 30, 45, 50]

// let Mult10 = arr.filter((el)=> el%10==0)

// let nums = [2, 3, 4, 5, 3, 4, 7, 8, 8, 2];

// // create a function to find  the min number in an array
// let result = nums.reduce( (min,el) => {
//     if(el < min) return el;
//     else return min;
// })
// console.log(result);

//---------------Default Parameters------------------

//Given a default value to the arguments

// function func(a,b=2){
    // do something}

    // function sum(a, b=3){
    //     return a +b;
    // }
    // sum(2); //5

    function sum(a=1, b){
        return a +b;
    }
    // sum(1,3) //4
    //sum(2) //a=2 , b = undefined