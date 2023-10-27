import { Star } from "./Star";
import { StarWithJS } from "./StarWithJS";
import "./styles.css";
import React from "react";

export default function App() {
  const [rating, setRating] = React.useState(0);

  return (
    <div className="App" style={{ display: "flex", flexDirection: "column" }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-evenly"
        }}
      >
        <p>With CSS</p>
        <Star maxRating={5} rating={rating} onRate={setRating} />
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-evenly"
        }}
      >
        <p>With JS</p>
        <StarWithJS maxRating={5} rating={rating} onRate={setRating} />
      </div>
    </div>
  );
}
