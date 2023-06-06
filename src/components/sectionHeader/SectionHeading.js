import React from "react";

const SectionHeader = (props) => {
  return (
    <div className="heading space-y-5 xl:px-4 sm:p-0 mb-[60px]">
      <h6 className="text-[#FF2D59] text-center text-xl font-semibold">
        {props.title}
      </h6>
      <h3 className="text-center text-[#111029] dark:text-white text-xl md:text-2xl lg:text-4xl xl:text-[42px]
       px-1 tracking-[-0.1px]  font-semibold lg:leading-[56px]">
        {props.heading}
      </h3>
    </div>
  );
};

export default SectionHeader;
