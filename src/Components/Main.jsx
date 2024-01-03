import React, { useEffect, useState } from "react";
import axios from "axios";

import requests from "../Requests";

function Main() {
  const [movies, setMovies] = useState([]);
  const [videoKey, setVideoKey] = useState(null);

  useEffect(() => {
    axios.get(requests.requestPopular).then((response) => {
      setMovies(response.data.results);
    });
  }, []);

  const truncateStr = (string, length) => {
    if (string?.length > length) {
      return string.slice(0, length) + "....";
    } else {
      return string;
    }
  };

  const movie = movies[Math.floor(Math.random() * movies.length)];

  console.log("Selected Movie:", movie);


  useEffect(() => {
    if (movie?.videos) {
      const trailers = movie.videos.results.filter(
        (video) => video.type === "Trailer"
      );
      console.log("Video Key:", trailers);
      if (trailers.length > 0) {
        setVideoKey(trailers[0].key);
      }
    }
  }, [movie]);

  return (
    <div className="w-full h-[650px] text-white">
      <div className="w-full h-full">
        <div className="absolute w-full h-[650px] bg-gradient-to-r from-black"></div>
        {videoKey ? (
          <iframe
            title={movie?.title}
            className="w-full h-full"
            src={`https://www.youtube.com/embed/${videoKey}?autoplay=1`}
            allowFullScreen
          ></iframe>
        ) : (
          <img
            className="w-full h-full object-cover"
            src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
            alt={movie?.title}
          />
        )}
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
