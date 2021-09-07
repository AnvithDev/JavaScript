
// const rock = document.querySelector('#rock')
// const paper = document.querySelector('#paper')
// const scissor = document.querySelector('#scissor')
// const board = document.querySelector("#board")


// const handler = (e) => {
//     const action = e.target.id
//     switch(action){
//         case "rock":
//             board.innerHTML="Rock beats scissors"
//             break
//         case "paper":board.innerHTML="Paper beats Rock"
//                         break
//         case "scissor":board.innerHTML="Scissor beats Paper"
//                         break
//         default: board.innerHTML="Do something bitch"
//     }
// }



// rock.addEventListener('click', handler)
// paper.addEventListener('click', handler)
// scissor.addEventListener('click', handler)


// loops are same as in java

const balls = document.getElementsByClassName('ball')
const body=document.querySelector('body')

const arr=[1,34,32,3,342,2]

console.log(arr)
arr.push('adfs')
console.log(arr)

arr.forEach((ele,iteration) => {console.log(ele,iteration)})