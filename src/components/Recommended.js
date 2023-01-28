import React from "react";
import gaming from "../assets/gaming.jpg";
import gaming1 from "../assets/gaming1.jpg";
import gaming2 from "../assets/gaming2.jpg";
import gaming3 from "../assets/gaming3.jpg";
import gaming4 from "../assets/gaming4.jpg";
import { TbApps } from "react-icons/tb";

const Recomended = () => {
  return (
    <div className="mx-[2rem] mt-[2rem] text-white text-[14px] overflow-hidden">
      {/* Title */}
      <p>EXPLORE GAMES</p>

      {/* Featured */}
      <div className="h-full md:h-[24rem] w-full flex flex-col  md:flex-row pt-3">
        <div className="w-full md:w-[62%] h-full bg-red-400 flex ">
          <img src={gaming} alt="" className="object-cover w-full" />
        </div>
        <div className="bg-[#0f1922] h-full w-full md:w-[38%] flex  flex-col justify-between ">
          <div className="  flex flex-col  items-center">
            <p className="text-[20px] mt-3">Gaming Room</p>
            <div className="px-4 w-full md:h-[19rem] pt-3">
              <div className="h-[40%] w-full flex pb-1 ">
                <img
                  src={gaming1}
                  alt=""
                  className="object-cover w-[50%] pr-1 "
                />
                <img
                  src={gaming2}
                  alt=""
                  className="object-cover w-[50%] pl-1"
                />
              </div>
              <div className="h-[40%]  w-full flex pt-1 ">
                <img
                  src={gaming3}
                  alt=""
                  className="object-cover w-[50%] pr-1"
                />
                <img
                  src={gaming4}
                  alt=""
                  className="object-cover w-[50%] pl-1"
                />
              </div>
              <div className="inline-flex flex-col md:items-start md:flex-col">
                <p className="text-[18px] pt-4">Play Now</p>
                <p className="text-[15px] text-center bg-[#5c7e10] px-4 py-1 rounded-[0.5rem] mt-1">
                  Discount
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recomended;
