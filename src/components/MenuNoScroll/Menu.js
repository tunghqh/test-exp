import React, { useState,useEffect, useRef } from "react";
import "./Menu.scss";
function Menu({ selectedLocation, setSelectedLocation }) {
  const options = ["CANADA & USA", "EUROPE", "SOUTH KOREA"];
  const [isActive, setIsActive] = useState(false);
  let menuRef = useRef()
  useEffect(()=>{
    document.addEventListener("mousedown",e=>{
        if(!menuRef.current.contains(e.target)){
            setIsActive(false)
        }
    })
  })
  return (
    <div className="droupdown">
      <div className={selectedLocation === "Select Location" ? "dropdown__btn" : "dropdown__btn menu_active"} onClick={() => setIsActive(!isActive)}>
        {selectedLocation}
      </div>
      {isActive && (
        <div className="dropdown__content" ref={menuRef}>
          {options.map((option, i) => (
            <div
              key={i}
              className="dropdown__item"
              onClick={(e) => {
                setSelectedLocation(option);
                setIsActive(false)
              }}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Menu;
