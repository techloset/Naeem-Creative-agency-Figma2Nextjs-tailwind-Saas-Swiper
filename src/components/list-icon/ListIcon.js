import React from "react";
import checkmark from "../../assests/images/checkmark.png";
import Image from "next/image";

const ListIcon = (props) => {
  return (
    <li className="flex items-center">
      <Image src={checkmark} alt="Icon" className="lg:w-[27px] w-5 lg:h-[27px] h-5 mr-6" />
      <p className="text-base lg:text-lg">{props.content}</p>
    </li>
  );
};

export default ListIcon;
