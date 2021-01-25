let alien = [
    128, 129, 130, 131,
    147, 148, 149, 150, 151, 152,
    166, 167, 169, 170, 172, 173,
    185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 
    205, 206, 207, 208, 211, 212, 213, 214,
    227, 228, 229, 230, 231, 232,
    246, 247, 252, 253,
    265, 267, 268, 271, 272, 274
]

let i;
for (i = 0; i < 400; i++) {
    const div = document.createElement("div")
    // div.setAttribute("onclick", "toggle();")

        // DRAW THE ALIEN 
        if (alien.includes(i)) {
            div.setAttribute("class", "white-square")
        } else {
            div.setAttribute("class", "orange-square")
        }
    document.getElementById("grid").appendChild(div);

    // TOGGLE ORANGE AND WHITE
    div.addEventListener("click", (e) => {
        e.target.classList.toggle("white-square");
    });
}