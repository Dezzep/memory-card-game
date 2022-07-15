import './App.css';
import ScoreTracker from './components/scoreTracker';
import Deck from './components/all_cards';

const App = () => {
  
  return (
    
    <div>
      <ScoreTracker/>
      <div className='text-primary-content bg-primary-focus/20 h-3/4 flex justify-evenly'>
        <Deck/>
      </div>
    </div>
  );
}

export default App;
