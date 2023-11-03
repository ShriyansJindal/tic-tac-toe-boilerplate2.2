const box = document.querySelectorAll(".box")
const result = document.getElementById("result")
const message = document.getElementById("message")
const playAgain = document.getElementById("button")

var click =0;
let xAttempts =[]
let oAttempts =[]

let whoWon = 0;
// console.log(box)

let winningCombination = [ 
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]]

for(let i=0;i<winningCombination.length;i++){
    for(let j=0;j<winningCombination[i].length;j++){
        // console.log(winningCombination[i][j])

    }
}

//iteration 2: onclick function

box.forEach((el,i,arr) => {
    // console.log(el)
    // el.onClick = handleClick
    el.addEventListener("click",handleClick)

});

function handleClick(event){
    // console.log(event.target.id)
    let i =e.target.id
    const p = document.createElement("p")
    message.append(p)
}
