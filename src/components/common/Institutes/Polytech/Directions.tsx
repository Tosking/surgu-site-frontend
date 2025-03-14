import React from "react";
import DirectionsCard from "./DirectionsCard";

const Directions = () => {
  return (
    <div className="flex flex-col text-sur-footer-dark ">
      <h2 className="text-[72px] font-bold mb-[41px]">Очная форма обучения</h2>
      <h3 className="text-[48px] font-bold mb-[65px]">Бакалавриат</h3>
      <div className="flex gap-[11px] flex-wrap directions-list">
        <DirectionsCard
          numberDirections={"09.03.04"}
          nameDirections={"Программная инженерия"}
          yearDirections={"4 года"}
          cafedra={"Кафедра автоматики и компьютерных систем"}
        />
        <DirectionsCard
          numberDirections={"09.03.04"}
          nameDirections={"Программная инженерия"}
          yearDirections={"4 года"}
          cafedra={"Кафедра автоматики и компьютерных систем"}
        />
        <DirectionsCard
          numberDirections={"09.03.04"}
          nameDirections={"Программная инженерия"}
          yearDirections={"4 года"}
          cafedra={"Кафедра автоматики и компьютерных систем"}
        />
        <DirectionsCard
          numberDirections={"09.03.04"}
          nameDirections={"Программная инженерия"}
          yearDirections={"4 года"}
          cafedra={"Кафедра автоматики и компьютерных систем"}
        />
      </div>
    </div>
  );
};

export default Directions;
