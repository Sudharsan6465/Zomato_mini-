import { useState } from "react";

function Light() {
  const [isOn, setIsOn] = useState(false);

  const handleToggle = () => {
    setIsOn(!isOn);
  };

  return (
    <center>
      <div
        style={{
          backgroundColor: isOn ? "white" : "black",
          border : "2px",
          borderStyle:"solid",
          marginLeft: "500px",
          marginRight: "500px",
          padding: "20px",
        }}
      >
        <h1 style={{ color: isOn ? "black" : "white" }}>
          {isOn ? "Light is On" : "Turn on the light"}
        </h1>

        <button onClick={handleToggle}>
          {isOn ? "Turn Off" : "Turn On"}
        </button>
        <br />

        <div
          style={{
            backgroundColor: isOn ? "yellow" : "gray",
            width: "50px",
            height: "50px",
            margin: "10px auto",
            borderRadius: "50%",
          }}
        ></div>
      </div>
    </center>
  );
}

export default Light;
