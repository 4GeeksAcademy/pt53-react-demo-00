import React from "react";

const AccordionDrawer = ({ item = {}, parent = "", children }) => {
  return (
    <div className="accordion-item">
      <h2 className="accordion-header">
        <button
          className="accordion-button"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={`#${item.name.toLowerCase()}`}
          aria-expanded="true"
          aria-controls={`${item.name.toLowerCase()}`}
        >
          {item.name}
        </button>
      </h2>
      <div
        id={`${item.name.toLowerCase()}`}
        className="accordion-collapse collapse"
        data-bs-parent={`#${parent}`}
      >
        <div className="accordion-body">{children}</div>
      </div>
    </div>
  );
};

export const Accordion = ({ items = [], name }) => {
  return (
    <div className="accordion" id={name}>
      {items.map((item, idx) => (
        <AccordionDrawer item={item} parent={name} key={idx}>
          {`${item.name} is a ${item.age} year old ${
            item.color
          } cat, and they are ${item.isNapping ? "asleep" : "awake"}.`}
        </AccordionDrawer>
      ))}
    </div>
  );
};
