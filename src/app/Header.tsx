"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { DropdownMenuItem } from "@/components/ui/dropdown-menu";

import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Badge } from "@/components/ui/badge";

import { Input } from "@/components/ui/input";
import { FiFilm } from "react-icons/fi";
import { IoChevronDownSharp } from "react-icons/io5";

export const Header = () => {
  const { setTheme } = useTheme();
  return (
    <div className="flex justify-around w-full py-4 px-0 ">
      <p className="flex items-center gap-2 text-[20px] text-[#4338CA] italic font-bold">
        <FiFilm />
        Movie Z
      </p>
      <div className="flex items-center gap-3">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">
              <IoChevronDownSharp />
              Genre
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-[577px]">
            <DropdownMenuLabel className="flex flex-col gap-1">
              <p className="text-[24px]">Genres</p>
              <p className="text-[16px]">See lists of movies by genre</p>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup className="flex flex-wrap gap-4">
              <Badge className="px-4 py-2 rounded-[9999px] bg-white text-black border-[2px] border-[#E4E4E7]">
                Action
              </Badge>
              <Badge className="px-4 py-2 rounded-[9999px] bg-white text-black border-[2px] border-[#E4E4E7]">
                Adventure
              </Badge>
              <Badge className="px-4 py-2 rounded-[9999px] bg-white text-black border-[2px] border-[#E4E4E7]">
                Animation
              </Badge>
              <Badge className="px-4 py-2 rounded-[9999px] bg-white text-black border-[2px] border-[#E4E4E7]">
                Biography
              </Badge>
              <Badge className="px-4 py-2 rounded-[9999px] bg-white text-black border-[2px] border-[#E4E4E7]">
                Comedy
              </Badge>
              <Badge className="px-4 py-2 rounded-[9999px] bg-white text-black border-[2px] border-[#E4E4E7]">
                Crime
              </Badge>
              <Badge className="px-4 py-2 rounded-[9999px] bg-white text-black border-[2px] border-[#E4E4E7]">
                Documentary
              </Badge>
              <Badge className="px-4 py-2 rounded-[9999px] bg-white text-black border-[2px] border-[#E4E4E7]">
                Drama
              </Badge>
              <Badge className="px-4 py-2 rounded-[9999px] bg-white text-black border-[2px] border-[#E4E4E7]">
                Family
              </Badge>
              <Badge className="px-4 py-2 rounded-[9999px] bg-white text-black border-[2px] border-[#E4E4E7]">
                Fantasy
              </Badge>
              <Badge className="px-4 py-2 rounded-[9999px] bg-white text-black border-[2px] border-[#E4E4E7]">
                Film-Noir
              </Badge>
              <Badge className="px-4 py-2 rounded-[9999px] bg-white text-black border-[2px] border-[#E4E4E7]">
                Game-Show
              </Badge>
              <Badge className="px-4 py-2 rounded-[9999px] bg-white text-black border-[2px] border-[#E4E4E7]">
                History
              </Badge>
              <Badge className="px-4 py-2 rounded-[9999px] bg-white text-black border-[2px] border-[#E4E4E7]">
                Horror
              </Badge>
              <Badge className="px-4 py-2 rounded-[9999px] bg-white text-black border-[2px] border-[#E4E4E7]">
                Music
              </Badge>
              <Badge className="px-4 py-2 rounded-[9999px] bg-white text-black border-[2px] border-[#E4E4E7]">
                Musical
              </Badge>
              <Badge className="px-4 py-2 rounded-[9999px] bg-white text-black border-[2px] border-[#E4E4E7]">
                Mystery
              </Badge>
              <Badge className="px-4 py-2 rounded-[9999px] bg-white text-black border-[2px] border-[#E4E4E7]">
                News
              </Badge>
              <Badge className="px-4 py-2 rounded-[9999px] bg-white text-black border-[2px] border-[#E4E4E7]">
                Reality-TV
              </Badge>
              <Badge className="px-4 py-2 rounded-[9999px] bg-white text-black border-[2px] border-[#E4E4E7]">
                Romance
              </Badge>
              <Badge className="px-4 py-2 rounded-[9999px] bg-white text-black border-[2px] border-[#E4E4E7]">
                Sci-Fi
              </Badge>
              <Badge className="px-4 py-2 rounded-[9999px] bg-white text-black border-[2px] border-[#E4E4E7]">
                Short
              </Badge>
              <Badge className="px-4 py-2 rounded-[9999px] bg-white text-black border-[2px] border-[#E4E4E7]">
                Sport
              </Badge>
              <Badge className="px-4 py-2 rounded-[9999px] bg-white text-black border-[2px] border-[#E4E4E7]">
                Talk-Show
              </Badge>
              <Badge className="px-4 py-2 rounded-[9999px] bg-white text-black border-[2px] border-[#E4E4E7]">
                Thriller
              </Badge>
              <Badge className="px-4 py-2 rounded-[9999px] bg-white text-black border-[2px] border-[#E4E4E7]">
                War
              </Badge>
              <Badge className="px-4 py-2 rounded-[9999px] bg-white text-black border-[2px] border-[#E4E4E7]">
                Western
              </Badge>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
        <Input
          className="w-[379px] py-0 px-4 h-[40px]"
          placeholder="search.."
        />
      </div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="icon">
            <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem onClick={() => setTheme("light")}>
            Light
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setTheme("dark")}>
            Dark
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setTheme("system")}>
            System
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};
