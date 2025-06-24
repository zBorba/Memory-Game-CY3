let menu = document.getElementById('menu')
let select = document.getElementById('numCards')
let start = document.getElementById('start')

function urlBuilder(number){
    number += ""

    number = number.padStart(2, '0')

    return `images/heros/card${number}.jpeg`
}

let card = new CardManager(urlBuilder)
let board = new BoardManager("board", 50, card)

for(let i = 4; i <= 10; i += 2){
    let n = i * i
    let op = document.createElement('option')
    op.value = n 
    op.innerHTML = n
    select.appendChild(op)
}



start.addEventListener('click', () => {
   if(board.check()) {
    setTimeout(() => {
     menu.classList.add('hidden')
     board.node.classList.remove('hidden')
     board.fill(select.value);
    }, 2000); 
   }
   
});

