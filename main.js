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

// Want to have function that removes random card from deck and returns it. (if, else maybe)
//  need variables 

function dealCards (){

}

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