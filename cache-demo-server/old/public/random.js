const cards = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
const suits = ['♠️', '♥️', '♦️', '♣️'];

export function getRandomCard () {
  const cardIndex = Math.floor(Math.random() * cards.length);
  const suitIndex = Math.floor(Math.random() * suits.length);
  return cards[cardIndex] + suits[suitIndex];
}
