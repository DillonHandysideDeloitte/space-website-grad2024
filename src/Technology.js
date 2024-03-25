
function Technology(props) {
    return (
      <div className="Crew">
        <header className="App-header">
            <Nav />
            <img src={logo} className="App-logo" alt="logo" />
            <p>
                03 Space launch 101

                1
                2
                3
    
                The terminology...
                {props.terminology}
                
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
  
  export default Technology;
  