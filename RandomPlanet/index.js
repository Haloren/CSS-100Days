const center = document.querySelector('.center');

const planets = [
    ['Mercury', 'https://raw.githubusercontent.com/Haloren/CSS-100Days/main/RandomPlanet/images/1Mercury.jpg'],
    ['Venus', 'https://raw.githubusercontent.com/Haloren/CSS-100Days/main/RandomPlanet/images/2Venus.jpg'],
    ['Earth', 'https://raw.githubusercontent.com/Haloren/CSS-100Days/main/RandomPlanet/images/3Earth.jpg'],
    ['Mars', 'https://raw.githubusercontent.com/Haloren/CSS-100Days/main/RandomPlanet/images/4Mars.jpg'],
    ['Jupiter', 'https://raw.githubusercontent.com/Haloren/CSS-100Days/main/RandomPlanet/images/5Jupiter.jpg'],
    ['Saturn', 'https://raw.githubusercontent.com/Haloren/CSS-100Days/main/RandomPlanet/images/6Saturn.png'],
    ['Uranus', 'https://raw.githubusercontent.com/Haloren/CSS-100Days/main/RandomPlanet/images/7Uranus.jpg'],
    ['Neptune', 'https://raw.githubusercontent.com/Haloren/CSS-100Days/main/RandomPlanet/images/8Neptune.jpg'],
    ['Pluto', 'https://raw.githubusercontent.com/Haloren/CSS-100Days/main/RandomPlanet/images/Pluto.jpg']
]

planetCard = () => {
    let title = planets[0][0]
    let image = planets[0][1]

    let h1 = document.createElement('h1');
    h1.setAttribute('class', 'planetTitle')
    h1.setAttribute('id', 'planetTitle')
    h1.innerHTML = title

    let img = document.createElement('img');
    img.setAttribute('class', 'planetImage')
    img.setAttribute('id', 'planetImage')
    img.src = image
    img.alt = 'Planet '+ title

    center.appendChild(h1)
    center.appendChild(img)
    center.style.opacity = '1'
}

indexCounter = () => {
    let indexCount = 0;
    setInterval(() => {
        indexCount++;
        console.log(indexCount)
        if(indexCount >= 9)  { indexCount = -1; }
        changePlanet(indexCount)
    }, 4000)
}

changePlanet = (newIndex) => {
    let title = document.getElementById('planetTitle')
    let image = document.getElementById('planetImage')

    title.innerHTML = planets[newIndex][0]
    image.src = planets[newIndex][1]
    image.alt = 'Planet '+ planets[newIndex][0]

    center.style.opacity === '0' ? center.style.opacity = '1' : center.style.opacity = '0'
}

planetCard();
indexCounter();