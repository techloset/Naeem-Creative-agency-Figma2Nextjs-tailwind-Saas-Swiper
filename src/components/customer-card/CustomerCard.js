import React from "react";

const CustomerCard = (props) => {
  return (
    <div className="card rounded-[20px] py-[72px] space-y-5 px-7 text-center dark:bg-[#4C40F7] bg-white">
      <h2 className={`text-[56px] lg:text-4xl xl:text-[56px] leading-[72px] xl:leading-[72px] font-semibold ${props.color}`}>
        {props.title} 
      </h2>
      <p className="text-lg leading-[32px] lg:text-base xl:text-lg xl:leading-[32px] font-normal dark:text-[#FFFFFF] text-[#111029]">
        {props.desc}
      </p>
    </div>
  );
};

export default CustomerCard;
