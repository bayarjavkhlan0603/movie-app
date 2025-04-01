"use client";

import * as React from "react";

import { TopRated } from "@/app/TopRatedGenre";
import { Footer } from "@/app/FooterContent";
import { Header } from "@/app/Header";
import { Popular } from "@/app/PopularGenre";
import { Upcoming } from "@/app/UpcomingGenre";
import { MovieCarousel } from "./Carousel";
import { SeeMore } from "./SeeMore";

export default function Home({
  movieImg,
  imdb,
  name,
}: {
  movieImg: string;
  imdb: number;
  name: string;
}) {
  return (
    <div>
      <Header />
      <MovieCarousel />
      <div className="flex flex-col gap-8">
        <SeeMore genreName="Upcoming" />
        <Upcoming />
      </div>
      <div className="flex flex-col gap-8">
        <SeeMore genreName="Popular" />
        <Popular />
      </div>
      <div className="flex flex-col gap-8">
        <SeeMore genreName="Top Rated " />
        <TopRated />
      </div>
      <Footer />
    </div>
  );
}
