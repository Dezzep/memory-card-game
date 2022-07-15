import Card from "./card";
import { useState, } from "react";

const Deck = (props) => {

  const [selectedCards, setSelectedCards] = useState([]);
 
  const receiveIdFromCard = (idOfCard) => {
    if (selectedCards.includes(idOfCard)){
      setSelectedCards([])
      props.sendScore(0);
      //might need to set game over status too.
    }
    else{
    setSelectedCards([...selectedCards, idOfCard])
    props.sendScore(selectedCards.length + 1)
    }
  }
  const arrayOfAllCards = [<Card key='1'  cardID='1'  sendIdToDeck={receiveIdFromCard} image={'Arryn.png'}/>,
  <Card key='2'   cardID='2'  sendIdToDeck={receiveIdFromCard} image={'Baratheon.png'}/>,
  <Card key='3'   cardID='3'  sendIdToDeck={receiveIdFromCard} image={'Brynden.png'}/>,
  <Card key='4'   cardID='4'  sendIdToDeck={receiveIdFromCard} image={'Clegane.png'}/>,
  <Card key='5'   cardID='5'  sendIdToDeck={receiveIdFromCard} image={'direwolf.png'}/>,
  <Card key='6'   cardID='6'  sendIdToDeck={receiveIdFromCard} image={'Greyjoy.png'}/>,
  <Card key='7'   cardID='7'  sendIdToDeck={receiveIdFromCard} image={'Joffrey_Baratheon.png'}/>,
  <Card key='8'   cardID='8'  sendIdToDeck={receiveIdFromCard} image={'Karstark.png'}/>,
  <Card key='9'   cardID='9'  sendIdToDeck={receiveIdFromCard} image={'Lannister.png'}/>,
  <Card key='10'  cardID='10' sendIdToDeck={receiveIdFromCard} image={'Martell.png'}/>,
  <Card key='11'  cardID='11' sendIdToDeck={receiveIdFromCard} image={'Mormont.png'}/>,
  <Card key='12'  cardID='12' sendIdToDeck={receiveIdFromCard} image={'Night_Watch.png'}/>,
  <Card key='13'  cardID='13' sendIdToDeck={receiveIdFromCard} image={'Payne.png'}/>,
  <Card key='14'  cardID='14' sendIdToDeck={receiveIdFromCard} image={'Stannis_Baratheon.png'}/>,
  <Card key='15'  cardID='15' sendIdToDeck={receiveIdFromCard} image={'Targaryen.png'}/>,
  <Card key='16'  cardID='16' sendIdToDeck={receiveIdFromCard} image={'Tully.png'}/>,
  <Card key='17'  cardID='17' sendIdToDeck={receiveIdFromCard} image={'Tyrell.png'}/> ,   ]
  return (<div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-6">
      {arrayOfAllCards}
    </div>
    )
}
export default Deck