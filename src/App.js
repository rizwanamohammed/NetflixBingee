import React from "react";
import "./styles.css";
import { useState } from "react";
import { recoDB } from "./data";

var color = "white";
export default function App() {
  const [selectedCategory, setCategory] = useState("ANIME");
  function categoryClickHandler(category) {
    setCategory(category);
  }

  return (
    <div className="App">
      <header className="hero-image">
        <div style={{ color }}>
          <h1>NETFLIX BINGE</h1>
          <p>Chose a genre of your choice. Get the recomendations and Binge!</p>
          <div>
            {Object.keys(recoDB).map((category) => (
              <button onClick={() => categoryClickHandler(category)}>
                {category}{" "}
              </button>
            ))}
          </div>
        </div>
      </header>
      <div className="movies">
        {recoDB[selectedCategory].map((reco) => (
          <div className="movie" key={reco.name}>
            <img className="movie-image" src={reco.imgURL}></img>
            <div>
              <h2 style={{ color, margin: "3px" }}>{reco.name}</h2>
            </div>
            <div>
              <p style={{ color, marginBottom: "7px" }}>{reco.rating}</p>
              <a style={{ color }} href={reco.movieURL}>
                {" "}
                View on Netflix{" "}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
