shuffleArray(cards);
console.log(cards);

function showAlert(i)
{
  console.log("Evènement de click détecté"+i);
}

let imgClick;
for (let i = 0; i < 37; i++){
    imgClick = document.getElementById(i);
    imgClick.addEventListener("click", Click);
}

let selectedCard;
function Click(event){
    
    let clicked = event.currentTarget;
    clicked.setAttribute("src", "imgs/characters/"+cards[clicked.id]+".png")
    selectedCard = clicked.id;
}