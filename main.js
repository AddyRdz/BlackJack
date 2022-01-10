console.log('Cards are loaded')
// Independent Array
const suite = ["♠", "♣", "♥", "♦"];
// console.log(suite)
const cards = [1,2,3,4,5,6,7,8,9,10];
// console.log(cards)

const deck = []
const playerHand = []
const dealerHand = []
let playerScore = 0
let dealerScore = 0

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
    playerHand.push(playerDrawnCard)
    // take the player drawn cards value and put it inside of the div for playerSide
    console.log(".playerSide")
    showPlayerCards(playerHand)

    // Score for Player
    let cardScore = Number(playerDrawnCard.slice(1))
        playerScore+=cardScore
    
    console.log(playerScore)

    // take the dealer drawn cards value and put it inside the div for dealerSide
    let dealerDrawnCard = drawRandomCard()
    console.log(dealerDrawnCard)
    dealerHand.push(dealerDrawnCard)
    console.log(".dealerSide")
    showDealerCards(dealerHand)
    // Score for Dealer
    let cardScoreDealer = Number(dealerDrawnCard.slice(1))
        dealerScore+=cardScoreDealer
    console.log(dealerScore)
    checkForWinner()
}

// Show multiple cards on playerSide
function showPlayerCards(cards){
    const playerDiv =document.querySelector(".playerSide")
    console.log(playerHand)
    console.log(cards)
    playerDiv.innerText = ""
    for (let i = 0;i<cards.length;i++){
        playerDiv.innerText += cards[i]
    }
}

// Show multiple cards on dealerSide
function showDealerCards(cards){
    const dealerDiv =document.querySelector(".dealerSide")
    console.log(dealerHand)
    console.log(cards)
    dealerDiv.innerText = ""
    for (let i = 0;i<cards.length;i++){
        dealerDiv.innerText += cards[i]
    }
}

// winning Conditions
function checkForWinner() {
    if (playerScore > 21) {
        console.log ("Bust! You lose! House wins!")
        winner.innerText = "Bust! You lose! House wins!"
    } else if (playerScore === 21) {
        console.log ("Blackjack! You win! House Loses!")
        winner.innerText= "Blackjack! You win! House Loses!"
    } else if (dealerScore > 21) {
        console.log ("Bust! House loses! You win!")
        winner.innerText= "Bust! House loses! You win!"
    }else if (dealerScore === 21) {
        console.log ("Blackjack! House Wins! You lose!")
        winner.innerText= "Blackjack! House Wins! You lose!"
    }else if (dealerScore === 21 && playerScore === 21){
        console.log ("Tie!")
        winner.innerText= "Tie!"
    }else if (dealerScore > playerScore && dealerScore >16 && dealerScore <=21) {
        console.log ("House wins! You lose!")
        winner.innerText= "House wins! You lose!"
    }else if (playerScore > dealerScore && playerScore >16 && playerScore <=21) {
        console.log ("You win! House loses!")
        winner.innerText= "You win! House loses!"
    }
}

const winner =document.querySelector('.winner')
console.log(winner)

// Restart Button Function
function pressRestart(){
    return location.reload()

}
//  Hold Button Function
function pressHold(){
    console.log(pressHold)
}



// console.log(deck)
// deal()
// console.log(dealerHand)
// console.log(drawRandomCard(deck));


// button Hit Me
const buttonHitMe =document.querySelector(".buttonHitMe")
console.log(buttonHitMe)
buttonHitMe.addEventListener("click",pressHitMe)


// button Restart
const buttonRestart =document.querySelector(".buttonRestart")
console.log(buttonRestart)
buttonRestart.addEventListener("click",pressRestart)

