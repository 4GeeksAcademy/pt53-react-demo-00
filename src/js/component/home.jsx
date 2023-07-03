import React, { useState, useEffect, useRef } from "react";
import { Reciprocal } from "./reciprocal";
import { Card } from "./card";
import { Accordion } from "./accordion";
import { MathThing } from "./math";

//include images into your bundle

//create your first component
const Home = () => {
  const [cats, setCats] = useState([]);
  const [dogs, setDogs] = useState([]);

  useEffect(() => {
    setCats([
      {
        name: "Sombra",
        age: 1.25,
        color: "black",
        isNapping: true,
      },
      {
        name: "Nekobasu",
        age: 1.25,
        color: "brindle",
        isNapping: false,
      },
      {
        name: "Grizelle",
        age: 6,
        color: "brown and absurdly fluffy",
        isNapping: false,
      },
      {
        name: "Zorya",
        age: 5,
        color: "grey",
        isNapping: true,
      },
    ]);
  }, []);

  const addCat = () => {
    setCats([...cats, cats[Math.floor(Math.random() * cats.length)]]);
    console.log(cats);
  };

  return (
    <main className="wobsite-content text-center">
      <h1>React Day 2</h1>
      <h2>By Hook Or By Crook (But Mostly Hooks)</h2>
      <Card width="80%">
        <MathThing />
      </Card>
      {/* <Card width="50%" img="http://placekitten.com/550">
        <Reciprocal />
      </Card> */}
      {/* <Card width="80%">
        <p>{cats.length}</p>
        <button className="btn btn-primary" onClick={addCat}>
          Add a cat
        </button>
        <hr />
        <Accordion items={cats} name="cats" />
      </Card> */}
    </main>
  );
};

export default Home;
