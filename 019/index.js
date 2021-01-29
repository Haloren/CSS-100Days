const frame = document.getElementById('frame');
console.log(document.body.style.backgroundColor)

changeColor = (color) => {
    document.body.style.backgroundColor = color.value;
    // let color = frame.style.backgroundColor;
    // switch(color){
    //     case 'black':
    //         color = "#000";
    //     case 'white':
    //         color = "#fff";
    //     case 'red':
    //         color = "#ff0000";
    // }
    // frame.style.backgroundColor = color;
}
