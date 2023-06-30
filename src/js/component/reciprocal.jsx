import React, { useState } from "react";

export const Reciprocal = () => {
  const [denom, setDenom] = useState(1);

  return (
    <>
      <h1>
        1/{denom} is roughly {(1 / denom).toPrecision(5)}
      </h1>
      <div className="d-flex flex-row justify-content-center">
        <button
          onClick={() => setDenom(denom - 1)}
          className="btn btn-danger m-2"
        >
          --
        </button>
        <button
          onClick={() => setDenom(denom + 1)}
          className="btn btn-primary m-2"
        >
          ++
        </button>
      </div>
    </>
  );
};
