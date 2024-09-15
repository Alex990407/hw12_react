import React, { useState } from "react";
import ValueDisplay from "./components/valueDisplay/index";
import "./App.css";

function App() {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className="App">
      <h1>Enter your text !</h1>
      <input
        type="text"
        value={value}
        onChange={handleChange}
        placeholder="Enter your text ..."
      />
      {/* Передаем текущее значение как пропс в компонент ValueDisplay */}
      <ValueDisplay value={value} />
    </div>
  );
}

export default App;
