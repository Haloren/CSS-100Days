const frame = document.getElementById('frame');
const circle = document.getElementById('circle');

document.addEventListener('mousemove', (e) => {
    e.preventDefault();
    circle.style.transition = 'all .2s';
    circle.style.left = e.offsetX + 'px';
    circle.style.top = e.offsetY + 'px';
});