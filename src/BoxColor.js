import React, { useState } from 'react';
import './BoxColor.css';

const BoxColor = () => {
  const [selectedBox, setSelectedBox] = useState(null);

  const handleBoxClick = (boxNumber) => {
    setSelectedBox(boxNumber);
  };

  return (
    <div className="box-container">
      {[1, 2, 3, 4, 5, 6].map((boxNumber) => (
        <div
          key={boxNumber}
          className={`box ${selectedBox === boxNumber ? 'selected' : ''}`}
          onClick={() => handleBoxClick(boxNumber)}
        >
          Box {boxNumber}
        </div>
      ))}
    </div>
  );
};

export default BoxColor;
