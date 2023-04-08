import logo from './logo.svg';
import './App.css';
import Header from './header/header.js'

function App() {
  return (
    <div className="App">
      <Header />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <a>Hello, world! I'm Julia, a Front End Developer</a>
      </header>
    </div>
  );
}

export default App;
