import React, { useEffect, useRef, useState } from "react";
import "./MenuScroll.scss";
function MenuScroll({ selectedYear, setSelectedYear }) {
  const options = ["2022", "2021", "2019","2018","2017","2022", "2021", "2019","2018","2017"];
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
    <div className="year">
      <div className={
          selectedYear === "Select Year"
            ? "year__btn"
            : "year__btn menu_active"
        } onClick={() => setIsActive(!isActive)}>
        {selectedYear}
      </div>
      {isActive && (
        <div className="year__content" ref={menuRef}>
          {options.map((option, i) => (
            <div
              key={i}
              className="year__item"
              onClick={(e) => {
                setSelectedYear(option);
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

export default MenuScroll;
