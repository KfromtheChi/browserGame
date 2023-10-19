// 10 cards, what is on back of cards
let emojis = [
  {
    name: "cool",
    img: "./assets/cool.png",
  },
  {
    name: "kiss",
    img: "./assets/kiss.png",
  },
  {
    name: "laugh",
    img: "./assets/laugh.png",
  },
  {
    name: "nerd",
    img: "./assets/nerd.png",
  },
  {
    name: "poop",
    img: "./assets/poop.png",
  },
  {
    name: "smile1",
    img: "./assets/smile1.png",
  },
  {
    name: "smile2",
    img: "./assets/smile2.png",
  },
  {
    name: "smile3",
    img: "./assets/smile3.png",
  },
  {
    name: "smile4",
    img: "./assets/smile4.png",
  },
  {
    name: "swearing",
    img: "./assets/swearing.png",
  },
  {
    name: "cool",
    img: "./assets/cool.png",
  },
  {
    name: "kiss",
    img: "./assets/kiss.png",
  },
  {
    name: "laugh",
    img: "./assets/laugh.png",
  },
  {
    name: "nerd",
    img: "./assets/nerd.png",
  },
  {
    name: "poop",
    img: "./assets/poop.png",
  },
  {
    name: "smile1",
    img: "./assets/smile1.png",
  },
  {
    name: "smile2",
    img: "./assets/smile2.png",
  },
  {
    name: "smile3",
    img: "./assets/smile3.png",
  },
  {
    name: "smile4",
    img: "./assets/smile4.png",
  },
  {
    name: "swearing",
    img: "./assets/swearing.png",
  },
];

const cards = document.querySelectorAll(".card");
let selectedCards = [];
let matches = [];

//target cards - see which cards are being clicked
cards.forEach((card, i) => {
  card.addEventListener("click", (e) => {
    let cardFront = card.querySelector(".frontcard");
    if (card.classList.contains("clicked")) return;
    card.classList.add("clicked");

    selectCards(card);
  });
});

//player clicks card 1 and 2 selections - if both cards are empty, select card 1; if card 1 exists, card 2 is selected; if card 2 is selected, check for match
const selectCards = function (selectedCard) {
  selectedCards.push(selectedCard);
  if (selectedCards.length === 2)
    checkForMatch(selectedCards[0], selectedCards[1]);
};

const checkForMatch = function (firstCard, secondCard) {
  //console.log(selectedCards);
  let cardNameA = firstCard.querySelector(".frontcard").classList[1];
  let cardNameB = secondCard.querySelector(".frontcard").classList[1];
  console.log(cardNameA, cardNameB);
  if (cardNameA === cardNameB) {
    matches.push(cardNameA, cardNameB);
    console.log("match");
    check4Win();
  } else {
    // selected cards face down
    setTimeout(() => {
      firstCard.classList.remove("clicked");
      secondCard.classList.remove("clicked");
      check4Win();
    }, 300);

    console.log("not a match");
  }
  selectedCards = [];
};

//if cards match then they remain facing up, if cards don't match they flip back around
// cards are placed randomly face down
const shuffleCards = function () {
  const shuffledEmojis = emojis.sort(() => Math.random() - 0.5);
  cards.forEach((card, idx) => {
    let cardFront = card.querySelector(".frontcard");
    let emojiImg = document.createElement("img");
    emojiImg.src = shuffledEmojis[idx].img;
    cardFront.classList.add(shuffledEmojis[idx].name);
    cardFront.appendChild(emojiImg);
    emojiImg.style.width = "7vh";
  });
};

// Card shakes on hovering over

//if player wins games, winner message is "Yay, you won!"
//if player loses game, loser message is"Boo! You lose!
//if matches.length = 20 = winner

const gameEl = document.getElementById("#game");
const message = document.getElementById("message");

function check4Win() {
  if (matches.length != 20 && seconds === 0) {
    message.innerHTML = "Poo Poo You Lose!";
    message.style.display = "flex";
    cards.forEach((card) => card.classList.add("clicked"));
  } else if (matches.length === 20) {
    message.innerHTML = "Yay! You Win!";
    message.style.display = "flex";
  }
}

// Timer
let timer = document.querySelector(".timer");
let seconds = 60;
let gameOver = true;

function startTimer() {
  timer.querySelector("span").innerText = "1:00";
  seconds = 60;
  let countdown = setInterval(() => {
    seconds--;
    timer.querySelector("span").innerText =
      "0:" + seconds.toLocaleString(undefined, { minimumIntegerDigits: 2 });
    if (seconds === 0 || matches.length === 20) {
      clearInterval(countdown);
      gameOver = true;
      check4Win();
    }
  }, 1000);
}

//Paky game - Play button and play again feature - ste variable for play button (playBtn.addEventListener('click', startTimer function))
const startButton = document.querySelector("#startButton");

startButton.addEventListener("click", () => {
  if (gameOver === true) {
    clearBoard();
    shuffleCards();
    startTimer();
  }
  return;
});

const clearBoard = () => {
  gameOver = false;
  cards.forEach((card) => {
    card.classList.remove("clicked");
    let cardFront = card.querySelector(".frontcard");
    cardFront.classList.remove(cardFront.classList[1]);
  });
  matches = [];
  message.innerHTML = "";
  message.style.display = "none";
};
