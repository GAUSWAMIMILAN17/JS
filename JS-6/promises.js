// promises
// the promise object represents the eventual completion (or failure) of an asynchronous operation and itss resulting value.


// function savetoDb(data,success, failure){
    // let internetspeed = Math.floor(Math.random() * 10) + 1;
    // if(internetspeed > 4){
    //     success();
    // }else {
    //     failure();
    // }
// }

// savetoDb("apna college", () => {
//     console.log(" success : your data was saved : ");
//     savetoDb("hello world", () => {
//         console.log("success2 : your data2 was saved ")
//     }, ()=> {
//         console.log("failure2 : weak connection ")
//     })
//     }, 
//     () => {
//     console.log("failure : weak connection. data not saved : ")
//     }
// );


// function savetoDb(data){
//     let internetspeed = Math.floor(Math.random() * 10) + 1;
//     return new Promise((resolve, reject)=>{
//         let internetspeed = Math.floor(Math.random() * 10) + 1;
//     if(internetspeed > 4){
//         resolve("succes : data was saved");
//     }else {
//         reject("failure : weak connection");
//     }
//     })
// }

// savetoDb("apna college")

//then() & catch()

// let request = savetoDb("aona college"); //request = promise object

// request
// .then(()=>{
//     console.log("promise was resolved")
//     console.log(request)
// })
// .catch(()=>{
//     console.log("promise was rejected")
//     console.log(request)
// })


// //promises improved version

// savetoDb("apnacollege")
//     .then(()=>{
//     console.log("promise was resolved")
//     savetoDb("helloworld")
//     .then(()=>{
//         console.log("data2 saved");
//     })
//     .catch(()=>{
//         console.log("hello world rejected")
//     })
// })
// .catch(()=>{
//     console.log("promise was rejected")
//     // console.log(request)
// })

// peomise are rejected and resolved with some data (valid result or error)

