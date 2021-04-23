title = ['The couch', 'Failing is learning', 'Flowers and rainbows']
quote = [   'If you want to grow, get outside your comfort zone.', 
            'Pick yourself up, dust yourself off, and start again.', 
            'Always be yourself, unless you can be a unicorn.'
        ]
card = document.getElementById('card');
cardNumber = document.getElementById('pg-number');
cardTitle = document.getElementById('title');
cardQuote = document.getElementById('quote');

const addContent = (index) => {
    cardNumber.value = index;
}