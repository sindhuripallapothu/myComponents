import React, { useState } from "react";

const Translator = () => {
  const [word, setWord] = useState("");
  let translationMap = new Map([
    ["john", "admin"],
    ["lily", "editor"],
    ["peter", "subscriber"],
  ]);
  return (
    <div>
      <input value={word} onChange={(e) => setWord(e.target.value)} />
      <input defaultValue={translationMap.get(word)} readOnly />
    </div>
  );
};
export default Translator;
