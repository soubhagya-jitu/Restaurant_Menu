
import React from "react";

const navbar = ({ filterData, uniqueData }) => {
  return (
    <>
      <nav className="navbar">
        <div className="btn-group">
          {uniqueData.map((curElem) => {
            return (
              <button
                className="btn-group__item"
                onClick={() => filterData(curElem)} >
                {curElem}
              </button>
            );
          })}
        </div>
      </nav>
    </>
  );
};

export default navbar;