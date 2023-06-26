const cardArray = [
    {
        name : "card1",
        img: "images/1.png",
    },
    {
        name : "card2",
        img: "images/2.png",
    },
    {
        name : "card3",
        img: "images/3.png",
    },
    {
        name : "card4",
        img: "images/4.png",
    },
    {
        name : "card5",
        img: "images/5.png",
    },
    {
        name : "card6",
        img: "images/6.png",
    },
    {
        name : "card1",
        img: "images/1.png",
    },
    {
        name : "card2",
        img: "images/2.png",
    },
    {
        name : "card3",
        img: "images/3.png",
    },
    {
        name : "card4",
        img: "images/4.png",
    },
    {
        name : "card5",
        img: "images/5.png",
    },
    {
        name : "card6",
        img: "images/6.png",
    }
]

cardArray.sort(()=> 0.5 - Math.random())
// console.log(cardArray); //comment kar sakte ho
const gridDisplay = document.querySelector('#grid')
const cardImage = document.querySelector('cards')
const resultDisplay = document.querySelector('#result')
let cardsChosen = []
let cardsChosenIds = []
const cardsWon = []

function createBoard () {
    for(let i =0 ; i < cardArray.length ; i++){
        const card = document.createElement('img')
        card.setAttribute('src','images/cover.jpg')
        card.setAttribute('data-id',i)
        card.addEventListener('click',flipCard)
        gridDisplay.appendChild(card)
    }
}
createBoard();

function checkMatch (){
    const cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenIds[0]
    const optionTwoId = cardsChosenIds[1]
    console.log(cards);
    console.log('check for match!');
    if(optionOneId == optionTwoId){
        cards[optionOneId].setAttribute('src', 'images/cover.jpg')
        cards[optionTwoId].setAttribute('src', 'images/cover.jpg')
        alert('You have clicked the same image!')
    }
    if (cardsChosen[0] == cardsChosen[1]){
        alert('You found a match!')
        cards[optionOneId].setAttribute('src', 'images/blank.png')
        cards[optionTwoId].setAttribute('src', 'images/blank.png')
        cards[optionOneId].removeEventListener('click',flipCard)
        cards[optionTwoId].removeEventListener('click',flipCard)
        cardsWon.push(cardsChosen)
    } else{
        cards[optionOneId].setAttribute('src', 'images/cover.jpg')
        cards[optionTwoId].setAttribute('src', 'images/cover.jpg')
        alert('Sorry try again!')
    }
    resultDisplay.textContent = cardsWon.length
    cardsChosen = []
    cardsChosenIds = []

    if(cardsWon.length == cardArray.length/2){
        resultDisplay.textContent = 'Congratulations you found them all!!!'
    }
}


function flipCard(){
    let cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenIds.push(cardId)
    console.log(cardsChosen);
    console.log(cardsChosenIds);
    this.setAttribute('src', cardArray[cardId].img)
    if(cardsChosen.length == 2){
        setTimeout(checkMatch , 500)
    }
}