import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import "../../style/centra/Tooltip.css";

const Tooltip = (props) => {
  const [active, setActive] = useState(false);
  const navigate = useNavigate();

  const toggleTip = (event) => {
    event.stopPropagation();  // Prevent click event from bubbling up
    const newActiveState = !active;
    setActive(newActiveState);
    document.body.classList.toggle("tooltip-active", newActiveState);
    if (props.onToggle) {
      props.onToggle(newActiveState);
    }
  };

  const handleItemClick = (path) => {
    setActive(false);
    document.body.classList.remove("tooltip-active");
    if (props.onToggle) {
      props.onToggle(false);
    }
    navigate(path);
  };

  return (
    <div className="Tooltip-Wrapper" onClick={toggleTip}>
      {props.children}
      {active && (
        <div className={`Tooltip-Tip ${props.direction || "top"}`}>
          <div onClick={() => handleItemClick("/wetleaves")}>Add Wet Leaves</div>
          <div onClick={() => handleItemClick("/dryleaves")}>Add Dry Leaves</div>
          <div onClick={() => handleItemClick("/addpowder")}>Add Powder</div>
          <div onClick={() => handleItemClick("/shippinginfo")}>Add Shipping Info</div>
          <div onClick={() => handleItemClick("/addpackage")}>Add Package</div>
        </div>
      )}
    </div>
  );
};

export default Tooltip;
