import React, { useState, useEffect } from "react";

export const MathThing = () => {
  const [minVal, setMinVal] = useState(0);
  const [maxVal, setMaxVal] = useState(10_000);
  const [mid, setMid] = useState(0.5);

  useEffect(() => {
    console.log("Something needs to happen when this component loads.");
  }, []);

  return (
    <div className="row">
      <div className="col col-6">
        <h1>Value 1</h1>
        <input
          type="number"
          value={minVal}
          onChange={(ev) => setMinVal(parseFloat(ev.target.value))}
        />
      </div>
      <div className="col col-6">
        <h1>Value 2</h1>
        <input
          type="number"
          value={maxVal}
          onChange={(ev) => setMaxVal(parseFloat(ev.target.value))}
        />
      </div>
      <div className="row mt-3">
        <div className="col col-6 offset-3">
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={mid}
            onChange={(ev) => setMid(parseFloat(ev.target.value))}
          />
        </div>
      </div>
      <div className="row mt-3">
        <hr />
        <div className="col col-6 offset-3">
          {(minVal + (maxVal - minVal) * mid).toFixed(5)}
        </div>
      </div>
    </div>
  );
};
