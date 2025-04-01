import { MoveRight } from "lucide-react";
import { Button } from "../components/ui/button";

export const SeeMore = ({ genreName }: { genreName: string }) => {
  return (
    <div className="px-20 pt-13 flex flex-col gap-8 ">
      <div className="flex items-center justify-between">
        <p className="text-[24px] font-semibold">{genreName}</p>
        <Button className="bg-white text-black">
          See more
          <MoveRight />
        </Button>
      </div>
    </div>
  );
};
