import React from "react";

const Card = ({ wallpaper }) => {
  return (
    <div>
      <div>
        <img src={wallpaper} alt="" />
        <div className="bg-black/30 h-[8rem]">
          <p className="text-[18px] text-white pl-4  pt-2">Christmass Deal</p>
          <p className="text-[12px] text-white pl-4  pt-2">
            Offer ending in 2 days
          </p>
          <div className="flex">
            <p className="ml-4 text-[19px] text-white bg-[#5c7e10] px-5 mt-4 flex justify-center">
              -50%
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
