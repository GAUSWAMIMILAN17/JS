//--------------------Async Function-----------------------------------

// Async Keyword => creates an async function

async function greet(){
    return "hello";
}

let hello = async () => {}; //return a promise

// fns => normal => promise => state = fullfield , value = return value
// fns => error => promise => state = rejected

// Await Keyword 
// => pauses the execution of its surrounding async function until the promise is settled (resolved or rejected)

function getNum() {
    return new Promise((resolve,reject)=> {
        setTimeout(()=>{
            let num = Math.floor(Math.random()*10) + 1;
            return num;
            resolve();
        },1000)
    })
    
}

async function demo() {
    await getNum(); // await keyword async fns ke andar hi use hota hai
    await getNum();
    await getNum();    
}

h1 = document.querySelector("h1");
function changecolor(color,delay){   
    return new Promise ((resolve, reject)=>{
        setTimeout(()=>{
            let num = Math.floor(Math.random() * 5)+1;
        if(num > 3){
            reject("promise rejected")
        }

        h1.style.color = color;
        console.log(`color changed to ${color}!`)
        resolve("color changed")
},delay)
}
)}

async function demo() {
    try{
    await changecolor("red",1000);
    await changecolor("orange",1000);
    await changecolor("green",1000);
    await changecolor("pink",1000);
    // changecolor("blue",1000)
    }
    catch(err){
        console.log("error caught")
        console.log(err);
    }

    let a = 5;
    console.log(a);
    console.log("new number = ", a+3)
}