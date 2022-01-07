console.log('Cards are loaded')
// Independent Array
const suite = ["♠", "♣", "♥", "♦"];
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

// Draw Random Card
function drawRandomCard(){
    let randomIndex = Math.floor(deck.length * Math.random());
    return deck [randomIndex];
}

//  HitMe Button Function
function pressHitMe(){
    let playerDrawnCard = drawRandomCard ()
    // console.log("pressHitMeWasCalled")
    console.log(playerDrawnCard)
    // take the drawn cards value and put it inside of the div for playerHand
    const playerDiv =document.querySelector(".playerSide")
    console.log(".playerSide")
    playerDiv.innerText = playerDrawnCard
    // take the drawn cards value and put it inside the div for dealerSide
    let dealerDrawnCard = drawRandomCard()
    console.log(dealerDrawnCard)
    const dealerDiv = document.querySelector(".dealerSide")
    console.log(".dealerSide")
    dealerDiv.innerText = dealerDrawnCard
}

// let dc =math
// Do I need an if/else statement, after pressing the hold button I will press the hit me button and it will add to the dealerSide?


// function isPlayerTurn(){
//     const pl1 = document.createElement("div")
//     const randomPlayerChoice = Math.floor(Math.random()*deck.length)
// }

// Restart Button Function
function pressRestart(){
    return location.reload()

}

function pressHold(){
    console.log(pressHold)
}

function winnerCheck(){

}


console.log(deck)
deal()
console.log(cards)
console.log(playerHand)
console.log(dealerHand)
console.log(drawRandomCard(deck));





// button Hit Me
const buttonHitMe =document.querySelector(".buttonHitMe")
console.log(buttonHitMe)
buttonHitMe.addEventListener("click",pressHitMe)


// button Restart
const buttonRestart =document.querySelector(".buttonRestart")
console.log(buttonRestart)
buttonRestart.addEventListener("click",pressRestart)


// button Hold
const buttonHold =document.querySelector(".buttonHold")
console.log(buttonHold)
buttonRestart.addEventListener("click",pressHold)
