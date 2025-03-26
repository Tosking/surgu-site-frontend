import React from "react";
import Input from "../../ui/Input/Input";
import Search from "@/public/search.svg";
import Image from "next/image";
const SearchInput = () => {
  return (
    <div className="relative ">
      <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
        <Image src={Search} alt="Search" />
      </div>
      <Input
        placeholder="Поиск"
        className="w-full placeholder-black text-black bg-transparent px-[24px] pl-[44px] py-[10px] border border-sur-footer-dark rounded-[30px] "
      />
    </div>
  );
};

export default SearchInput;
