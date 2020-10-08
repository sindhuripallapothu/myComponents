import React, { useEffect, useState } from "react";

const ProgressBar = (props) => {
  const { bgc, comp } = props;
  const style = {
    backgroundColor: bgc,
    position: "absolute",
    top: "150px",
    left: "150px",
    width: comp * 10,
    height : '30px'
  };
  return (
  <div style={style}>{comp}%</div>);
};

const WProgress = () => {
  const [comp, setComp] = useState(0);

  useEffect(() => {
    setInterval(() => setComp((comp) => Math.min(comp + 1, 100)), 1000);
  }, []);

  return (
    <div>
      <ProgressBar bgc="#3399ff" comp={comp} />
    </div>
  );
};

export default WProgress;
