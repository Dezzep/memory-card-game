import Card from "./card";
import { useState, useEffect } from "react";

const Deck = () => {

  const [selectedCards, setSelectedCards] = useState([]);
 
  const receiveIdFromCard = (idOfCard) => {
    setSelectedCards([...selectedCards, idOfCard])
  }

  return (<div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-6">
  <p className="bg-black text-white">{selectedCards}</p>
  <Card cardID='1'  sendIdToDeck={receiveIdFromCard} image={'Arryn.png'}/>
  <Card cardID='2'  sendIdToDeck={receiveIdFromCard} image={'Baratheon.png'}/>
  <Card cardID='3'  sendIdToDeck={receiveIdFromCard} image={'Brynden.png'}/>
  <Card cardID='4'  sendIdToDeck={receiveIdFromCard} image={'Clegane.png'}/>
  <Card cardID='5'  sendIdToDeck={receiveIdFromCard} image={'direwolf.png'}/>
  <Card cardID='6'  sendIdToDeck={receiveIdFromCard} image={'Greyjoy.png'}/>
  <Card cardID='7'  sendIdToDeck={receiveIdFromCard} image={'Joffrey_Baratheon.png'}/>
  <Card cardID='8'  sendIdToDeck={receiveIdFromCard} image={'Karstark.png'}/>
  <Card cardID='9'  sendIdToDeck={receiveIdFromCard} image={'Lannister.png'}/>
  <Card cardID='10' sendIdToDeck={receiveIdFromCard} image={'Martell.png'}/>
  <Card cardID='11' sendIdToDeck={receiveIdFromCard} image={'Mormont.png'}/>
  <Card cardID='12' sendIdToDeck={receiveIdFromCard} image={'Night_Watch.png'}/>
  <Card cardID='13' sendIdToDeck={receiveIdFromCard} image={'Payne.png'}/>
  <Card cardID='14' sendIdToDeck={receiveIdFromCard} image={'Stannis_Baratheon.png'}/>
  <Card cardID='15' sendIdToDeck={receiveIdFromCard} image={'Targaryen.png'}/>
  <Card cardID='16' sendIdToDeck={receiveIdFromCard} image={'Tully.png'}/>
  <Card cardID='17' sendIdToDeck={receiveIdFromCard} image={'Tyrell.png'}/>    
    </div>
    
    )
}
export default Deck