import logo from './logo.svg';
import './App.css';
import Card from './components/Card';

function App() {
  return (
    <div className="App">
      <h1>Excercicio react redux</h1>
      <div className='linha'>
        <Card title="card 1" red>
          x
        </Card> 
      </div>
      
      <div className='linha'>
        <Card title="card 2" green>
          x
        </Card> 
        <Card title="card 3" blue>
          x
        </Card> 
        <Card title="card 4" purple>
          x
        </Card> 
      </div>
    
    </div>
  );
}

export default App;
