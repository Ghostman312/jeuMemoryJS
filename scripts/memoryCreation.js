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
            tr.appendChild(td.appendChild(img));
        }
        document.getElementById("memory").appendChild(tr);
    }
}
let cards = [];
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


