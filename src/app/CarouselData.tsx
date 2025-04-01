import { Play, Star } from "lucide-react";

export const CarouselData = ({
  title,
  imdb,
  explanation,
  poster_path,
}: {
  title: string;
  imdb: number;
  explanation: string;
  poster_path: string;
}) => {
  return (
    <div className="relative">
      <div>
        <img className="w-full h-150 object-cover" src={poster_path} />
      </div>

      <div className="absolute left-35 bottom-[158px]">
        <div className="flex flex-col gap-4">
          <div className="text-white">
            <p className="text-[16px]">Now Playing:</p>
            <p className="text-[36px] font-bold">{title}</p>
            <div>
              <p className="flex items-center text-[18px]">
                <Star className="text-yellow-300 h-7 w-7" />
                {imdb}/10
              </p>
            </div>
          </div>
          <div>
            <p className="text-white w-[650px]">{explanation}</p>
          </div>

          <div>
            <button className="px-4 py-2 bg-[#F4F4F5] rounded-[6px]">
              <div className="flex items-center gap-2">
                <p>
                  <Play />
                </p>
                <p>Watch Trailer</p>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
