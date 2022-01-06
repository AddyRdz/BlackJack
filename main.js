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
// Deal Card to Player and Dealer
function deal (){
    let length = cards.length
    
            let playerCard = cards.pop()
            playerHand.push(playerCard)
        
            let houseCard = cards.pop()
            dealerHand.push(houseCard)
        
    
}
deal()
console.log(cards)
console.log(playerHand)
console.log(dealerHand)

// Draw Random Card
function drawRandomCard(deck){
    let randomIndex = Math.floor(deck.length * Math.random());
    return deck [randomIndex];
}
console.log(drawRandomCard(deck));



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