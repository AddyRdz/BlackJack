console.log('Cards are loaded')
// Independent Array
const suite = ["Spade", "Club", "Diamond", "Hearts"];
// console.log(suite)
const cards = [1,2,3,4,5,6,7,8,9,10];
// console.log(cards)

const deck = []
const playerHand = []
const dealerHand = []

// Calling the function
for(let i=0; i<suite.length;i++){
    // console.log(suite[i])
}


for (let i=0; i<cards.length;i++){
    // console.log(cards[i])
}

// Create Deck
for (let i=0; i<suite.length;i++){
    for(let j=0; j<cards.length;j++){
        // console.log(suite[i]+cards[j])
        deck.push(suite[i]+cards[j])
    }
}

function splitDeck (){
    let length = cards.length
    for (let i=0; i<length;i++){
        if (i % 2 == 0) {
            let currentValue = cards.pop()
            playerHand.push(currentValue)
        }else {
            let currentValue = cards.pop()
            dealerHand.push(currentValue)
        }
    }
}
splitDeck()
console.log(cards)
console.log(playerHand)
console.log(dealerHand)


// first goal -
// inside of make deck
// use a for loop to loop over each card in your 'deck' variable
// inside the for loop - use an if else statement
// if the i variable is even (0, 2, 4, 6, 8) - take the value and add it playerHand array
function playerTurn() {
    for (let i = 0; i<=10; i++) {
        
    } if (i % 2 == 0){

    }
}
// else add it the computerHand array
// write a 'playerTurn' function
// grab the last item of the playerhand and store it in a variable
// grab the last item of the computerHand and store it in a variable
// use a console log to compare them
// write an if check for comparing the two cards (maybe by last character ie a number)
// pop function


// Want to have function that removes random card from deck and returns it. (if, else maybe)
//  need variables 

// function dealCards (){

// }

// Eventually must do randomChoice ie. math.floor(math.random)

// for each button need the queryselector and a eventhandler function
// button Hit Me
// const buttonHitMe =document.querySelector('.buttonHitMe')
// console.log(buttonHitMe)
// buttonHitMe.addEventListener("click",eventHandler)
// function 

// button Restart
// const buttonRestart =document.querySelector('buttonRestart')
// console.log(buttonRestart)
// buttonRestart.addEventListener("click",eventHandler)
// function

// button Hold
// const buttonHold =document.querySelector('buttonHold')
// console.log(buttonHold)
// buttonRestart.addEventListener("click",eventHadler)
// function