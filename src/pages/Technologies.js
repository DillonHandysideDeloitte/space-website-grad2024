import { useState } from "react";
import Technology from "../components/Technology";
import './Technologies.css';

function Technologies() {
  const [selectedTechnology, setSelectedTechnology] = useState(0);

  const technologies = [
    {
      terminology: "Space Capsule",
      description: "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained."
    },
    {
      terminology: "Spaceport",
      description: "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch."
    },
    {
      terminology: "Launch Vehicle",
      description: "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!"
    }
  ];

  return (
    <div className="Technologies background-container" data-background="technologies">
      <h3>Learn about our</h3> 
      <h2>Technology</h2>
      <ul>
        {technologies.map((technology, index) => (
          <li key={technology.terminology}>
            <button 
              className={index === selectedTechnology ? "selected" : ""}
              onClick={() => setSelectedTechnology(index)}
            >
              {technology.terminology}
            </button>
          </li>
        ))}
      </ul>
      <p>
        <Technology
          terminology={technologies[selectedTechnology].terminology}
          description={technologies[selectedTechnology].description}
        />
      </p>
    </div>
  );
}

export default Technologies;
