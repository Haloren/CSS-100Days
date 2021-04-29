const show = () => {
    document.querySelector('.right').style.display = '';
    document.querySelector('.bottom').style.display = '';
    document.querySelector('.left').style.display = '';
    document.querySelector('.top').style.display = '';
}

const clearShow = () => {
    document.querySelector('.right').style.display = 'none';
    document.querySelector('.bottom').style.display = 'none';
    document.querySelector('.left').style.display = 'none';
    document.querySelector('.top').style.display = 'none';
}