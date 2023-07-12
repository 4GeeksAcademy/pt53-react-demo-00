import React, { useState, useEffect, useRef } from "react";

// Importing a component here
import { Product } from "./product";
import { Cart } from "./cart";

// Importing an array of data here.
import { productData } from "../product_data";

//include images into your bundle

//create your first component
const Home = () => {
  useEffect(() => {
    console.log("This is your normal log.");
    console.warn("This will show up in yellow in the terminal.");
    console.error("This will show up as red!");
    console.info("I think this one is blue.");
    console.table(productData);
  }, []);

  const [cart, setCart] = useState([]);

  const addItemToCart = (item) => {
    setCart([...cart, item]);
  };

  const [value, setValue] = useState("");

  return (
    <main className="wobsite-content">
      <ul className="mt-5 list-group">
        <li className="list-group-item">
          <form
            onSubmit={(ev) => {
              // ev.preventDefault();
              console.log(value);
            }}
          >
            <input
              type="text"
              value={value}
              onChange={(ev) => {
                console.log(ev);
                setValue(ev.target.value);
              }}
            />
          </form>
        </li>
        <li className="list-group-item">{value}</li>
      </ul>

      {/* <Jumbotron header="React Day 5" fullWidth>
        <h2>Even More State</h2>
        <ul className="mt-5 list-group">
          <li className="list-group-item">
            <code>const [var, setVar] = useState();</code>
          </li>
          <li className="list-group-item">
            We use <code>useState</code> to tell React when a variable updates.
          </li>
          <li className="list-group-item">
            State gives you an internal state, props define your component's
            state from the outside.
          </li>
          <li className="list-group-item">
            <h4>Props via "props" argument:</h4>
            <code>
              export const MyComponent = (props) ={">"} {"{"}...
            </code>
          </li>
          <li className="list-group-item">
            <code>{"{props.yourPropName}"}</code>
          </li>
          <li className="list-group-item">
            <h4>Props via object deconstruction:</h4>
            <code>
              export const MyComponent = ({"{ yourPropName }"}) ={">"} {"{"}...
            </code>
          </li>
          <li className="list-group-item">
            <code>{"{ yourPropName }"}</code>
          </li>
        </ul>
      </Jumbotron> */}
      {/* <LightSwitch /> */}
      <Cart lineItems={cart} />
      {productData.map((prod, idx) => (
        <Product
          product={prod}
          callback={() => addItemToCart(prod)}
          key={idx}
        />
      ))}
    </main>
  );
};

export default Home;
