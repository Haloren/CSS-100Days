let count = 0;
let countElement = document.getElementById('count')

const countUp = () => {
    count += 1;
    countElement.innerHTML = count;
    countColor(count);
    countTransition();
}

const countDown = () => {
    count -= 1;
    countElement.innerHTML = count;
    countColor(count);
    countTransition();
}

const countColor = (count) => {
    count > 0 ? countElement.style.color = '#91d273' : countElement.style.color = '#b60000';
    count == 0 ? countElement.style.color = '#888888' : null;
}