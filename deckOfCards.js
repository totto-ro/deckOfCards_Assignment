let suits = ['Clubs', 'Hearts', 'Diamonds', 'Spades'];
let values = ['Ace', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King'];
let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

class Card{
    constructor( suit, value, num ){
        this._suit = suit;
        this._value = value;
        this._num = num
    }
    show(){
        console.log(`Card: ${this._suit[1]} of ${this._value[0]}, with value of: ${this._num[0]}` );
    }
}

let cardShow = new Card( suits, values, nums );
console.log( cardShow );
cardShow.show();

console.log("---------------------------------------------------------");

    class Deck {
        constructor() {
            this.deck = [];
        }
    
        reset() {
            this.deck = [];
    
            for (let suit of suits) {
                for (let value of values) {
                    this.deck.push(`${ value } of ${ suit }`);
                }
            }
            return this;
        }
    
        shuffle() {
            let m = this.deck.length, t, i;
            while (m) {
                i = Math.floor(Math.random() * m--);
                t = this.deck[m];
                this.deck[m] = this.deck[i];
                this.deck[i] = t;
            }
            return this;
        }
    
        deal() {
            return this.deck.pop();
        }
    
    }
    
    class Player {
        constructor(name) {
            this.name = name;
            this.hand = [];
        }
    
        draw(deck) {
            this.hand.push(deck.deal());
            return this;
        }
    
        discard() {
            this.hand.pop();
            return this;
        }
    }
    
    let deck1 = new Deck();
    deck1.reset().shuffle();
    console.log(deck1);
    
    console.log("---------------------------------------------------------");

    let player1 = new Player("Ana");
    player1.draw(deck1).draw(deck1).draw(deck1);
    console.log(player1);
    let player2 = new Player("David");
    player2.draw(deck1).draw(deck1).draw(deck1).draw(deck1).draw(deck1);
    console.log(player2);
    console.log(deck1);
    
    
