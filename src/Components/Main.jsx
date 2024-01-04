import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import axios from "axios";

import requests from "../Requests";

function Main() {
  const [movies, setMovies] = useState([]);
  const [videoSrc, setVideoSrc] = useState(null);

  useEffect(() => {
    axios.get(requests.requestPopular).then((response) => {
      const movies = response.data.results;
      setMovies(movies);
    });
  }, []);

  useEffect(() => {
    if (movies.length > 0) {
      const selectedMovie = movies[Math.floor(Math.random() * movies.length)];

      axios
        .get(
          `https://api.themoviedb.org/3/movie/${selectedMovie.id}/videos?api_key=854b486b5afb3fc595d64df5c60e9ec3`
        )
        .then((videoResponse) => {
          const videos = videoResponse.data.results;

          if (videos.length > 0) {
            const videoKey = videos[0].key;
            setVideoSrc(`https://www.youtube.com/embed/${videoKey}`);
          } else {
            console.error("No videos found for the selected movie.");
          }
        })
        .catch((error) => {
          console.error("Error fetching videos:", error);
        });
    }
  }, [movies]);

  const truncateStr = (string, length) => {
    if (string?.length > length) {
      return string.slice(0, length) + "....";
    } else {
      return string;
    }
  };

  const movie = movies[Math.floor(Math.random() * movies.length)];

  return (
    <div className="w-full h-[650px] text-white relative">
      <div className="w-full h-full">
        <div className="absolute w-full h-[650px] bg-gradient-to-r from-black"></div>
       
        <img
          className="w-full h-full object-cover"
          src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
          alt={movie?.title}
        />
        

        <div className="absolute w-full top-[20%] p-4 md:p-8">
          <h1 className="text-3xl md:text-5xl font-bold">{movie?.title}</h1>
          <div className="my-4">
            <button className="border rounded bg-gray-200 text-black border-green-300 py-2 px-5">
              Play
            </button>
            <button className="border rounded text-white border-green-300 py-2 px-5 ml-4">
              Watch Later
            </button>
          </div>
          <p className="text-gray-400 text-sm">
            Released: {movie?.release_date}
          </p>
          <p className="w-full mt-2 md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200">
            {truncateStr(movie?.overview, 200)}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Main;
