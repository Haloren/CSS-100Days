const center = document.querySelector('.center');

const planets = [
    ['Mercury', 'https://raw.githubusercontent.com/Haloren/CSS-100Days/main/073/images/1Mercury.jpg'],
    ['Venus', 'https://raw.githubusercontent.com/Haloren/CSS-100Days/main/073/images/2Venus.jpg'],
    ['Earth', 'https://raw.githubusercontent.com/Haloren/CSS-100Days/main/073/images/3Earth.jpg'],
    ['Mars', 'https://raw.githubusercontent.com/Haloren/CSS-100Days/main/073/images/4Mars.jpg'],
    ['Jupiter', 'https://raw.githubusercontent.com/Haloren/CSS-100Days/main/073/images/5Jupiter.jpg'],
    ['Saturn', 'https://raw.githubusercontent.com/Haloren/CSS-100Days/main/073/images/6Saturn.png'],
    ['Uranus', 'https://raw.githubusercontent.com/Haloren/CSS-100Days/main/073/images/7Uranus.jpg'],
    ['Neptune', 'https://raw.githubusercontent.com/Haloren/CSS-100Days/main/073/images/8Neptune.jpg'],
    ['Pluto', 'https://raw.githubusercontent.com/Haloren/CSS-100Days/main/073/images/Pluto.jpg']
]

renderPlanetCard = () => {
    let title = planets[5][0]
    let image = planets[5][1]

    let h1 = document.createElement('h1');
    h1.setAttribute('class', 'planetTitle')
    h1.innerHTML = title

    let img = document.createElement('img');
    img.setAttribute('class', 'planetImage')
    img.src = image
    img.alt = 'Planet ' + title

    center.appendChild(h1)
    center.appendChild(img)
}

renderPlanetCard();