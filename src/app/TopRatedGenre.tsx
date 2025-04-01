"use client";

import axios from "axios";
import { Movies } from "./Movie";
import { useEffect, useState } from "react";

type MovieData = {
  title: string;
  vote_average: number;
  poster_path: string;
};

export const TopRated = () => {
  const [movies, setMovies] = useState<MovieData[]>([]);
  const getTopRatedMovies = async () => {
    try {
      const { data } = await axios.get(
        "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1&api_key=d67d8bebd0f4ff345f6505c99e9d0289"
      );
      setMovies(data.results);
    } catch (err: any) {
      console.log(err.message);
    }
  };
  useEffect(() => {
    getTopRatedMovies();
  }, []);

  console.log(movies);

  const firstTenMovies = movies.slice(0, 10);

  return (
    <div className="px-20 pb-13 flex flex-col">
      <div className="gap-8 flex flex-wrap justify-between">
        {firstTenMovies?.map((movie, index) => {
          return (
            <Movies
              key={index}
              name={movie.title}
              imdb={movie.vote_average}
              backdrop_path={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
            />
          );
        })}
      </div>
    </div>
  );
};
