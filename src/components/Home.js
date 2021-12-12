import logo from '../logo.svg';
import '../App.css';
import Greet from './Greet'
import Message from './Message'
import Button from './Button'
import Hello from './Hello';
import Employee from './Employee';
import NavBar from './NavBar';

function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload. -jm1
        </p>
        <p>{Hello()}</p>
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

export default Home;
