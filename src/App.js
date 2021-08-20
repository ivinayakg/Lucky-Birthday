import "./styles.css";
import { useState } from "react";

export default function App() {
  const [lucky, setLucky] = useState(0);
  const [dateb, setDateB] = useState(0);
  const [messg, setMessg] = useState("");

  const onclickHandler = (e) => {
    e.preventDefault();
    if (dateb % lucky === 0 || lucky % dateb === 0) {
      setMessg("YAY! your Birthday is lucky 🥳🥳🥳 You Are Lucky");
    } else {
      setMessg(
        "Sorry your birthday is not lucky But You are still BEAUTIFUL🥰"
      );
    }
  };

  const luckyHandler = (e) => {
    setLucky(e.target.value);
  };

  const dateHandler = (e) => {
    var date = e.target.value;
    var date1 = date.split("-");
    var sum = 0;
    date1.map((k) => {
      for (var i = 0; i < k.length; i++) {
        sum += parseInt(k[i]);
      }
      setDateB(sum);
      return 0;
    });
  };

  return (
    <div className="App">
      <div className="section">
        <div className="contain">
          <h1>Is Your Birthday Lucky?</h1>
          <div className="inputs">
            <label>
              Birthday Date:
              <input id="date" type="date" onChange={dateHandler} />
            </label>
            <label>
              Your Lucky Number:
              <input
                id="luckyn"
                type="number"
                placeholder="Enter A Number"
                onChange={luckyHandler}
              />
            </label>
            <button className="btn" onClick={onclickHandler}>
              Check Number
            </button>
          </div>
          <h3>{messg}</h3>
        </div>
      </div>
    </div>
  );
}
