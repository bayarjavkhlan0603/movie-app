import { FiFilm } from "react-icons/fi";
import { MdOutlineMail } from "react-icons/md";
import { FiPhone } from "react-icons/fi";

export const Footer = () => {
  return (
    <div className="w-full h-70 py-10 px-20 bg-[#4338CA]">
      <div className="flex justify-between gap-30">
        <div className="flex flex-col items-start gap-10">
          <div className="flex flex-col gap-3">
            <p className="flex items-center gap-2 text-[20px] text-white italic font-bold">
              <FiFilm />
              Movie Z
            </p>
            <p className="text-[#FAFAFA] text-[14px]">
              © 2024 Movie Z. All Rights Reserved.
            </p>
          </div>
        </div>
        <div className="flex gap-24 text-white">
          <div className="flex flex-col gap-3">
            <p>Contact Information</p>
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-3">
                <div>
                  <MdOutlineMail className="size-[20px]" />
                </div>
                <div className="">
                  <p>Email</p>
                  <a>support@movieZ.com</a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div>
                  <FiPhone className="size-[20px]" />
                </div>
                <div>
                  <p>Phone</p>
                  <a>+976 (11) 123-4567</a>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <div>Follow us</div>
            <div className="flex gap-3">
              <a className="font-medium" href="">
                Facebook
              </a>
              <a className="font-medium" href="">
                Instagram
              </a>
              <a className="font-medium" href="">
                Twitter
              </a>
              <a className="font-medium" href="">
                Youtube
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
