import React from "react";

const CustomerCard = (props) => {
  return (
    <div className="card rounded-[20px] py-[72px] space-y-5 text-center dark:bg-exact-purple px-7 bg-white">
      <h2 className={`text-6xl ${props.color}`} >{props.title}</h2>
      <p className="text-lg dark:text-white/75 text-exact-gray">{props.desc}</p>
    </div>
  );
};

export default CustomerCard;
