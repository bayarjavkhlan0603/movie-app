import { Star } from "lucide-react";

export const Movies = ({
  imdb,
  name,
  backdrop_path,
}: {
  imdb: number;
  name: string;
  backdrop_path: string;
}) => {
  return (
    <div className="bg-[#F4F4F5] w-[229.73px] rounded-[8px]">
      <div className="h-85">
        <img className="w-full rounded-t-[8px]" src={backdrop_path} />
      </div>

      <div className="p-2 flex flex-col items-start h-[90px]">
        <p className="text-[12px] flex items-center">
          <Star className="text-yellow-300 size-4" />
          {imdb}/10
        </p>
        <p className="text-[18px]">{name}</p>
      </div>
    </div>
  );
};
