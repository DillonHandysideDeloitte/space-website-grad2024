function CrewMember(props) {
  return (
    <div className="CrewMember">
      <p>
        {props.title}
        {props.name}

        {props.description}
      </p>
    </div>
  );
}

export default CrewMember;
