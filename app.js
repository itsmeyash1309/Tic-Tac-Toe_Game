const boxes = document.querySelectorAll(".boxes");
const displaypara = document.querySelector("#displaypara");
const display = document.querySelector(".display");
const resetBtn = document.querySelector("#resetBtn");
const visibility = document.querySelector(".visibility");
let moves = 0;

let winner;
let turn = true; //true => turn of X

const winPatterns = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
];


//initial text on display
displaypara.innerText = `X will play first`;



for (const box of boxes) {

    box.addEventListener("click", () => {
        if (box.innerText !== "" || won) return;

        box.innerText = turn ? "X" : "O";

        turn = !turn;
        moves++;


        if (turn) {
            displaypara.innerText = `it's X's turn`;
        }
        else displaypara.innerText = `it's O's turn`;

        checkWinner();

    })


}
let won = false;

function checkWinner() {
    for (const pattern of winPatterns) {


        pos1Val = boxes[pattern[0]].innerText;
        pos2Val = boxes[pattern[1]].innerText;
        pos3Val = boxes[pattern[2]].innerText;
        if (pos1Val != '' && pos2Val != '' && pos3Val != '') {

            if (pos1Val === pos2Val && pos2Val === pos3Val) {

                for (box of boxes) { box.disabled = true; }
                displaypara.innerText = `${pos1Val} wins the game!`;
                won = true;
                return;
            }
        }
    }
    if (won === false && moves === 9) {
        displaypara.innerText = `it's a Draw!`;
        for (box of boxes) box.disabled = true;
    }

}

resetBtn.addEventListener("click", () => {
    for (box of boxes) {

        box.disabled = false;
        box.innerText = "";
        displaypara.innerText = `X will play first`;
        turn = true;
        won = false;
    }

})