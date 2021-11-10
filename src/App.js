import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Message from './components/Message'
import Button from './components/Button'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload. -jm1
        </p>
        <Greet name="Peter" heroName = "spiderman"> 
          <Message/>
          <Button></Button>
        </Greet>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
