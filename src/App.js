import React from "react";
import Home from "./components/Home";
import {Route, Routes, Link } from "react-router-dom";
import Details from "./components/Details";
import "./App.css";
// import Header from "./components/Header";
// import React, { useEffect, useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import Rightside from "./components/Rightside";
// import { library } from "@fortawesome/fontawesome-svg-core";


function App() {

  return (
      <div className="App">
        {/* <Header /> */}
        <Routes >
          <Route exact path="/" element={<Home />} />
          <Route exact path="/Details" element={<Details />} />
        </Routes>
      </div>
    );
}

export default App;

// future use codes

// const API_URL =
//   "https://api.themoviedb.org/3/movie/popular?api_key=1693462230279a37646cf2bb5445bac4";
// const API_SEARCH =
//   "https://api.themoviedb.org/3/search/movie?api_key=1693462230279a37646cf2bb5445bac4&query";

  // const navigate = useNavigate
  // const [movies, setMovies] = useState([]);
  // const [query, setQuery] = useState("");

  // useEffect(() => {
  //   fetch(API_URL)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //       setMovies(data.results);
  //     });
  // }, []);

  // const searchMovie = async (e) => {
  //   e.preventDefault();
  //   console.log("Searching");
  //   try {
  //     const url =
  //       "https://api.themoviedb.org/3/search/movie?api_key=1693462230279a37646cf2bb5445bac4&query=${query}";
  //     const res = await fetch(url);
  //     const data = await res.json();
  //     console.log(data);
  //     setMovies(data.results);
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };

  // const changeHandler = (e) => {
  //   setQuery(e.target.value);
  // };

  // return (
  //   <>
  //     <div className="App">
  //       <div>
  //     
  //       </div>
  // );