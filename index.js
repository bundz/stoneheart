const Card = require("./src/card");
const Deck = require("./src/deck");
const Player = require("./src/player");
const CardLoader = require("./src/cardLoader");
const cardsJson = require("./database/cards.json");
const Hunter = require("./src/hunter");
const Mage = require("./src/mage");
const Match = require("./src/match");

const cardLoader = new CardLoader(cardsJson);
const cardList = [1,1,2,2];
const cards = cardLoader.generateCards(cardList);
const deck = new Deck(cards);

const hunter = new Hunter(1, 'Muras', deck);
const mage = new Mage(1, 'LAELAGP', deck);
const match = new Match(hunter, mage);

hunter.setMatch(match);
mage.setMatch(match);
hunter.setOponent(mage)
mage.setOponent(hunter)

match.start();

const currentPlayer = match.getCurrentPlayer();

console.log(match.getCurrentPlayer().name);

currentPlayer.passTurn();

console.log(match.getCurrentPlayer().name);





// const cardList = [1,1,2,2,3,4,5,5,5,5,5,5];
// const cards = CardLoader.generateCards(cardList);
// const deck = new Deck(cards);
// const player = new Player(deck);
