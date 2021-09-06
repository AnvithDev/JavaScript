
const rock = document.querySelector('#rock')
const paper = document.querySelector('#paper')
const scissor = document.querySelector('#scissor')
const board = document.querySelector("#board")


const handler = (e) => {
    const action = e.target.id
    switch(action){
        case "rock":
            board.innerHTML="Rock beats scissors"
            break
        case "paper":board.innerHTML="Paper beats Rock"
                        break
        case "scissor":board.innerHTML="Scissor beats Paper"
                        break
        default: board.innerHTML="Do something bitch"
    }
}



rock.addEventListener('click', handler)
paper.addEventListener('click', handler)
scissor.addEventListener('click', handler)

