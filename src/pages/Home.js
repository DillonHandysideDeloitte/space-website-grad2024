import React from "react";
import "./Home.css";

function Home() {
  return (
    <div
      className="Home background-container"
      data-background="home"
      style={{
        alignItems: "left", // Center horizontally
        textAlign: "left", // Center text inside
        padding: "200px", // Add some padding for spacing
      }}
    >
      <h3>So, you want to travel to</h3>
      <h2 style={{ fontSize: "5.5em" }}>Space</h2>
      <p>
        Let’s face it; if you want to go to space, you might as well genuinely
        go to outer space and not hover kind of on the edge of it. <br />
        Well sit back, and relax because we’ll give you a truly out of this
        world experience!
      </p>
    </div>
  );
}

export default Home;
