import React, { useEffect, useState } from "react";
import { userData } from "./data";

const App = () => {
  const [inputValue, setInputValue] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    if (inputValue.length > 0) {
      let filteredArr = userData.filter(
        (data) =>
          data.name.toLocaleLowerCase().includes(inputValue) ||
          data.email.toLocaleLowerCase().includes(inputValue) ||
          data.phone.toLocaleLowerCase().includes(inputValue)
      );
      setData(filteredArr);
    } else {
      setData([]);
    }
  }, [inputValue]);

  return (
    <div style={{ textAlign: "center" }}>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value.toLocaleLowerCase())}
        placeholder="Type here..."
      />
      <div style={{ padding: "10px", display: "flex", flexWrap: "wrap" }}>
        {data.length > 0 &&
          data.map((v, i) => (
            <div
              key={i}
              style={{
                border: "2px solid black",
                padding: "20px",
                margin: "10px",
                flex: "1 200px",
                backgroundColor: "lightgreen",
                borderRadius: "5px",
              }}
            >
              <h3>Name : {v.name}</h3>
              <h4>{v.email}</h4>
              <h4>Phone : {v.phone}</h4>
            </div>
          ))}
      </div>
    </div>
  );
};

export default App;
