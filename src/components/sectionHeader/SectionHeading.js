import React from "react";

const SectionHeader = (props) => {
  return (
    <div className="heading space-y-5 px-3 pb-3 mb-[58px]">
      <h6 className="text-exact-red text-center text-xl font-semibold">
        {props.title}
      </h6>
      <h3 className="text-center text-[#111029] dark:text-white lg:text-[42px] text-xl md:text-2xl font-semibold lg:leading-[56px]">
        {props.heading}
      </h3>
    </div>
  );
};

export default SectionHeader;
