import { Play, Star } from "lucide-react";

export const MovieFrame = ({
  title,
  release_date,
  vote_average,
  poster_path,
  backdrop_path,
}: {
  title: string;
  release_date: number;
  vote_average: number;
  poster_path: string;
  backdrop_path: string;
}) => {
  return (
    <div>
      <div className="pt-13 px-45">
        <div className="flex flex-col gap-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[36px] font-bold">{title}</p>
              <p className="text-[18px]">{release_date} · PG · 2h 40m</p>
            </div>
            <div>
              <div className="text-[12px]">Rating</div>
              <div className="flex items-center gap-1">
                <div>
                  <Star className="text-yellow-400" />
                </div>
                <div className="flex flex-col">
                  <div className="flex items-center">
                    <p className="text-[18px] font-semibold">{vote_average}</p>
                    <p>/10</p>
                  </div>
                  <div className="text-[12px]">37k</div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-8">
            <div className="w-[290px] h-[428px] bg-gray-200">
              <img className="h-full object-cover" src={poster_path} />
            </div>
            <div className="w-full h-[428px] bg-gray-200 relative">
              <img className="h-full w-screen" src={backdrop_path} />
              <div className="absolute left-6 bottom-6">
                <div className="flex items-center gap-3">
                  <button className="bg-[#FFF] py-4 px-4 rounded-[9999px]">
                    <Play className="w-4 h-4" />
                  </button>
                  <p className="text-[#FFF]">Play trailer </p>
                  <p className="text-[#FFF]">2:35</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
