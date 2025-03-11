"use server";
import InformationTable from "../../features/InformationTable/Table";
const tableData = [
  {
    position: "Первый проректор",
    name: "Даниленко Иван Николаевич",
    phone: "(3462) 762-800",
    extension: "1101",
  },
];
const PhoneDirectory = () => {
  return (
    <div className="flex flex-col ">
      <h2 className="uppercase text-[#444444] mb-[31px]">
        ЕДИНЫЙ МУЛЬТИКАНАЛЬНЫЙ ТЕЛЕФОН (3462) 762-800
      </h2>
      <div className="flex flex-col gap-[16px] bg-white p-[16px] rounded-[24px] text-[#444444]">
        <h3 className="text-[24px] font-medium">Ректорат</h3>
        <InformationTable data={tableData} />
      </div>
    </div>
  );
};

export default PhoneDirectory;
