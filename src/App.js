import "./styles.css";
import { useState } from "react";

export default function App() {
  const [lucky, setLucky] = useState(0);
  const [dateb, setDateB] = useState(0);

  return (
    <div className="App">
      <div className="section">
        <div className="contain">
          <h1>Is Your Birthday Lucky?</h1>
          <div className="inputs">
            <label>
              Birthday Date:
              <input id="date" type="date" />
            </label>
            <label>
              Your Lucky Number:
              <input id="luckyn" type="number" placeholder="Enter A Number" />
            </label>
            <button className="btn">Check Number</button>
            <button className="btn1">Reset</button>
          </div>
        </div>
      </div>
    </div>
  );
}
