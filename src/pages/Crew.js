import { useState } from "react";
import CrewMember from "../components/CrewMember";
import './Crew.css';

function Crew() {
  const [selectedCrewMember, setSelectedCrewMember] = useState(0);

  const crew = [
    {
      title: "Commander",
      name: "Douglas Hurley",
      description: "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2."
    },
    {
      title: "Engineer",
      name: "Anousheh Ansari",
      description: "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space. "
    },
    {
      title: "Pilot",
      name: "Victor Glover",
      description: "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer. "
    },
    {
      title: "Specialist",
      name: "Mark Shuttleworth",
      avgDist: "628 mil. km",
      description: "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist."
    }
  ];

  return (
    <div className="Crew background-container" data-background="crew">
      <h3>Meet your</h3> 
      <h2>Crew</h2>
      <ul>
        {crew.map((crewMember, index) => (
          <li key={crewMember.name}>
            <button 
              className={index === selectedCrewMember ? "selected" : ""}
              onClick={() => setSelectedCrewMember(index)}
            >
              {crewMember.name}
            </button>
          </li>
        ))}
      </ul>
      <p>
        <CrewMember
          title={crew[selectedCrewMember].title}
          name={crew[selectedCrewMember].name}
          description={crew[selectedCrewMember].description}
        />
      </p>
    </div>
  );
}

export default Crew;
