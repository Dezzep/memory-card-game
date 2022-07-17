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
  <Card className='card' key='1'  title='Cartman'             cardID='1'  sendIdToDeck={receiveIdFromCard} image={'eric-cartman.png'}/>,
  <Card className='card' key='2'  title='Kenny'               cardID='2'  sendIdToDeck={receiveIdFromCard} image={'kenny-mccormick.png'}/>,
  <Card className='card' key='3'  title='Kyle'                cardID='3'  sendIdToDeck={receiveIdFromCard} image={'kyle-broflovski.png'}/>,
  <Card className='card' key='4'  title='Stan'                cardID='4'  sendIdToDeck={receiveIdFromCard} image={'stan-marsh.png'}/>,
  <Card className='card' key='5'  title='Chef'                cardID='5'  sendIdToDeck={receiveIdFromCard} image={'/adults/chef.png'}/>,
  <Card className='card' key='6'  title='Gerald'              cardID='6'  sendIdToDeck={receiveIdFromCard} image={'/adults/gerald-broflovski.png'}/>,
  <Card className='card' key='7'  title='Mrs Cartman'         cardID='7'  sendIdToDeck={receiveIdFromCard} image={'/adults/liane-cartman.png'}/>,
  <Card className='card' key='8'  title='Mr Mackey'           cardID='8'  sendIdToDeck={receiveIdFromCard} image={'/adults/mackey.png'}/>,
  <Card className='card' key='9'  title='Mr Garrison'         cardID='9'  sendIdToDeck={receiveIdFromCard} image={'/adults/mrgarrison.png'}/>,
  <Card className='card' key='10' title='Mr Kitty'            cardID='10' sendIdToDeck={receiveIdFromCard} image={'/adults/mrkitty.png'}/>,
  <Card className='card' key='11' title ='Mrs Mccormick'      cardID='11' sendIdToDeck={receiveIdFromCard} image={'/adults/mrsmccormick.png'}/>,
  <Card className='card' key='12' title='Principal Victoria'  cardID='12' sendIdToDeck={receiveIdFromCard} image={'/adults/principal-victoria.png'}/>,
  <Card className='card' key='13' title='Randy'               cardID='13' sendIdToDeck={receiveIdFromCard} image={'/adults/randy-marsh.png'}/>,
  <Card className='card' key='14' title='Sharon'              cardID='14' sendIdToDeck={receiveIdFromCard} image={'/adults/sharon-marsh.png'}/>,
  <Card className='card' key='15' title='Sheila'              cardID='15' sendIdToDeck={receiveIdFromCard} image={'/adults/sheila-broflovski.png'}/>,
  <Card className='card' key='16' title='Stuart'              cardID='16' sendIdToDeck={receiveIdFromCard} image={'/adults/stuart-mccormick.png'}/>,
  <Card className='card' key='17' title='Tupperware'          cardID='17' sendIdToDeck={receiveIdFromCard} image={'/Heroes/tupperware.png'}/>,
  <Card className='card' key='18' title='Mint Berry Crunch'   cardID='18' sendIdToDeck={receiveIdFromCard} image={'/Heroes/mint-berry-crunch.png'}/>,
  <Card className='card' key='19' title='Mosquito'            cardID='19' sendIdToDeck={receiveIdFromCard} image={'/Heroes/mosquito.png'}/>,
  <Card className='card' key='20' title='Mysterion'           cardID='20' sendIdToDeck={receiveIdFromCard} image={'/Heroes/mysterion.png'}/>,
  <Card className='card' key='21' title='Call Girl'           cardID='21' sendIdToDeck={receiveIdFromCard} image={'/Heroes/superheroes-call-girl.png'}/>,
  <Card className='card' key='22' title='Captain Diabetes'    cardID='22' sendIdToDeck={receiveIdFromCard} image={'/Heroes/superheroes-captain-diabetes.png'}/>,
  <Card className='card' key='23' title='FastPass'            cardID='23' sendIdToDeck={receiveIdFromCard} image={'/Heroes/superheroes-fastpass.png'}/>,
  <Card className='card' key='24' title='Prof Timmy'          cardID='24' sendIdToDeck={receiveIdFromCard} image={'/Heroes/superheroes-prof-timmy.png'}/>,
  <Card className='card' key='25' title='Super Craig'         cardID='25' sendIdToDeck={receiveIdFromCard} image={'/Heroes/superheroes-super-craig.png'}/>,
  <Card className='card' key='26' title='Wonder Tweek'        cardID='26' sendIdToDeck={receiveIdFromCard} image={'/Heroes/superheroes-wonder-tweek.png'}/>,
  <Card className='card' key='27' title='The Coon'            cardID='27' sendIdToDeck={receiveIdFromCard} image={'/Heroes/the-coon.png'}/>,
  <Card className='card' key='28' title='The Human Kite'      cardID='28' sendIdToDeck={receiveIdFromCard} image={'/Heroes/the-human-kite.png'}/>,
  <Card className='card' key='29' title='ToolShed'            cardID='29' sendIdToDeck={receiveIdFromCard} image={'/Heroes/toolshed.png'}/>,
  <Card className='card' key='30' title='Iron Maiden'         cardID='30' sendIdToDeck={receiveIdFromCard} image={'/Heroes/iron-maiden.png'}/>,


  ]  
  
 // Fisher-Yates (Knuth) shuffle -- Unbiased shuffle
  const shuffle = (array) => {
    if (array === 'game_over') {
      return(<div className="flex">
        <div className="text-center mt-6">
          <h1 className="text-white mb-6">You Win!</h1>
          <button className="btn hover:bg-primary-focus mb-6" onClick={() => props.sendScore('0')}>Press to Play Again</button>
        </div>
      </div>)
    }
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

    if (props.cardsAllowed === 'first_round'){
      for (let i = 0; i < 4; i++) {
      array.push(arr[i])
    }
  } else if (props.cardsAllowed === 'second_round'){
      for (let i = 4; i < 16; i++) {
        array.push(arr[i])
      }
    } else if (props.cardsAllowed ==='third_round') {
      for (let i = 16; i < 30; i++ ) {
        array.push(arr[i]);
      }} else {
        return(cardsToChooseFrom = 'game_over')
      }
    
  cardsToChooseFrom = array

  }
  cardWithdrawer(arrayOfAllCards)

  useEffect(() => {

  })
  if (props.cardsAllowed === 'game_over') {
    return(<div>{shuffle(cardsToChooseFrom)}</div>)
  }

 else{ 
  return (<div className="mt-6">
    <h1 className="text-white text-center text-xl mt-4 md:text-3xl font-bold">{props.roundDisplay}</h1>
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 text-white mb-8">
        {shuffle(cardsToChooseFrom)}
      </div>
  </div>
    )}
}
export default Deck