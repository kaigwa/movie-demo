import React, { useState, useEffect } from "react";
import Details from "./Details";
import Rightside from "./Rightside";
import Header from "./Header";
import { Link } from "react-router-dom";
import "./Home/home.css";
// import { Button } from "react-bootstrap";



const API_IMG = "https://image.tmdb.org/t/p/w500";
const API_URL =
  "https://api.themoviedb.org/3/movie/popular?api_key=1693462230279a37646cf2bb5445bac4";
const API_SEARCH =
  "https://api.themoviedb.org/3/search/movie?api_key=1693462230279a37646cf2bb5445bac4&query";

const Home = () => {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMovies(data.results);
      });
  }, []);

  const searchMovie = async (e) => {
    e.preventDefault();
    console.log("Searching");
    try {
      const url =
        "https://api.themoviedb.org/3/search/movie?api_key=1693462230279a37646cf2bb5445bac4&query=${query}";
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
      setMovies(data.results);
    } catch (e) {
      console.log(e);
    }
  };

  const changeHandler = (e) => {
    setQuery(e.target.value);
  };
  return (
    <>
      <div className="movies">
        {movies.map((movieReq) => (
          <div className="trending" key={movieReq.id}>
            <Link
              to="/Details"
              state={{
                movie_id: movieReq.id,
                title: movieReq.title,
                poster_path: movieReq.poster_path,
              }}
            
            >
              <img className="pic" src={API_IMG + movieReq.poster_path} />

//               <Button type="button" className="b">
//                 {movieReq.title}
//               </Button>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};
export default Home;
