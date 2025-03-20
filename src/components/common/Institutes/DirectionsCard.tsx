import Button from "@/src/components/ui/Button/Button";
import React from "react";
type Props = {
  numberDirections: string;
  nameDirections: string;
  yearDirections: string;
  cafedra: string;
};
const DirectionsCard = ({
  numberDirections,
  nameDirections,
  yearDirections,
  cafedra,
}: Props) => {
  return (
    <div className="max-w-[468px] flex flex-col gap-[16px] p-[15px] border border-sur-footer-dark rounded-[20px] hover:-translate-y-1 hover:transition-transform duration-100">
      <div className="flex justify-between items-center pb-[15px] border-b border-[#ACA5A5]">
        <h4 className="font-bold text-[22px]">{numberDirections}</h4>
        <div className="border border-sur-footer-dark rounded-[30px] py-[5px] px-[15px]">
          {yearDirections}
        </div>
      </div>
      <div className="flex flex-col gap-[8px]">
        <h4 className="text-[22px] font-medium">{nameDirections}</h4>
        <p>{cafedra}</p>
      </div>
      <Button className="self-start">Подробнее</Button>
    </div>
  );
};

export default DirectionsCard;
