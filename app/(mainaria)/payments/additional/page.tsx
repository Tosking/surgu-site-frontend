import AnimatedSection from "@/src/components/features/AnimatedSection/AnimatedSections";
import React from "react";

const AdditionalPage = () => {
  return (
    <AnimatedSection>
      <div className="mt-[85px] mb-[140px] text-black w-100 text-center">
        <span className="text-[18px] text-[#292a2d] font-[400]">
          Для оплаты дополнительных услуг перейдите по&nbsp;
          <a href="https://pay.surgu.ru/" className="underline hover:opacity-75">ссылке</a>.
        </span>
      </div>
    </AnimatedSection>
  );
};

export default AdditionalPage;
