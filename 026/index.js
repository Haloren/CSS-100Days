title = ['The couch', 'Failing is learning', 'Flowers and rainbows']
quote = [   'If you want to grow, get outside your comfort zone.', 
            'Pick yourself up, dust yourself off, and start again.', 
            'Always be yourself, <br> unless you can be a unicorn.'
        ]

center = document.getElementById('center');
card = document.getElementById('card');
cardNumber = document.getElementById('card-number');
cardTitle = document.getElementById('title');
cardQuote = document.getElementById('quote');

let count = 0;
getIndex = () => {
    count < title.length - 1 ? count++ : count=0;
    return count
}

const createQuote = (num) => {
    let index = num;
    cardNumber.innerHTML = index + 1;
    cardTitle.innerHTML = title[index];
    cardQuote.innerHTML = quote[index];
    
    //Re-runs css card loading animation
    card.classList.remove('switch');
    void card.offsetWidth;
    card.classList.add('switch');
}

createQuote(0);