import Card from "./card";
import { useEffect, useState, } from "react";

const Deck = (props) => {
  const [selectedCards, setSelectedCards] = useState([]);

  const receiveIdFromCard = (idOfCard) => {
    if (selectedCards.includes(idOfCard)){
      setSelectedCards([])
      props.sendScore(0);
    }
    else{
    setSelectedCards([...selectedCards, idOfCard])
    props.sendScore(selectedCards.length + 1)
    }
  }
  const arrayOfAllCards = [
  <Card className='card' key='1'   cardID='1'  sendIdToDeck={receiveIdFromCard} image={'Arryn.png'}/>,
  <Card className='card' key='2'   cardID='2'  sendIdToDeck={receiveIdFromCard} image={'Baratheon.png'}/>,
  <Card className='card' key='3'   cardID='3'  sendIdToDeck={receiveIdFromCard} image={'Brynden.png'}/>,
  <Card className='card' key='4'   cardID='4'  sendIdToDeck={receiveIdFromCard} image={'Clegane.png'}/>,
  <Card className='card' key='5'   cardID='5'  sendIdToDeck={receiveIdFromCard} image={'direwolf.png'}/>,
  <Card className='card' key='6'   cardID='6'  sendIdToDeck={receiveIdFromCard} image={'Greyjoy.png'}/>,
  <Card className='card' key='7'   cardID='7'  sendIdToDeck={receiveIdFromCard} image={'Joffrey_Baratheon.png'}/>,
  <Card className='card' key='8'   cardID='8'  sendIdToDeck={receiveIdFromCard} image={'Karstark.png'}/>,
  <Card className='card' key='9'   cardID='9'  sendIdToDeck={receiveIdFromCard} image={'Lannister.png'}/>,
  <Card className='card' key='10'  cardID='10' sendIdToDeck={receiveIdFromCard} image={'Martell.png'}/>,
  <Card className='card' key='11'  cardID='11' sendIdToDeck={receiveIdFromCard} image={'Mormont.png'}/>,
  <Card className='card' key='12'  cardID='12' sendIdToDeck={receiveIdFromCard} image={'Night_Watch.png'}/>,
  <Card className='card' key='13'  cardID='13' sendIdToDeck={receiveIdFromCard} image={'Payne.png'}/>,
  <Card className='card' key='14'  cardID='14' sendIdToDeck={receiveIdFromCard} image={'Stannis_Baratheon.png'}/>,
  <Card className='card' key='15'  cardID='15' sendIdToDeck={receiveIdFromCard} image={'Targaryen.png'}/>,
  <Card className='card' key='16'  cardID='16' sendIdToDeck={receiveIdFromCard} image={'Tully.png'}/>,
  <Card className='card' key='17'  cardID='17' sendIdToDeck={receiveIdFromCard} image={'Tyrell.png'}/> ,   ]
  
  
 // Fisher-Yates (Knuth) shuffle -- Unbiased shuffle
  const shuffle = (array) => {
    let currentIndex = array.length,  randomIndex;
    while (currentIndex !== 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
    return array;
  }
  let cardsToChooseFrom = []
  const cardWithdrawer = (arr) => {
    const array = []
    for (let i = 0; i < props.cardsAllowed; i++) {
      array.push(arr[i])
    }
    cardsToChooseFrom = array
  }

  cardWithdrawer(arrayOfAllCards)

  useEffect(() => {

  })

  return (<div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-6">
      {shuffle(cardsToChooseFrom)}
    </div>
    )
}
export default Deck