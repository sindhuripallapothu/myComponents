import React from "react";
import "./App.css";
// import WProgress from "./components/Progress";
// import DigitalClock from "./components/DigitalClock"
// import DropdownAPI from "./components/DropdownAPI"
// import Counter from './components/Counter'
// import CyclicCounter from './components/CyclicCounter'
// import Translator from './components/Translator'
// import CustomerList from './components/List'
// import OpenDoorApp from "./Opendoor";
// import Form from "./Form";
// import LoginForm from "./components/MockInterviewComponents/LoginForm";
// import Ramp from "./components/Ramp";
import Context from "./components/MockInterviewComponents/Context";
import Reducer from "./components/MockInterviewComponents/Reducer";
import WeatherApp from "./components/MockInterviewComponents/WeatherApp";
function App() {
  const inputArr = [1,2,3,4]
  return (
    <div className="App">
      {/* <WProgress />
      <DigitalClock />
      <DropdownAPI />
      <Counter /> */}
      {/* <Hamburger /> */}
      {/* <CyclicCounter /> */}
      {/* <CustomerList /> */}
      {/* <Translator /> */}
      {/* <Form nameOfSurvey="DIABETES"/> */}
      {/* <OpenDoorApp /> */}
      {/* <Timer /> */}
      <WeatherApp />
    </div>
  );
}

export default App;
