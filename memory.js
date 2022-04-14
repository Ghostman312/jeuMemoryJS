/*-------------Sélection de la catégorie-------------*/

let selectedCategory = "le-hobbit";

/*-------------Script de création du jeu-------------*/

let tr;
let td;
let img;
let src;
let id =0;
if (selectedCategory == "le-hobbit"){
    for (let i = 0; i < 6; i++){
        tr = document.createElement("tr");
        for(let j = 0; j < 6; j++){
            src = "imgs/backcover.png";
            img = document.createElement("img");
            img.setAttributeNode(document.createAttribute("src"));
            img.setAttribute("src", src);
            img.setAttributeNode(document.createAttribute("id"));
            img.setAttribute("id", id);
            id++;
            img.setAttributeNode(document.createAttribute("width"));
            img.setAttribute("width", "150");
            td = document.createElement("td");
            td.appendChild(img);
            tr.appendChild(td);
        }
        document.getElementById("memory").appendChild(tr);
    }
}
var cards = [];
let m = 0;
let n;
for (let i = 1 ; i < 3; i++){
    n=0;
    for (let j = 1; j < 19; j++){
        cards[m] = n;
        m++;
        n++;
    }
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}
//Je l'avoue, cette fonction de tri aléatoire de tableau n'est pas de moi, je n'avais aucune idée de comment la faire. 
//Elle provient de ce site : https://fr.code-paper.com/javascript/examples-javascript-random-sort-array

/*-------------Script d'initialisation du jeu-------------*/

shuffleArray(cards);
console.log(cards);

function showAlert(i)
{
  console.log("Evènement de click détecté"+i);
}

let selectedCard;
let secondSelectedCard;
let reset = 0;
let end;
let score;
let result;
let roundStatus;
for (let i = 0; i < 36; i++){
    let imgClick = document.getElementById(i);
    imgClick.addEventListener("mousedown", Click);
    imgClick.addEventListener("mouseup", ResetIfNeeded);
}

function Delay(delay) {
    var start = new Date().getTime();
    while (new Date().getTime() < start + delay);
}

function ImgReset(image)
{
    image.src = "imgs/backcover.png";
}
function ImgChange(image)
{
    image.src = "imgs/characters/"+cards[image.id]+".png";
}

function Click(event)
{
    let clicked = this;
    debugger;
    if (clicked.getAttribute("src") == "imgs/backcover.png"){
        ImgChange(clicked);
        if (selectedCard != undefined && selectedCard != clicked){
            if (cards[selectedCard.id] == cards[clicked.id]){
                document.getElementById("score").innerText = Number(document.getElementById("score").innerText) + 5;
                console.log(cards[selectedCard.id]+ " and " + cards[clicked.id]);
                roundStatus=1;
                selectedCard = undefined;
            }
            else{
                document.getElementById("score").innerText --;
                secondSelectedCard = clicked;
            }
        }
        if (selectedCard == undefined && roundStatus != 1){
            selectedCard = clicked;
        }
        end = 0;
        for (let i = 0; i < 36; i++){
            img = document.getElementById(i)
            if (!(img.src.indexOf("imgs/backcover.png"))){
                end += 1;
            }
        }
        roundStatus=0;
    }
}
function ResetIfNeeded(event){
    if (secondSelectedCard != undefined){
        Delay(1500);
        ImgReset(selectedCard);
        ImgReset(secondSelectedCard);
        secondSelectedCard = undefined;
        selectedCard = undefined;
        if (end >= 36){
            document.getElementById("memory").remove();
            score = document.getElementById("score").innerText;
            document.getElementById("scoreDiv").remove();
            result = document.createElement("h2").innerText = "Score final : "+ score;
            result.class = "result";
        }
    }
}