"use client";

import { useParams } from "next/navigation";
import { MovieFrame } from "./MovieFrame";
import { Description } from "@/app/MovieDescription";
import { MoreLikeThis } from "@/app/MovieMore";
import { Header } from "@/app/Header";
import { Footer } from "@/app/FooterContent";
import { useEffect, useState } from "react";
import axios from "axios";

type MovieData = {
  title: string;
  release_date: number;
  vote_average: number;
  poster_path: string;
  backdrop_path: string;
};

function Detail() {
  const params = useParams();
  console.log(params.id);

  const [movies, setMovies] = useState<MovieData[]>([]);
  const getPopularMovies = async () => {
    try {
      const { data } = await axios.get(
        "https://api.themoviedb.org/3/movie/278/similar?language=en-US&page=1&api_key=d67d8bebd0f4ff345f6505c99e9d0289"
      );
      setMovies(data.results);
    } catch (err: any) {
      console.log(err.message);
    }
  };
  useEffect(() => {
    getPopularMovies();
  }, []);

  console.log(movies);
  const firstTenMovies = movies.slice(0, 1);

  return (
    <div>
      <Header />
      {firstTenMovies?.map((movie, index) => {
        return (
          <MovieFrame
            key={index}
            title={movie.title}
            release_date={movie.release_date}
            vote_average={movie.vote_average}
            poster_path={`https://image.tmdb.org/t/p/${movie.poster_path}`}
            backdrop_path={`https://image.tmdb.org/t/p/${movie.backdrop_path}`}
          />
        );
      })}
      <Description />
      <MoreLikeThis />
      <Footer />
    </div>
  );
}

export default Detail;
