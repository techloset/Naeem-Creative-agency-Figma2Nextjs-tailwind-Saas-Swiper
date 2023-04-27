import React from "react";
import checkmark from "../../assests/images/checkmark.png";
import Image from "next/image";

const ListIcon = (props) => {
  return (
    <li className="flex items-center">
      <div className="w-7 h-7 mr-6 ">
        <Image src={checkmark} alt="Icon" className="w-full h-full" />
      </div>
      <p className="text-lg">{props.content}</p>
    </li>
  );
};

export default ListIcon;
