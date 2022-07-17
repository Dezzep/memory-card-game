import './App.css';
import { useState, useEffect } from 'react';
import ScoreTracker from './components/scoreTracker';
import Deck from './components/all_cards';

const App = () => {
  const [score, setScore] = useState(0);
  const [cardsToRender, setCardsToRender] = useState(4);
  const [round, setRound] = useState('Round 1')

  const renderMoreCards = (currentScore) => {
    if (currentScore < 4) {
      setCardsToRender('first_round')
      setRound('Round 1')
    }
    else if (currentScore >= 4 && currentScore < 16)  {
      setCardsToRender('second_round');
      setRound('Round 2')
    }  
    else if (currentScore >=16 && currentScore < 30) {
      setCardsToRender('third_round');
      setRound('Round 3')
    }
    else {setCardsToRender('game_over')}
  }

  const scoreReceivedFromDeck = (deckScore = 0) => {
    setScore(deckScore);
  }
  useEffect(() => {
    renderMoreCards(score)
  })


  return (
    <div>
      <ScoreTracker score={score}/>
      <div className='text-primary-content bg-primary-focus/20 h-3/4 flex justify-evenly'>
        <Deck cardsAllowed={cardsToRender} roundDisplay={round} sendScore={scoreReceivedFromDeck}/>
      </div>
    </div>
  );
}

export default App;
