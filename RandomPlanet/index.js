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
}

indexCounter = () => {
    let indexCount = 0;
    setInterval(() => {
        indexCount++;
        console.log(indexCount)
        if(indexCount >= 8)  { indexCount = -1; }
    }, 4000)
}

newIndex = () => Math.floor(Math.random() * Math.floor(8))

changePlanet = (newIndex) => {
    let title = document.getElementById('planetTitle')
    let image = document.getElementById('planetImage')

    title.innerHTML = planets[newIndex][0]
    image.src = planets[newIndex][1]
    image.alt = 'Planet '+ planets[newIndex][0]
}

planetCard();