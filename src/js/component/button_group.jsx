import React from "react";

export const ButtonGroup = ({ buttons = [], outline = false }) => {
  /*
    {
      color: "primary",
      text: "Button text",
      type: "link or button",
      payload: "either a function or a string (e.g.: a url)"
    }

   */

  return (
    <div className="btn-group" role="group" aria-label="Basic example">
      {buttons.map((button, idx) => {
        let classes = `btn btn-${button.color}`;

        if (outline) {
          classes = `btn btn-outline-${button.color}`;
        }

        switch (button.type) {
          case "a":
          case "href":
          case "link":
            return (
              <a href={button.payload} className={classes}>
                {button.text}
              </a>
            );

          case "button":
          case "function":
            return (
              <button onClick={button.payload} className={classes}>
                {button.text}
              </button>
            );

          default:
            return (
              <a href={button.payload} className={classes}>
                {button.text}
              </a>
            );
        }
      })}
    </div>
  );
};
