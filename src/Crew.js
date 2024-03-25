import Nav from "./Nav";

function Crew(props) {
  return (
    <div className="Crew">
      <header className="App-header">
        <Nav />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
            02 Meet your crew

            {props.title}
            {props.name}
              
            {props.description}
        </p>
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

export default Crew;
