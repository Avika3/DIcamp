import logo from './logo.svg';
import './App.css';
import Heroes from './Components/Heroes.json';

function App() {
  const count = 0;
  class superheroes extends React.Component {
    constructor(){
      super();
      this.state = {
        clicked: false,
        
      }
      const handleClick = (item) =>{
        if (item.clicked == false){
         item.clicked = true
         count++
        }
     
       }
       this.componentDidCatch(handleClick)
  return (
    <div className="App">
      <header className="App-header">
        <h1>{count}</h1>
        <div>
        {
            Heroes.superheroes.map(item => {
              return(

                <div key={item.id} onClick={handleClick(item)}> 
                <img src={item.image} alt={item.name} />
                <p> {item.name}</p>
                <p> {item.occupation}</p>
          </div>
              )
            })
        }
        </div>
      </header>
    </div>
  );

      }
    }
  }
export default App;


