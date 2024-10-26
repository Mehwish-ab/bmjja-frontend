import React, { useState } from "react";
import "./ToggleButton.css";

const ToggleButton = () => {
  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = () => {
    setIsToggled(!isToggled);
  };

  return (
    <div className="toggle-container">
      <div
        className={`toggle-button ${isToggled ? "toggled" : ""}`}
        onClick={handleToggle}
      >
        <div className="toggle-circle"></div>
      </div>
    </div>
  );
};

export default ToggleButton;
