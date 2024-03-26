import "./App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Nav from "../src/components/Nav";
import Home from "./pages/Home";
import Destinations from "./pages/Destinations";
import Crew from "./pages/Crew";
import Technologies from "./pages/Technologies";

function App() {
  return (
    <div className="App">
      <Nav />
      <body>
        <Routes>
          <Route exact path="home" element={<Home />}></Route>
          <Route exact path="destinations" element={<Destinations />}></Route>
          <Route exact path="crew" element={<Crew />}></Route>
          <Route exact path="technologies" element={<Technologies />}></Route>
        </Routes>
      </body>
    </div>
  );
}

export default App;
