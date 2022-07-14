import './App.css';
import Deck from './components/all_cards';

const App = () => {
  return (
    <div className='text-primary-content bg-primary-focus/20 h-3/4 flex justify-evenly'>
      <Deck/>
    </div>
  );
}

export default App;
