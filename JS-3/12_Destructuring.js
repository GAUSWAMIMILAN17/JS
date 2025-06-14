//storing values of arrays into ,ultiple variables

let names = ["tony","sephard","bruce", "steve","peter"];
let[winer, runnerup , ...others] = names;
console.log(winer,runnerup, ...others); //tony, bruce

//*************Destructuring in object****************/

const student = {
    name: "karan",
    class: 9,
    age:14,
    subject: ["hindi", "english", "math" ,"science","social studies"],
    username: "karan123",
    password: 1234,
};
const { username: user, password: pass } = student;
console.log(user);