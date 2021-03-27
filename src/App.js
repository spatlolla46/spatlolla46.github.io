
import './App.css';
import './School';
import School from './School';

function App(props) {
  return (
    <div className="App">
      <header className="App-header">
       Welcome to {props.name}'s Page
       <br/>
        <div class="row" style={{fontSize:38}}>
          Name: {props.name}<br/>
          </div>
          <School school="TexasA"></School>
          Work: {props.work}<br/>

      </header>
    </div>
  );
}

export default App;
