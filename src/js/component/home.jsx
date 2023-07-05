import React, { useState, useEffect, useRef } from "react";
import { Reciprocal } from "./reciprocal";
import { Card } from "./card";
import { Accordion } from "./accordion";
import { MathThing } from "./math";
import { Jumbotron } from "./jumbotron";
import { Table } from "./table";

//include images into your bundle

const books = [
  {
    title: "Neuromancer",
    author: "William Gibson",
    year_published: 1984,
    isbn: "",
    rating: 85,
  },
  {
    title: "Snow Crash",
    author: "Neal Stephenson",
    year_published: 1992,
    isbn: "978-01336162-0",
    rating: 100,
  },
  {
    title: "Altered Carbon",
    author: "Richard K. Morgan",
    year_published: 2002,
    isbn: "",
    rating: 90,
  },
  {
    title: "Cryptonomicon",
    author: "Neal Stephenson",
    year_published: 2000,
    isbn: "978-0-380-78862-0",
    rating: 95,
  },
  {
    title: "Consider Phlebas",
    author: "Ian M. Banks",
    year_published: 1987,
    isbn: "0-333-45430-8",
    rating: 99,
  },
  {
    title: "American Gods",
    author: "Neil Gaiman",
    year_published: 2001,
    isbn: "0-380-97365-0",
    rating: 95,
  },
  {
    title: "Going Postal",
    author: "Terry Pratchett",
    year_published: 2004,
    isbn: "	0-385-60342-8",
    rating: 97,
  },
];

//create your first component
const Home = () => {
  // const [cats, setCats] = useState([]);

  // useEffect(() => {
  //   setCats([
  //     {
  //       name: "Sombra",
  //       age: 1.25,
  //       color: "black",
  //       isNapping: true,
  //     },
  //     {
  //       name: "Nekobasu",
  //       age: 1.25,
  //       color: "brindle",
  //       isNapping: false,
  //     },
  //     {
  //       name: "Grizelle",
  //       age: 6,
  //       color: "brown and absurdly fluffy",
  //       isNapping: false,
  //     },
  //     {
  //       name: "Zorya",
  //       age: 5,
  //       color: "grey",
  //       isNapping: true,
  //     },
  //   ]);
  // }, []);

  // const addCat = () => {
  //   setCats([...cats, cats[Math.floor(Math.random() * cats.length)]]);
  //   console.log(cats);
  // };

  return (
    <main className="wobsite-content">
      <Jumbotron header="React Day 3" fullWidth>
        <h2>Review Redux: React</h2>
        <ul className="mt-5 list-group">
          <li className="list-group-item">Components are functions</li>
          <li className="list-group-item">
            Props look like parameters in the components
          </li>
          <li className="list-group-item">
            You pass info into components via props as html attributes when you
            use them
          </li>
        </ul>
      </Jumbotron>
      <div className="container my-5">
        <Table items={books} />
      </div>
      {/* <div className="container my-5">
        <Jumbotron header="One-Page Wonder" corners>
          This website will knock your socks off!
        </Jumbotron>
      </div> */}
      {/* <Card width="80%">
        <MathThing />
      </Card> */}
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
