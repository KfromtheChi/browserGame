// 10 cards, what is on back of cards
let emojis = [
    {
        name: 'cool',
        img: './assets/cool.png'
    },
    {
        name: 'kiss',
        img: './assets/kiss.png'
    },
    {
        name: 'laugh',
        img: './assets/laugh.png'
    },
    {
        name: 'nerd',
        img: './assets/nerd.png'
    },
    {
        name: 'poop',
        img: './assets/poop.png'
    },
    {
        name: 'smile1',
        img: './assets/smile1.png'
    },
    {
        name: 'smile2',
        img: './assets/smile2.png'
    },
    {
        name: 'smile3',
        img: '/assets/smile3.png'
    },
    {
        name: 'smile4',
        img: './assets/smile4.png'
    },
    {
        name: 'swearing',
        img: './assets/swearing.png'
    },
       {
        name: 'cool',
        img: './assets/cool.png'
    },
    {
        name: 'kiss',
        img: './assets/kiss.png'
    },
    {
        name: 'laugh',
        img: './assets/laugh.png'
    },
    {
        name: 'nerd',
        img: './assets/nerd.png'
    },
    {
        name: 'poop',
        img: './assets/poop.png'
    },
    {
        name: 'smile1',
        img: './assets/smile1.png'
    },
    {
        name: 'smile2',
        img: './assets/smile2.png'
    },
    {
        name: 'smile3',
        img: '/assets/smile3.png'
    },
    {
        name: 'smile4',
        img: './assets/smile4.png'
    },
    {
        name: 'swearing',
        img: './assets/swearing.png'
    },
];


const cards = document.querySelectorAll('.card')
let firstCard, secondCard;
let timer = 0;
let matches = []

//target cards - see which cards are being clicked 
cards.forEach((card, i) => {
    card.addEventListener('click', () => {
        console.log('clicked card' + i)
    })
})

//player clicks card 1 and 2 selections - if both cards are empty, select card 1; if card 1 exists, card 2 is selected; if card 2 is selected, check for match
const selectCards = function (selectedCard) {
    if (firstCard === null && secondCard === null) {
        // selected card faces up
        firstCard = selectedCard;
    } else if (firstCard != null) {
        // selected card faces up
        secondCard = selectedCard;
    } else if (secondCard != null) {
        checkForMatch(firstCard, secondCard);
    }
}

const checkForMatch = function (firstCard, secondCard) {
    if (firstCard === secondCard) {
        matches.push(firstCard, secondCard)
        firstCard = null;
        secondCard = null;
        return true;
    } else {
        // selected cards face down
        firstCard = null;
        secondCard = null;
        return false;
    }
}

//if cards match then they remain facing up, if cards don't match they flip back around
// cards are placed randomly face down
const shuffleCards = function () {
    const shuffledEmojis = emojis.sort(() => Math.random() - 0.5);
    cards.forEach((card, idx) => {
        let cardFront = card.querySelector('.frontcard');
        let emojiImg = document.createElement('img');
        emojiImg.src = shuffledEmojis[idx].img;
        cardFront.appendChild(emojiImg);
    })
}
shuffleCards()


// Card shakes on hovering over


//player has to match 10 pairs to win the game before 1min timer is up, if timer runs out game is over.

function render() {
    renderGame();
    renderTime();
    renderMessage()
    playGameBtn.disabled = winner;
}

//if player wins games, winner message is "Yay, you won!"
//if player loses game, loser message is"Boo! You lose!
//if matches.length = 20 = winner

function renderMessage() {
    if (matches.length != 20) {
        message.innerHTML = 'Poo Poo! You Lose!';
    } else {
        message.innerHTML = 'Yay! You Win!';
    }
}

// Track time
setInterval(Time, 1000);




//Play again option for player