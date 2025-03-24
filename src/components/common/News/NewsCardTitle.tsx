import React from "react";
interface INewsCardProps {
  date: string;
  type: string;
}
const NewsCardTitle = ({ type, date }: INewsCardProps) => {
  return (
    <div className="flex justify-between items-center border-b border-[#3C3D41] pb-[15px] mb-[25px]">
      <p>
        <span className="text-[#756F6F] font-bold">03</span>
        <span className="text-black font-bold">02</span>
        <span className="text-[#2D2A2A] text-[10px] italic font-light ">
          2025
        </span>
      </p>
      {!!type && (
        <div className="italic rounded-[30px] border border-black py-[5px] px-[15px]">
          Сотрудникам
        </div>
      )}
    </div>
  );
};

export default NewsCardTitle;
