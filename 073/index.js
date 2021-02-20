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
    let h1 = document.createElement('h1');
    h1.setAttribute('id', 'planetName')
    h1.innerHTML = planets[2][0]

    let img = document.createElement('img');
    img.setAttribute('id', 'planetImage')
    img.src = planets[2][1]

    center.appendChild(h1)
    center.appendChild(img)
}

renderPlanetCard();