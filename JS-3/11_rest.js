//Allows a function take an inderfinite number of argumente and bundle them in an array

// function sum(...args){
//     for(let i=0; i<args.length; i++){
//     console.log("you gave us: ",args[i]);} 
// }
function min(a,b,c,d){
    console.log(arguments); 
    console.log(arguments.length);
    arguments.push(1); //=> error create because push , pop ,sift, etc fns is array not argument arguments is not an array this is collection
}

function sum(...args){
    return args.reduce((res,el)=>res+el)    //not run => args is not array this is a collection
}

function max(...args){
    return args.reduce((max,el) => {
        if(max<el) return el;
        else return max; 
    })
}
