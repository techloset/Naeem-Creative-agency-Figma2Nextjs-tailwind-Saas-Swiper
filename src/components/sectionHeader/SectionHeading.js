import React from "react";

const SectionHeader = (props) => {
  return (
    <div className="heading space-y-5 p-2 my-8">
      <h1 className="text-exact-red text-center text-xl font-semibold">{props.title}</h1>
      <p className="text-center dark:text-white lg:text-[42px] text-xl md:text-2xl font-semibold lg:leading-[56px]">{props.heading}</p>
    </div>
  );
};

export default SectionHeader;
