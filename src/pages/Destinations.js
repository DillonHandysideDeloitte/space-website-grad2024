import { useState } from "react";
import Destination from "../components/Destination";
import "./Destinations.css";

function Destinations() {
  const [selectedDestination, setSelectedDestination] = useState(0);

  const destinations = [
    {
      title: "Europa",
      avgDist: "628 mil. km",
      estTravelTime: "3 years",
      description: "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin."
    },
    {
      title: "Mars",
      avgDist: "628 mil. km",
      estTravelTime: "9 months",
      description: "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!"
    },
    {
      title: "Moon",
      avgDist: "628 mil. km",
      estTravelTime: "3 days",
      description: "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites."
    },
    {
      title: "Titan",
      avgDist: "628 mil. km",
      estTravelTime: "7 years",
      description: "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn."
    }
  ];

  return (
    <div className="Destinations background-container" data-background="destinations">
      <h3>Pick your</h3> 
      <h2>Destination</h2>
      <ul>
        {destinations.map((destination, index) => (
          <li key={destination.title}>
            <button 
              className={index === selectedDestination ? "selected" : ""}
              onClick={() => setSelectedDestination(index)}
            >
              {destination.title}
            </button>
          </li>
        ))}
      </ul>
      <p>
        <Destination
          title={destinations[selectedDestination].title}
          avgDist={destinations[selectedDestination].avgDist}
          estTravelTime={destinations[selectedDestination].estTravelTime}
          description={destinations[selectedDestination].description}
        />
      </p>
    </div>
  );
}

export default Destinations;
