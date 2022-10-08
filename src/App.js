import "./App.css";
import Home from "./components/Home";
import TitleTimer from "./components/TitleTimer";
import Footer from "./components/Footer";
import MovieResult from "./components/MovieResult";
import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

function App() {
  const [movie, setMovie] = useState({});

  return (
    <div>
      <TitleTimer />
      <Routes>
        <Route path="/" element={<Home setMovie={setMovie} />} />
        <Route
          path="/movie"
          element={
            <MovieResult
              title={movie.title}
              releaseDate={movie.releaseDate}
              description={movie.description}
              imageURL={movie.imgUrl}
            />
          }
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
