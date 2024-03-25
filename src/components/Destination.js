function Destination(props) {
  return (
    <div className="Destination">
      <p>
        {props.title}
        {props.description}

        Avg. Distance
        {props.avgDist}
        
        Est. Travel Time
        {props.estTravelTime}
      </p>
    </div>
  );
}

export default Destination;
