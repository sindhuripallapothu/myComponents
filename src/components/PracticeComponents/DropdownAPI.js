import React, { useState } from "react";
import axios from "axios";
import renderIf from "render-if";
import { DefaultButton } from "office-ui-fabric-react";

const DdOptions = (props) => {
  const { options } = props;
  return renderIf(options)(
    options.map((val, i) => (
      <option value={val} key={i}>
        {val}
      </option>
    ))
  );
};

const DropdownAPI = () => {
  const [results, setResults] = useState([]);

  const myUrl = "https://restcountries.eu/rest/v2/all";

  const handleClick = () => {
    axios(myUrl).then(({ data }) => {
      let options = [];
      options.push(...data.map((x) => x.name));
      setResults(options);
    });
  };
  return (
    <>
      <select className="dropdown">
        {renderIf(results)(<DdOptions options={results} />)}
      </select>

      <DefaultButton onClick={handleClick}>Click</DefaultButton>
    </>
  );
};

export default DropdownAPI;
