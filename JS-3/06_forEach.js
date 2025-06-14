//arr.forEach(some function definition or name);

let arr = [1, 2, 3, 4, 5]

// let print = function(el){
//     console.log(el);
// }

// arr.forEach(print);

//OR

// arr.forEach(function(el){
//     console.log(el);
// });

const myArray = [2, 5, 3, 7, 8]

myArray.forEach(function(el){
    console.log(el)
})

let arr = [
    {
        name: "aman",
        marks: 95,
    },
    {
        name: " milan",
        marks: 85,
    },
    {
        name: " shraddha",
        marks: 80,
    }
]

arr.forEach((student) => {
    console.log(student.marks);
});