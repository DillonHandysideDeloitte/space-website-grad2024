import Nav from "./Nav";


function Destination(props) {
  return (
    <div className="Destination">
      <header className="Destination-header">
        <Nav />
        <img src={earth} className="Destination-logo" alt="logo" />
        <p>
            01 Pick your destination

            Moon
            Mars
            Europa
            Titan  

            {props.title}
            {props.description}

            Avg. Distance
            {props.avgDist}

            Est. Travel Time
            {props.estTravelTime}    
        </p>
        <a
          className="Destination-link"
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

export default Destination;
