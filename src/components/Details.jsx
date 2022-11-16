import React, { useState, useEffect, } from "react";
// import { Button } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import axios from "axios";
import "./Details/details.css";
// import Media from 'react-media';

const API_IMG = "https://image.tmdb.org/t/p/w500";
const api = axios.create({
  baseURL:
    "https://api.themoviedb.org/3/movie/popular?api_key=1693462230279a37646cf2bb5445bac4",
});


const Details = ({ vote_average, release_date, overview }) => {
  const location = useLocation();
  const [movies, setMovies] = useState([]);
  const [movieDetails, setMovieDetails] = useState({});

  useEffect(() => {
    // console.log("start");

    api
      .get(
        `https://api.themoviedb.org/3/movie/${location.state.movie_id}?api_key=1693462230279a37646cf2bb5445bac4&language=en-US`
      )
      .then((res) => {
        // console.log(res.data);
        // setMovies(res.data["results"]);
        setMovieDetails(res.data);


      });
    // console.log("end");
  });

  return (
    <>
        {/* movie details */}
      <div className="info">
        <div className="ig">
          <img src={API_IMG + location.state.poster_path} />
        </div>

        <div className="content">
            <p className="title">{movieDetails.title}</p>
          <div className="o">
            <p className="over">{movieDetails.overview}</p>
          </div>

          <div className="date">
            <p>Released Date:<span className="time">{movieDetails.release_date}</span></p>
            <p>Budget:<span className="time">{movieDetails.budget}</span></p>
            <p>Run Time:<span className="time">{movieDetails.runtime}</span></p>
            <p>Status:<span className="time">{movieDetails.status}</span></p>
            <p>Original Language:<span className="time">{movieDetails.original_language}</span></p>
            <p>Vote Average: <span className="time">{movieDetails.vote_average}</span></p>
          </div>     
        </div>
      </div>
    </>
  );
};

export default Details;

// future use!
       {/* <ol>
          {movies.map((movie) => (
            <li>
              <div>
                <p className="d" key={movie.id}>
                  {movie.original_title}
                </p>
              </div>
            </li>
          ))}
        </ol> */}

        {/* media query */}
        {/* <Media query= {{
          small: "(max-width: 599px)",
          medium: "(min-width: 600px) and (max-width: 1199px)",
          large: "(min-width: 1200px)"
        }}>
          {matches => (
 <Fragment>
 {matches.small && <p>I am small!</p>}
 {matches.medium && <p>I am medium!</p>}
 {matches.large && <p>I am large!</p>}
</Fragment>
          )}
        </Media> */}