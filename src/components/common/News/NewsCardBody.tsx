import React from "react";
import Image from "next/image";
interface INewsCardProps {
  img?: string;
  title: string;
}
const NewsCardBody = ({ img, title }: INewsCardProps) => {
  return (
    <div className="flex flex-col">
      <h3 className="mb-[18px]">{title}</h3>
      {img && (
        <div>
          <Image className=" rounded-[20px]" src={img} alt="" />
        </div>
      )}
    </div>
  );
};

export default NewsCardBody;
