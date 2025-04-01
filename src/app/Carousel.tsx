"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { CarouselData } from "./CarouselData";
import { useEffect, useState } from "react";
import axios from "axios";

type MovieData = {
  title: string;
  vote_average: number;
  overview: string;
  poster_path: string;
  backdrop_path: string;
};

export const MovieCarousel = () => {
  const [movies, setMovies] = useState<MovieData[]>([]);
  const getCarouselMovies = async () => {
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
    getCarouselMovies();
  }, []);

  console.log(movies);

  const firstThreeMovies = movies.slice(0, 3);

  return (
    <Carousel className="relative">
      <CarouselContent>
        {firstThreeMovies?.map((movie, index) => {
          return (
            <CarouselItem key={index}>
              <CarouselData
                title={movie.title}
                imdb={movie.vote_average}
                explanation={movie.overview}
                poster_path={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
              />
            </CarouselItem>
          );
        })}
      </CarouselContent>

      <CarouselPrevious className=" absolute left-11" />
      <CarouselNext className=" absolute right-11" />
    </Carousel>
  );
};
