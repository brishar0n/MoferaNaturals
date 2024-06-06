import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import "../../style/centra/Tooltip.css";
import { motion } from 'framer-motion';

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

  const tooltipVariants = {
    hidden: { opacity: 0, y: 0 },
    visible: { opacity: 1, y: 0},
  };

  return (
    <div className="Tooltip-Wrapper" onClick={toggleTip}>
      {props.children}
      {active && (
        <motion.div
          
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={tooltipVariants}
          transition={{ duration: 0.3 }}
        >

        <div className={`Tooltip-Tip ${props.direction || "top"}`}>
          <div onClick={() => handleItemClick("/wetleaves")}>Add Wet Leaves</div>
          <div onClick={() => handleItemClick("/dryleaves")}>Add Dry Leaves</div>
          <div onClick={() => handleItemClick("/powder")}>Add Powder</div>
          <div onClick={() => handleItemClick("/shippinginfo")}>Add Shipping Info</div>
          <div onClick={() => handleItemClick("/package")}>Add Package</div>
        </div>

        </motion.div>

      )}
    </div>
  );
};

export default Tooltip;
