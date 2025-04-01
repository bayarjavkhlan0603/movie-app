import { Movies } from "./Movie";
import { SeeMore } from "./SeeMore";

export const MoreLikeThis = () => {
  return (
    <div className="pb-[113px]">
      <div className="flex flex-col gap-8">
        <div className="px-25">
          <SeeMore genreName="More like this" />
        </div>
        <div className="px-45">
          <Movies backdrop_path="" name="" imdb={6.9} />
        </div>
      </div>
    </div>
  );
};
