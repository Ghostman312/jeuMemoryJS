let img;
let src;
let id;
if (selectedCategory == "le-hobbit"){
    for (let i = 1; i < 37; i++){
        src = "imgs/backcover.png";
        id = "img"+i;
        img = document.createElement("img");
        img.setAttributeNode(document.createAttribute("src"));
        img.setAttribute("src", src);
        img.setAttributeNode(document.createAttribute("id"));
        img.setAttribute("id", id);
        img.setAttributeNode(document.createAttribute("width"));
        img.setAttribute("width", "150");
        document.getElementById("memory").appendChild(img);
    }
}