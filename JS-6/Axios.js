// ---------------------------------Axios-------------------------------------
//library to make HTTP requests

// async function getimage() {
//     try{
//         let res = await axios.get(url2)
//         return res.data.message
//     }
//     catch (e){
//         console.log("ERROR E ", e)
//         return "NO image found"
//     }
// }

// let btn = document.querySelector("button")

// btn.addEventListener("click", async ()=>{
//     let link = await getimage()
//     console.log(link)
//     let img = document.querySelector("#result")
//     img.setAttribute("src", link)
//     let p = document.querySelector("#result")
//     p.innerText = fact;
//     console.log(fact)
// })

//Sending Headers

// const url = "https://icanhazdadjoke.com/"

// async function getjokes(){
//     try{
//         const config = { headers : { Accept: "application/json"} }
//         let res = await axios.get(url, config)
//         console.log(res.data)
//     }
//     catch (e) {
//         console.log("error e", e)
//         return "No jokes Found"
//     }
// }

//--------------updating query strings-----------------------------

let url = "http://universities.hipolabs.com/search?name=";
let btn = document.querySelector("button")


async function getcolleges(country) {
    try {
        let res = await axios.get(url + country);
        return res.data
    }
    catch(e){
        console.log("error e", e)
        return [];
    }
}

function show(colarr){
    let list = document.querySelector("#list");
    list.innerText = "";
    for (col of colarr) {
        console.log(col.name);

        let li =  document.createElement("li");
        li.innerText = col.name;
        list.appendChild(li);
    }
}

btn.addEventListener("click", async ()=>{
    let country = document.querySelector("input").value;
    console.log(country);

    let colarr = await getcolleges(country);
    show(colarr);
}) 