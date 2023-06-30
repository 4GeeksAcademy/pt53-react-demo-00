import React from "react";
import { Reciprocal } from "./reciprocal";
import { Card } from "./card";

//include images into your bundle

//create your first component
const Home = () => {
  return (
    <div className="text-center">
      <Card width="50%" img="http://placekitten.com/550">
        <Reciprocal />
      </Card>
      <Card width="50%" img="http://placekitten.com/750">
        <Reciprocal />
      </Card>
      <Card width="50%" img="http://placekitten.com/758">
        <Reciprocal />
      </Card>
      <Card width="50%" img="http://placekitten.com/678">
        <Reciprocal />
      </Card>
      <Card width="50%" img="http://placekitten.com/777">
        <Reciprocal />
      </Card>
      <Card width="50%" img="http://placekitten.com/888">
        <Reciprocal />
      </Card>
    </div>
  );
};

export default Home;
