import { DropdownMenuSeparator } from "../../movie-site-web/src/components/ui/dropdown-menu";

export const Description = () => {
  return (
    <div className="px-45 pt-8">
      <div className="flex flex-col gap-5">
        <div className="flex gap-3">
          <button className="py-[2px] px-[10px] border-2 border-[#E4E4E7] rounded-[9999px]">
            <p className="text-[12px] font-semibold">Fairy Tale</p>
          </button>
          <button className="py-[2px] px-[10px] border-2 border-[#E4E4E7] rounded-[9999px]">
            <p className="text-[12px] font-semibold">Pop Musical</p>
          </button>
          <button className="py-[2px] px-[10px] border-2 border-[#E4E4E7] rounded-[9999px]">
            <p className="text-[12px] font-semibold">Fantasy</p>
          </button>
          <button className="py-[2px] px-[10px] border-2 border-[#E4E4E7] rounded-[9999px]">
            <p className="text-[12px] font-semibold">Musical</p>
          </button>
          <button className="py-[2px] px-[10px] border-2 border-[#E4E4E7] rounded-[9999px]">
            <p className="text-[12px] font-semibold">Romance</p>
          </button>
        </div>
        <div>
          Elphaba, a misunderstood young woman because of her green skin, and
          Glinda, a popular girl, become friends at Shiz University in the Land
          of Oz. After an encounter with the Wonderful Wizard of Oz, their
          friendship reaches a crossroads.
        </div>
        <div className="flex flex-col gap-5">
          <div>
            <div className="flex gap-[53px]">
              <p className="text-[16px] font-bold">Director</p>
              <p>Jon M. Chu</p>
            </div>
            <DropdownMenuSeparator />
          </div>
          <div>
            <div className="flex gap-[53px]">
              <p className="text-[16px] font-bold">Writers</p>
              <p>Winnie Holzman · Dana Fox · Gregory Maguire</p>
            </div>
            <DropdownMenuSeparator />
          </div>
          <div>
            <div className="flex gap-[53px]">
              <p className="text-[16px] font-bold">Stars</p>
              <p>Cynthia Erivo · Ariana Grande · Jeff Goldblum</p>
            </div>
            <DropdownMenuSeparator />
          </div>
        </div>
      </div>
    </div>
  );
};
