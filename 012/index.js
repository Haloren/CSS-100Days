const container = document.querySelector('.definition-container')

const show = () => { 
    container.classList.remove("hide");
    container.classList.add("show");
}

const hide = () => { 
    container.classList.remove("show"); 
    container.classList.add("hide");
}