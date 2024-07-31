import React, { useState } from "react";
import { Button, TextField } from "@fluentui/react";

function CustomerList() {
  const [name, setName] = useState("");
  const [list, setList] = useState([]);

  function handleChange(event) {
    event.preventDefault();
    setName(event.target.value);
  }
  function handleAdd() {
    var newList = list.concat(name);
    setList(newList);
    setName("");
  }

  return (
    <div>
      <section
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <TextField
          type="text"
          className="large"
          placeholder="Name"
          data-testid="app-input"
          value={name}
          onChange={handleChange}
          styel={{ width: 300 }}
        />
        <Button
          type="submit"
          className="ml-30"
          data-testid="submit-button"
          onClick={handleAdd}
        >
          Add Customer
        </Button>
      </section>

      <ul
        style={{
          "list-style": "none",
        }}
      >
        {list.map(
          (val, i) =>
            val && (
              <li key={i}>
                <ol>{val}</ol>
              </li>
            )
        )}
      </ul>
    </div>
  );
}

export default CustomerList;
