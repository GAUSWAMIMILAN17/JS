//callback hell 

// h1 = document.querySelector("h1");
// function changecolor(color,delay, nextcolorchange)
// {   setTimeout(()=>{
//     h1.style.color = color
//     if (nextcolorchange) nextcolorchange();
// },delay)
// }
// changecolor("red",1000,() => {
//     changecolor("orange",1000, () => {
//         changecolor("green",1000)
//     });
// });
//callbacks nesting -> isi ko callbback hell kahte hai


// changecolor("orange",2000);
// changecolor("green",3000);
// setTimeout (()=>{
//     h1.style.color = "red"
// },1000)
// setTimeout (()=>{
//     h1.style.color = "orange"
// },2000)
// setTimeout (()=>{
//     h1.style.color = "green"
// },3000)