console.log("Welcome to tic tac toe")
let turn = "X";

const boxes = document.querySelectorAll(".box")
const turnInfo = document.querySelector(".info")
const container = document.querySelector(".container")
let isWinner = false;

const changeTurn  = () => {
    if(turn === "X"){turn = "0";} else{turn = "X";}
    return turn;
}
// 

Array.from(boxes).forEach(box =>{
    box.addEventListener("click", () => {
        box.querySelector(".boxtext").innerText = turn;
        if(checkWin()){
            turnInfo.innerText = `${turn} WONN!!!!!`;
            container.style.pointerEvents = "none";
            document.querySelector(".imgbox img").style.display = "block";
            turnInfo.style.fontSize = "6rem"
        } else{
            changeTurn();
            turnInfo.innerText = `Turn for ${turn}`;
        }
    })
})

const checkWin = () =>{
    const winSeries = [
        [1,2,3],
        [4,5,6],
        [7,8,9],
        [1,4,7],
        [2,5,8],
        [3,6,9],
        [1,5,9],
        [3,5,7]
    ]

    winSeries.forEach( comb => {
        if(boxes[comb[0]-1].innerText === boxes[comb[1]-1].innerText && boxes[comb[1]-1].innerText === boxes[comb[2]-1].innerText && boxes[comb[1]-1].innerText !== ''){
            console.log("wonnn")
            isWinner =  true;
            
        }
    })

    return isWinner
}

const reset = document.querySelector("#reset");

reset.addEventListener("click", () => {
    location.reload();
})

