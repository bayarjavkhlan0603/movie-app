"use client";

import { useEffect, useState } from "react";
import { Movies } from "./Movie";
import axios from "axios";

type MovieData = {
  title: string;
  vote_average: number;
  poster_path: string;
};

export const Upcoming = () => {
  const [movies, setMovies] = useState<MovieData[]>([]);
  const getUpcomingMovies = async () => {
    try {
      const { data } = await axios.get(
        "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1&api_key=d67d8bebd0f4ff345f6505c99e9d0289"
      );
      setMovies(data.results);
    } catch (err: any) {
      console.log(err.message);
    }
  };
  useEffect(() => {
    getUpcomingMovies();
  }, []);

  console.log(movies);

  const firstTenMovies = movies.slice(0, 10);

  return (
    <div className="px-20 flex flex-col">
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
