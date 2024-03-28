import React, { useState } from "react";
import renderIf from "render-if";

const Form = (props) => {
  const { nameOfSurvey } = props;
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [diabetic, setDiabetic] = useState(false);
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);

  //const [state, setState] = useState({});

  const [result, setResult] = useState("");
  const [resultBMI, setResultBMI] = useState("");

  // const questions = [{ 1: "NAME" }, { 2: "AGE" }, { 3: "DIABETIC ?" }];
  const handleSubmit = () => {
    setResult(output());
    setResultBMI(outputBMI());
  };

  const output = () => {
    return (age > 18 || age < 75) && diabetic ? "SELECTED" : "NOT SELECTED";
  };

  const outputBMI = () => {
    return (weight * 10000) / Math.pow(height, 2);
  };

  const renderIfDiabeticSurvey = nameOfSurvey === "DIABETES";

  return renderIf(renderIfDiabeticSurvey)(
    <>
      <label>Name : </label>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <label>Age : </label>
      <input value={age} onChange={(e) => setAge(e.target.value)} />
      <label>Diabetes : </label>
      <input value={diabetic} onChange={(e) => setDiabetic(e.target.value)} />
      <br />
      <br />
      <label>Height(in cm) : </label>
      <input value={height} onChange={(e) => setHeight(e.target.value)} />
      <label>Weight(in kgs) : </label>
      <input value={weight} onChange={(e) => setWeight(e.target.value)} />
      <br />
      <br />
      BMI : <input value={resultBMI} disabled />
      <br />
      <br />
      <button onClick={handleSubmit}>Submit</button>
      <br />
      <br />
      {result}
      {/* {questions.map((key, value) => (
        <>
          <label>{questions[key]}</label>
          <input value={value} onChange={(e) => setState(e.target.value)} />
        </>
      ))} */}
    </>
  );
};

export default Form;
