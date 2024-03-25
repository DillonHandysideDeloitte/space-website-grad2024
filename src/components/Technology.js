function Technology(props) {
  return (
    <div className="Technology">
      <p>
        The terminology...
        {props.terminology}
        {props.description}
      </p>
    </div>
  );
}

export default Technology;
