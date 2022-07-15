import './App.css';
import { useState } from 'react';
import ScoreTracker from './components/scoreTracker';
import Deck from './components/all_cards';

const App = () => {
  const [score, setScore] = useState(0);
  const [cardsToRender, setCardsToRender] = useState(4);

  const renderMoreCards = (currentScore) => {
    if (currentScore === cardsToRender && cardsToRender <= 16)
      setCardsToRender(cardsToRender + 4)
  }

  const scoreReceivedFromDeck = (deckScore = 0) => {
    setScore(deckScore);
  }

  return (
    <div>
      <ScoreTracker score={score}/>
      <div className='text-primary-content bg-primary-focus/20 h-3/4 flex justify-evenly'>
        <Deck cardsAllowed={cardsToRender} sendScore={scoreReceivedFromDeck}/>
      </div>
    </div>
  );
}

export default App;
