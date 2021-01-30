function on() {
    elements = document.getElementsByClassName('color');
    let i;
    for(i = 0; i < elements.length; i++){
        elements[i].style.backgroundColor = "var(--off)";
        elements[i].style.boxShadow = "none";
    }
}

function off() {
    elements = document.getElementsByClassName('color');
    let i;
    for(i = 0; i < elements.length; i++){
        elements[i].style.backgroundColor = "var(--yellow)";
        elements[i].style.boxShadow = "0px -30px 100px 10px var(--yellow)";
    }
}