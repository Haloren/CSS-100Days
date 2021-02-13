const images = document.querySelectorAll('img')

images.forEach(image => image.addEventListener('click', (e) => {
    e.target.classList.toggle('expand-img');
}))