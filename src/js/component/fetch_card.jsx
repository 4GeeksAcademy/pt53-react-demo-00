import React, { useEffect, useState } from "react";

const Placeholder = () => {
  const [placeholders, setPlaceholders] = useState([]);

  useEffect(() => {
    let temp = [];
    for (let i = 0; i < 12; i++) {
      let cols = Math.ceil(Math.random() * 7);
      temp.push(
        <span key={i} className={`placeholder me-1 col-${cols}`}></span>
      );
    }
    console.log(temp);
    setPlaceholders(temp);
  }, []);

  return <p className="card-text placeholder-glow">{placeholders}</p>;
};

export const FetchCard = ({ isDone = false, width = "18rem", children }) => {
  const style = {
    width: width,
  };
  return (
    <div className="card mx-auto my-3" style={style}>
      <div className="card-body">{isDone ? children : <Placeholder />}</div>
    </div>
  );
};
