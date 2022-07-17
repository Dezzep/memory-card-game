import Card from "./card";
import { useState, } from "react";
import HardMode from "./hardmode";


const Deck = (props) => {
  const [difficulty, setDifficulty] = useState(false);
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
  const gameReset = () => {
    props.sendScore(0);
    setSelectedCards([])
  }
  const alterDifficulty = () => {
    difficulty? setDifficulty(false) : setDifficulty(true);
    gameReset();
  }
 
  const arrayOfAllCards = [
  <Card className='card' key='1'  dispTitle={difficulty} title='Cartman'             cardID='1'  sendIdToDeck={receiveIdFromCard} image={'eric-cartman.png'}/>,
  <Card className='card' key='2'  dispTitle={difficulty} title='Kenny'               cardID='2'  sendIdToDeck={receiveIdFromCard} image={'kenny-mccormick.png'}/>,
  <Card className='card' key='3'  dispTitle={difficulty} title='Kyle'                cardID='3'  sendIdToDeck={receiveIdFromCard} image={'kyle-broflovski.png'}/>,
  <Card className='card' key='4'  dispTitle={difficulty} title='Stan'                cardID='4'  sendIdToDeck={receiveIdFromCard} image={'stan-marsh.png'}/>,
  <Card className='card' key='5'  dispTitle={difficulty} title='Chef'                cardID='5'  sendIdToDeck={receiveIdFromCard} image={'/adults/chef.png'}/>,
  <Card className='card' key='6'  dispTitle={difficulty} title='Gerald'              cardID='6'  sendIdToDeck={receiveIdFromCard} image={'/adults/gerald-broflovski.png'}/>,
  <Card className='card' key='7'  dispTitle={difficulty} title='Mrs Cartman'         cardID='7'  sendIdToDeck={receiveIdFromCard} image={'/adults/liane-cartman.png'}/>,
  <Card className='card' key='8'  dispTitle={difficulty} title='Mr Mackey'           cardID='8'  sendIdToDeck={receiveIdFromCard} image={'/adults/mackey.png'}/>,
  <Card className='card' key='9'  dispTitle={difficulty} title='Mr Garrison'         cardID='9'  sendIdToDeck={receiveIdFromCard} image={'/adults/mrgarrison.png'}/>,
  <Card className='card' key='10' dispTitle={difficulty} title='Mr Kitty'            cardID='10' sendIdToDeck={receiveIdFromCard} image={'/adults/mrkitty.png'}/>,
  <Card className='card' key='11' dispTitle={difficulty} title ='Mrs Mccormick'      cardID='11' sendIdToDeck={receiveIdFromCard} image={'/adults/mrsmccormick.png'}/>,
  <Card className='card' key='12' dispTitle={difficulty} title='Principal Victoria'  cardID='12' sendIdToDeck={receiveIdFromCard} image={'/adults/principal-victoria.png'}/>,
  <Card className='card' key='13' dispTitle={difficulty} title='Randy'               cardID='13' sendIdToDeck={receiveIdFromCard} image={'/adults/randy-marsh.png'}/>,
  <Card className='card' key='14' dispTitle={difficulty} title='Sharon'              cardID='14' sendIdToDeck={receiveIdFromCard} image={'/adults/sharon-marsh.png'}/>,
  <Card className='card' key='15' dispTitle={difficulty} title='Sheila'              cardID='15' sendIdToDeck={receiveIdFromCard} image={'/adults/sheila-broflovski.png'}/>,
  <Card className='card' key='16' dispTitle={difficulty} title='Stuart'              cardID='16' sendIdToDeck={receiveIdFromCard} image={'/adults/stuart-mccormick.png'}/>,
  <Card className='card' key='17' dispTitle={difficulty} title='Tupperware'          cardID='17' sendIdToDeck={receiveIdFromCard} image={'/Heroes/tupperware.png'}/>,
  <Card className='card' key='18' dispTitle={difficulty} title='Mint Berry Crunch'   cardID='18' sendIdToDeck={receiveIdFromCard} image={'/Heroes/mint-berry-crunch.png'}/>,
  <Card className='card' key='19' dispTitle={difficulty} title='Mosquito'            cardID='19' sendIdToDeck={receiveIdFromCard} image={'/Heroes/mosquito.png'}/>,
  <Card className='card' key='20' dispTitle={difficulty} title='Mysterion'           cardID='20' sendIdToDeck={receiveIdFromCard} image={'/Heroes/mysterion.png'}/>,
  <Card className='card' key='21' dispTitle={difficulty} title='Call Girl'           cardID='21' sendIdToDeck={receiveIdFromCard} image={'/Heroes/superheroes-call-girl.png'}/>,
  <Card className='card' key='22' dispTitle={difficulty} title='Captain Diabetes'    cardID='22' sendIdToDeck={receiveIdFromCard} image={'/Heroes/superheroes-captain-diabetes.png'}/>,
  <Card className='card' key='23' dispTitle={difficulty} title='FastPass'            cardID='23' sendIdToDeck={receiveIdFromCard} image={'/Heroes/superheroes-fastpass.png'}/>,
  <Card className='card' key='24' dispTitle={difficulty} title='Prof Timmy'          cardID='24' sendIdToDeck={receiveIdFromCard} image={'/Heroes/superheroes-prof-timmy.png'}/>,
  <Card className='card' key='25' dispTitle={difficulty} title='Super Craig'         cardID='25' sendIdToDeck={receiveIdFromCard} image={'/Heroes/superheroes-super-craig.png'}/>,
  <Card className='card' key='26' dispTitle={difficulty} title='Wonder Tweek'        cardID='26' sendIdToDeck={receiveIdFromCard} image={'/Heroes/superheroes-wonder-tweek.png'}/>,
  <Card className='card' key='27' dispTitle={difficulty} title='The Coon'            cardID='27' sendIdToDeck={receiveIdFromCard} image={'/Heroes/the-coon.png'}/>,
  <Card className='card' key='28' dispTitle={difficulty} title='The Human Kite'      cardID='28' sendIdToDeck={receiveIdFromCard} image={'/Heroes/the-human-kite.png'}/>,
  <Card className='card' key='29' dispTitle={difficulty} title='ToolShed'            cardID='29' sendIdToDeck={receiveIdFromCard} image={'/Heroes/toolshed.png'}/>,
  <Card className='card' key='30' dispTitle={difficulty} title='Iron Maiden'         cardID='30' sendIdToDeck={receiveIdFromCard} image={'/Heroes/iron-maiden.png'}/>,


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

  if (props.cardsAllowed === 'game_over') {
    return(<div className="mt-6"> {shuffle(cardsToChooseFrom)}</div>)
  }

 else{ 
  return (<div className="mt-6">
    <h1 className="text-white text-center text-xl mt-4 md:text-3xl font-bold">Memory Card Game</h1>
    <p className="bg-secondary-focus px-1 text-center mt-4">Don't Choose The Same Card Twice</p>
    <h1 className="text-white text-center text-xl mt-4 md:text-3xl font-bold">{props.roundDisplay}</h1>
    <HardMode toggle={alterDifficulty}></HardMode>
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 text-white mb-8">
        {shuffle(cardsToChooseFrom)}
      </div>
  </div>
    )}
}
export default Deck