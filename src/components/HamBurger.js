import React from "react";
import "./stylesHamBurger.css";

const Hamburger = () => {
  const data = [
    { item: "BreadTop", key: 1 },
    { item: "Salad", key: 2 },
    { item: "Cheese", key: 3 },
    { item: "Patty", key: 4 },
    { item: "Sauce", key: 5 },
    { item: "Cheese", key: 6 },
    { item: "BreadBottom", key: 7 },
  ];

  return (
    <>
      <h1>Burger</h1>
      <div id="whole">
        {data.map((d) => (
          <div id={d.item}>
            <div className="HiddenText">
              <p>{d.item}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Hamburger;
