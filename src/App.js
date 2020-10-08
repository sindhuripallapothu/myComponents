import React from "react";
import "./App.css";
import WProgress from "./components/Progress";
import DigitalClock from "./components/DigitalClock"
import DropdownAPI from "./components/DropdownAPI"

function App() {
  return (
    <div className="App">
      <WProgress />
      <DigitalClock />
      <DropdownAPI />
    </div>
  );
}

export default App;
