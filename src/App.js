import logo from './logo.svg';
import earth from './Earth_Western_Hemisphere_transparent_background.png'
import './App.css';
import Nav from './Nav';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Nav />
        <img src={earth} className="App-logo" alt="logo" />
        <p>
          So, you want to travel to
          Space
          Let’s face it; if you want to go to space, you might as well genuinely go to 
          outer space and not hover kind of on the edge of it. Well sit back, and relax 
          because we’ll give you a truly out of this world experience!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Explore
        </a>
      </header>
    </div>
  );
}

export default App;
