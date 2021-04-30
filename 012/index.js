const show = () => { 
    document.querySelector('.definition-container').classList.remove("hide");
    document.querySelector('.definition-container').classList.add("show");
}

const hide = () => { 
    document.querySelector('.definition-container').classList.remove("show"); 
    document.querySelector('.definition-container').classList.add("hide");
}