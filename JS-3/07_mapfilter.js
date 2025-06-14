//--------------------map------------------------------------
// let newArr = arr.map(some function def or name )

// let num = [1, 2, 3, 4];

// let double = num.map((el) => {
//     return el*2
// })

let students = [
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

let gpa = students.map((el) => {
    return el.marks /10;
});


//-----------filter------------------------------------------------------

// let newArr = Array.filter(some function defination or name);

let nums = [2, 4, 1, 5, 6, 2, 7, 8, 9,]

let even = nums.filter((el) => (el % 2 ==0) );