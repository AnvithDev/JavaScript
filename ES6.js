console.log('Merged class 1 es6')

const arr=[1,2,3,4]

console.log(arr[2])

const [one ,two ,three] =[1,2,3,4] //ES6 Destructuring

console.log(three)

function retur(){
    return [90,100];
}

let [x,y,z] = retur();

console.log(x)
console.log(y)
console.log(z)


const obj ={
    Name:"Anvith",
    email: "1ms19@gmail.com",
    age: 20
}
const obj1 ={
    Name1:"adflakjd",
    email1: "1afa@gmail.com",
    age1: 29
}

console.log(obj.email)

let {Name,age,email} = obj
let {Name1,age1,email1} = obj1 //object destructuring

console.log(age1)

let person ={
    fname: "Anvith",
    lname: "Ban",
    age2: 21,
    middlename: "DNA"
}

let {age2, fname, lname,middlename=""} = person // Default value will be overwritten
console.log(age2)
console.log(fname)
console.log(lname)
console.log(middlename)
