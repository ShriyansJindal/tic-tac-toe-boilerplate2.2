const box = document.querySelectorAll(".box")
const result = document.getElementById("result")
const message = document.getElementById("message")
const playAgain = document.getElementById("button")

var click =0;
let xAttempts =[]
let oAttempts =[]

let wonTheGame = 0;
// console.log(box)

let winningCombination = [ 
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]
//iteration 2: onclick function

box.forEach((el,i,arr) => {
    // console.log(el)
    // el.onClick = handleClick
    el.addEventListener("click",handleClick)

});

function handleClick(event){
    // console.log(event.target.id)
    let i =event.target.id
    const p = document.createElement("p")
    p.setAttribute("id",'text')
    box[parseInt(i)-1].append(p)
    //if my click is even or odd
    if(click%2==0){
        p.innerHTML= "X"
        p.style.color = '#FAB201'
        xAttempts.push(parseInt(i-1))
        Declareresult(winningCombination,xAttempts,"X")
    }
    else{
        p.innerHTML = "O"
        p.style.color = '#FAB201'
        oAttempts.push(parseInt(i-1))
        Declareresult(winningCombination,oAttempts,"O")
    }
    // console.log(xAttempts)
    // console.log(oAttempts)
    click++
    //condition for the tie
    if(click == 9 && wonTheGame ==0){
        result.style.visibility = 'visible'
        message.innerHTML = "It's a Tie"
    }
}

// iteration 3: result function
function Declareresult(winningCombination,attempts,player){
    let count =0
    let checker = []
    for(let i=0;i<winningCombination.length;i++){
        if(Array.isArray(winningCombination[i])){
            Declareresult(winningCombination[i],attempts,player);

        }else{
            if(attempts.includes(winningCombination[i])){
                checker.push(true)
                count++
            }
            else{
                checker.push(false)
            }
        }
    }
    if(checker.every(check=> check===true)&& count>2){
        result.style.visibility = 'visible'
        message.innerHTML = "The winner is"+ player +"!"
        wonTheGame =1


    }
}
// iteration 4: restart function
playAgain.onclick = ()=>{
    // location.href = 'index.html'
     history.go(0)

}