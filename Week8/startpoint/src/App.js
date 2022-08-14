import logo from './logo.svg';
import './App.css';
import Point from './Components/Point';
import Sum from './Components/Sum';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello World!</h1>
        <Point/>
        <Sum/>
      </header>
    </div>
  );
}

export default App;
