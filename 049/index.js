const frame = document.getElementById('frame');
const circle = document.getElementById('circle');

frame.addEventListener('mousemove', (e) => {
    e.preventDefault();
    circle.style.transition = 'all .2s';
    circle.style.left = e.offsetX + 'px';
    circle.style.top = e.offsetY + 'px';
});

frame.addEventListener('mouseleave', (e) => {
    e.preventDefault();
    circle.style.transition = 'all .4s';
    circle.style.left = '50%';
    circle.style.top = '50%';
})