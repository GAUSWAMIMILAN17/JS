//API => Application Programming Interface

// user => API(request) => Server
// User => Request Waiter => Kitchen
//      <= Response       <=

//some randome API

//https://catfact.ninja/fact (sends random cat facts)
//https://www.boredapi.com/api/activity (sends an activity to do when bored)
//https://dog.ceo/api/breeds/image/random (sends cute dog pictures)

//----------------JSON----------------------------------------

//JavaScript Object Notation www.json.or

// -> JSOn k andar hamari jo object ki key hoti hai woh ek String hoti jyare js ni andar key string nahi hoti 

//accessing data from JSON
// ->JSON.parse(data) Method
// to parse a string data into a JS object

// ->JSON.stringfy(json) Method
// ->to parse a js object data into JSON

//tools
//1.Hoppscoth
//2.Postman  

//--------------------------------Ajax----------------------------------
//Asynchronouse Javascript and XML

//------------------------Http Verb------------------------------------
//Example Below
//*GET
//*POST
//*DELETE

//----------------------Status Codes----------------------------------
//Example  Below
// *200-OK
// *404-Not Found
// *400-Bad Request
// *500-Internal Servefr Error

//--------------------Add Information In URLs------------------------------
// Query String 

//https://www.google.com/search?q=harry+porter => q = key & harry+porter = value

// ?name = milan & marks = 95

//Our First Request using Fetch
//fetch(url)

let url1 = "https://catfact.ninja/fact"
let url2 = "https://dog.ceo/api/breeds/image/random"

// fetch(url) //promise return kre
//     .then((response)=>{
//         console.log(response);
// })
//     .catch((err)=>{
//         console.log("ERROR - ", err)
// })

// async function getfetch()    {
//     let res = await fetch(url);
//     let data = await res.json();
//     console.log(data.fact);
// }